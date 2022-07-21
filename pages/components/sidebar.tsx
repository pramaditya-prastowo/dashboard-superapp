import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Link from "next/link";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          {" "}
          <div className="flex justify-between items-center">
            <Link
              href=""
              className="item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight "
            >
              <span>Karyawan</span>
            </Link>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Sidebar;
