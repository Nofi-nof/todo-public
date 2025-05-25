import Pages from "./Pages";

export default function Title() {
  return (
    <div className="my-0 mx-auto max-w-screen-sm">
      <h1 className="text-xl text-center py-5">買い物リスト</h1>
      <div className="justify-center flex">
        <Pages />
      </div>
    </div>
  );
}
