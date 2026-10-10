export default function Art({ icon, className }: { icon: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <use href={`#i-${icon}`} />
    </svg>
  );
}
