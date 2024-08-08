import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

function SideBar() {
  const menus = [
    { name: "Home", icon: FaHome, link: "/" },
    { name: "Match", icon: MdOutlineConnectWithoutContact, link: "/Match" },
    {name: "chat", icon:IoChatboxEllipsesOutline, link: "/Chat"},
    { name: "Calendar", icon: CiCalendar, link: "/Calendar" },
    { name: "User", icon: CiUser, link: "/User" },
    { name: "Settings", icon: CiSettings, link: "/Settings" },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e]  ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <GiHamburgerMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, index) => (
            <Link
              to={menu.link}
              key={index}
              className="flex items-center text-sm gap3.6
            font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SideBar;
