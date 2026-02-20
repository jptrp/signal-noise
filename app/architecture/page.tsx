import Link from "next/link";

export const metadata = { title: "Architecture — Signal & Noise" };

export default function ArchitectureIndex() {
  return (
    <>
      <h1>Architecture</h1>
      <div className="list">
        <Link href="/architecture/structural-governance-in-ai-systems">
          Structural Governance in AI Systems →
        </Link>
      </div>
      <p className="muted">This index grows slowly. Each entry is an architectural artifact.</p>
    </>
  );
}
