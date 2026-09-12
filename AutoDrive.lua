-- AutoDrive.lua
-- Roblox Studio setup:
--   Workspace/GhostCar              - the car Model
--   Workspace/TrackWaypoints/1       - first waypoint Part
--   Workspace/TrackWaypoints/2       - second waypoint Part
--   Workspace/TrackWaypoints/3       - and so on
--
-- Put this file's contents in a Script under ServerScriptService.

local RunService = game:GetService("RunService")

local car = workspace:WaitForChild("GhostCar")
local waypointFolder = workspace:WaitForChild("TrackWaypoints")
local speed = 45
local arrivalDistance = 2

local waypoints = waypointFolder:GetChildren()

table.sort(waypoints, function(first, second)
	return tonumber(first.Name) < tonumber(second.Name)
end)

if #waypoints == 0 then
	error("TrackWaypoints must contain numbered waypoint Parts.")
end

for _, part in ipairs(car:GetDescendants()) do
	if part:IsA("BasePart") then
		part.Anchored = true
	end
end

local waypointIndex = 1

while true do
	local target = waypoints[waypointIndex]

	while (car:GetPivot().Position - target.Position).Magnitude > arrivalDistance do
		local currentCFrame = car:GetPivot()
		local currentPosition = currentCFrame.Position
		local offset = target.Position - currentPosition
		local direction = offset.Unit
		local distance = offset.Magnitude
		local step = math.min(speed * RunService.Heartbeat:Wait(), distance)
		local nextPosition = currentPosition + direction * step

		car:PivotTo(CFrame.lookAt(nextPosition, nextPosition + direction))
	end

	waypointIndex += 1
	if waypointIndex > #waypoints then
		waypointIndex = 1
	end
end
