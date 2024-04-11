export default function Frame(props) {
  return (
    <>
      <div className="bg-zinc-800 min-h-screen">
        <div className="max-w-screen-xl m-auto p-4">
          {" "}
          <div className="flex justify-center -mt-24">
            <div className="flex flex-col justify-center h-screen">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
