import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Signal &amp; Noise</h1>
      <p className="muted">Clarity in complexity.</p>
      <p>
        A public architecture lab exploring governance and structure in
        intelligent systems.
      </p>
      <p className="muted">This is the public surface. Architecture notes appear over time.</p>
      <p className="muted">No feed. No updates. Only artifacts.</p>
      <div className="list">
        <Link href="/architecture">Architecture →</Link>
      </div>
    </>
  );
}
