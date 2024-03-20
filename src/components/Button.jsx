export default function Button(props) {
  return (
    <button className="rounded-full overflow-hidden hover:border-b-4 hover:border-2 hover:border-slate-400 hover:border-b-slate-700 h-16 w-16 transition-all hover:bg-slate-500">
      {props.children}
      <p className="text-slate-200 text-xs mt-1 font-header">{props.text}</p>
    </button>
  );
}
