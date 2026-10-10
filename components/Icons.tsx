// Small stroke icons (24x24). Colour comes from the parent via currentColor.
const PATHS: Record<string, string> = {
  "arrow": "<path d=\"M5 12h14\"/><path d=\"M13 6l6 6-6 6\"/>",
  "flask": "<path d=\"M9 3h6\"/><path d=\"M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3\"/><path d=\"M7.5 15h9\"/>",
  "snow": "<path d=\"M12 2v20M4.2 7l15.6 10M19.8 7L4.2 17\"/><path d=\"M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5\"/>",
  "heat": "<path d=\"M12 21a6 6 0 0 0 6-6c0-3.5-3-5.5-4-9-2 1.5-2.5 3.5-2.5 5-1.5-.5-2-2-2-3C7 9.5 6 12 6 15a6 6 0 0 0 6 6z\"/>",
  "ghee": "<path d=\"M9 3s4 4.3 4 7.3a4 4 0 0 1-8 0C5 7.3 9 3 9 3z\"/><path d=\"M16 11s3 3 3 5.2a3 3 0 0 1-6 0c0-2.2 3-5.2 3-5.2z\"/>",
  "cube": "<path d=\"M12 3l8 4.5v9L12 21l-8-4.5v-9z\"/><path d=\"M4 7.5l8 4.5 8-4.5\"/><path d=\"M12 12v9\"/>",
  "cup": "<path d=\"M6 8h12l-1.5 12h-9L6 8z\"/><path d=\"M14 8l1.5-5\"/>",
  "sparkle": "<path d=\"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z\"/><path d=\"M19 3v4M17 5h4\"/>",
  "bottle": "<path d=\"M10 3h4v3l1.5 2.5V20a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V8.5L10 6z\"/><path d=\"M8.5 13h7\"/>",
  "home": "<path d=\"M3 11l9-8 9 8\"/><path d=\"M5 10v10h14V10\"/><path d=\"M10 20v-6h4v6\"/>",
  "drop": "<path d=\"M12 2.5s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\"/>",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v6\"/><path d=\"M12 7.5h.01\"/>",
  "help": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7\"/><path d=\"M12 17h.01\"/>",
  "briefcase": "<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2\"/><path d=\"M3 13h18\"/>",
  "users": "<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20a6.5 6.5 0 0 1 13 0\"/><path d=\"M16 4.7a3.5 3.5 0 0 1 0 6.6\"/><path d=\"M18 14.2a6.5 6.5 0 0 1 3.5 5.8\"/>",
  "truck": "<path d=\"M2 6h11v10H2z\"/><path d=\"M13 9h4l4 4v3h-8\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/>",
  "store": "<path d=\"M3 9l1.5-5h15L21 9\"/><path d=\"M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0\"/><path d=\"M5 12v8h14v-8\"/><path d=\"M10 20v-5h4v5\"/>",
  "thermo": "<path d=\"M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z\"/><path d=\"M12 9v7\"/>",
  "cog": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1\"/>",
  "pin": "<path d=\"M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/>",
  "phone": "<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"/>",
  "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 7l9 6 9-6\"/>",
  "shield": "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5L15.5 10\"/>",
  "doc": "<path d=\"M6 3h8l4 4v14H6z\"/><path d=\"M14 3v4h4\"/><path d=\"M9 13h6M9 17h6\"/>",
  "lock": "<rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"2\"/><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"/>"
};

export type IconName = keyof typeof PATHS;

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg className={className} width={20} height={20} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: PATHS[name] ?? "" }} />
  );
}
