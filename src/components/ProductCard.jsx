export default function ProductCard({ title, onClick, isCTA = false }) {
  return (
    <div
      className={`product-tile ${isCTA ? "cta" : ""}`}
      onClick={onClick}
      role="button"
    >
      <h3>{title}</h3>
      {isCTA && <span>Explore all products →</span>}
    </div>
  );
}
