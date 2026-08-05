'use client';
import { useState, useRef, useEffect, type ReactNode, type CSSProperties } from 'react';

interface Props {
  src?: string;
  alt?: string;
  objectPosition?: string;
  fallback: ReactNode; // shown when there is no image or it fails to load
  imgStyle?: CSSProperties;
}

/**
 * Renders a cover image that gracefully falls back to `fallback` (e.g. an emoji)
 * when the file is missing. Handles the case where the image 404s *before*
 * React hydrates (when onError never fires) by checking naturalWidth on mount.
 */
export default function TrackImage({ src, alt = '', objectPosition = 'center 12%', fallback, imgStyle }: Props) {
  const [broken, setBroken] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => { setBroken(false); }, [src]);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setBroken(true);
  });

  if (!src || broken) return <>{fallback}</>;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={() => setBroken(true)}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition, ...imgStyle }}
    />
  );
}
