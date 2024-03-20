export default function Button(props) {
  return (
    <button className="rounded-xl border-b-4 border-slate-800 bg-slate-500 p-2 h-12 w-32 transition-all hover:w-36 hover:bg-slate-400">
      <p className="text-slate-200">{props.text}</p>
      {props.children}
    </button>
  );
}
