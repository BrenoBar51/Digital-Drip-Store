import { NavLink } from "react-router-dom";
import LogoSemCor from "./LogoSemCor";

export default function AboutUs() {
  return (
    <div className="grid grid-rows-3">
      <NavLink to={"/"} className={({ isActive }) => (isActive ? "" : "")}>
        <div>
          <LogoSemCor />
        </div>
      </NavLink>
      <div className="text-Branco font-normal">
        <p>
          Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore.
        </p>
      </div>
      <div className="flex pt-[10%] relative gap-[8%]">
        <button>
          <box-icon name="facebook" type="logo" color="#ffffff"></box-icon>
        </button>
        <button>
          <box-icon name="instagram" type="logo" color="#ffffff"></box-icon>
        </button>
        <button>
          <box-icon name="twitter" type="logo" color="#ffffff"></box-icon>
        </button>
      </div>
    </div>
  );
}