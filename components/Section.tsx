import type { ReactNode } from "react";

export function SectionHead({ children, p }: { children: ReactNode; p?: string }) {
  return (
    <div className="sh">
      <h2>{children}</h2>
      {p && <p>{p}</p>}
    </div>
  );
}

export function Strip({ label, accent, right }: { label: string; accent?: string; right?: string }) {
  return (
    <div className="strip">
      <b>{label} {accent && <i>{accent}</i>}</b>
      {right && <span>{right}</span>}
    </div>
  );
}

export function Dashes({ on }: { on: number }) {
  return (
    <div className="dash">
      {[0, 1, 2].map((k) => (<i key={k} className={k <= on ? "on" : ""} />))}
    </div>
  );
}
