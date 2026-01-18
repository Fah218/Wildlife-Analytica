export default function SpeciesImage({ url }) {
  if (!url) return null;

  return (
    <img
      src={url}
      alt="species"
      style={{
        marginTop: "28px",
        width: "100%",
        maxHeight: "280px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "15px",
        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        animation: "fadeIn 0.4s ease"
      }}
    />
  );
}
