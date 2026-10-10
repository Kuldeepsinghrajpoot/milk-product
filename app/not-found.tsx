import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap" style={{ textAlign: "center", padding: "120px 20px" }}>
      <h1 style={{ fontSize: 64, color: "var(--acc)" }}>404</h1>
      <p>Ye page nahi mila. Page not found.</p>
      <p><Link className="btn acc" href="/">Home par jao</Link></p>
    </div>
  );
}
