import { useContext } from "react";
import Other from "./Other";
import { BasicProvider } from "./BasicContext";

export default function MainChild() {

    const {setText} = useContext(BasicProvider)

  return (
    <>
      <div>MainChild</div>
      <input onKeyUp={(e) => setText(e.target.value)} type="text" />
      <Other/>
    </>
  );
}
