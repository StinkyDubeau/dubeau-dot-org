export default function Button(props) {
  return (
    <a
      href={props.to}
      target="_blank"
    >
      <button className="rounded-full overflow-hidden hover:border-b-4 hover:border-2 hover:border-green-400 hover:border-b-green-700 h-16 w-16 transition-all hover:bg-green-500">
        {props.children}
        <p className="text-green-200 text-xs mt-1 font-header">{props.text}</p>
      </button>
    </a>
  );
}
