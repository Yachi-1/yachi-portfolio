// Renders a vite-imagetools `as=picture` source object as a <picture> with
// avif/webp/fallback <source>s, intrinsic width/height (to avoid layout shift),
// and async decoding. Import images with a directive like:
//   import img from "../assets/foo.png?w=960;1440;1920&format=avif;webp;png&as=picture";
// then: <ResponsiveImage source={img} alt="..." loading="lazy" />

const FORMAT_MIME = {
  avif: "image/avif",
  webp: "image/webp",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  png: "image/png",
};

export default function ResponsiveImage({
  source,
  alt,
  style,
  className,
  loading = "lazy",
  fetchPriority,
  width,
  height,
}) {
  return (
    <picture className={className}>
      {Object.entries(source.sources).map(([format, srcset]) => (
        <source key={format} type={FORMAT_MIME[format] || `image/${format}`} srcSet={srcset} />
      ))}
      <img
        src={source.img.src}
        alt={alt}
        width={width || source.img.w}
        height={height || source.img.h}
        loading={loading}
        decoding="async"
        fetchpriority={fetchPriority}
        style={style}
      />
    </picture>
  );
}
