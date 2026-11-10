type IconName = "search" | "bag" | "pin" | "arrow" | "plus" | "minus" | "close" | "menu" | "check" | "snow";

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  const paths = {
    search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/></>,
    bag: <><path d="M5 8h14l1 12H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/></>,
    arrow: <><path d="M4 12h15"/><path d="m13 5 7 7-7 7"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    snow: <><path d="M12 2v20M4 6l16 12M20 6 4 18"/><path d="m8 4 4 2 4-2M8 20l4-2 4 2M3 10l1 4 4 2M21 10l-1 4-4 2"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
