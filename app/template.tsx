// A template re-mounts on every navigation, which gives a soft page transition.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="pt">{children}</div>;
}
