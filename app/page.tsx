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
      <div className="list">
        <Link href="/architecture">Architecture →</Link>
      </div>
    </>
  );
}
