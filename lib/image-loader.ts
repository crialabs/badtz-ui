const baseUrl = process.env.NEXT_PUBLIC_CDN_URL || "https://cdn.badtz-ui.com";

const bunnyLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  const q = quality || 75;

  return `${baseUrl}${cleanSrc}?w=${width}&q=${q}`;
};

export default bunnyLoader;
