export default function Panel(props) {
  return (
    <div className={props.className}>
      <div className="bg-green-600 sm:scale-150 sm:mt-16 border-2 border-b-4 p-4 max-w-lg border-t-green-500 border-green-500 border-b-green-700 rounded-xl shadow-xl">
        {props.children}
      </div>
    </div>
  );
}
