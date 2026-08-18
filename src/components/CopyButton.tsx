"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          },
          () => {},
        );
      }}
      className="hud-panel px-3 py-1 text-sm font-medium text-hud hover:border-hud"
      aria-label={`Copy code ${value}`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
