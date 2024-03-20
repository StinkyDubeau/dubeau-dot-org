export default function Frame(props) {
  return (
    <>
      <div className="bg-zinc-800 min-h-screen">
        <div className="max-w-screen-xl p-4">{props.children}</div>
      </div>
    </>
  );
}
