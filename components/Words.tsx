// Word-by-word headline reveal (CSS animation, works without JS)
export default function Words({ text, start = 0 }: { text: string; start?: number }) {
  const words = text.split(" ");

  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="wd">
            <span style={{ animationDelay: `${start + i * 0.08}s` }}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
