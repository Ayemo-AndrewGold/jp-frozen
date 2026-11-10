import { Icon } from "./Icon";

export function Toast({ message }: { message: string }) {
  if (!message) return null;
  return <div className="fixed bottom-[110px] left-1/2 z-[60] flex w-[calc(100%-28px)] -translate-x-1/2 items-center justify-center gap-2 rounded-lg bg-[#003673] px-4 py-3 text-[10px] text-white shadow-lg sm:bottom-6 sm:w-auto sm:whitespace-nowrap sm:text-[11px]" role="status"><span className="grid place-items-center text-[#62df7d]"><Icon name="check" size={16}/></span>{message}</div>;
}
