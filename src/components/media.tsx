/**
 * Game media — official Roblox game-page screenshots (developer-uploaded) and
 * embedded creator videos. Images are self-hosted webp (~40KB each); videos use
 * youtube-nocookie + lazy loading so they don't touch LCP.
 */

export interface Shot {
  src: string; // /media/shotN.webp
  alt: string;
}

/** Screenshot grid with attribution. */
export function ScreenshotStrip({ shots, caption }: { shots: Shot[]; caption?: string }) {
  return (
    <figure>
      <div className="grid gap-3 sm:grid-cols-2">
        {shots.map((s) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={768}
            height={432}
            loading="lazy"
            className="hud-panel w-full object-cover"
          />
        ))}
      </div>
      <figcaption className="mt-2 text-xs text-dim">
        {caption ?? "Official Ghost Driver (Roblox) game screenshots — © Tilted Vehicles."}
      </figcaption>
    </figure>
  );
}

/** Lazy YouTube embed (nocookie domain). */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video overflow-hidden hud-panel">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}
