import { useEffect } from "react";
import Hut from "./hut";

function Ids() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Hut />
    </div>
  );
}
export default Ids;
