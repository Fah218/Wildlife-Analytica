export default function ResultCard({ title, content }) {
  return (
    <div className="card">
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      <p style={{ whiteSpace: "pre-line" }}>{content}</p>
    </div>
  );
}
