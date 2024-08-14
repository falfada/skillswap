import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import logo from '../Logo/SkillSwapLOGO.png';
import Auth from "../../utils/auth";

function SideBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const menus = [
    { name: "Home", icon: FaHome, link: "/" },
    { name: "Match", icon: MdOutlineConnectWithoutContact, link: "user/Match" },
    { name: "chat", icon: IoChatboxEllipsesOutline, link: "user/Chat" },
    { name: "Calendar", icon: CiCalendar, link: "user/Calendar" },
    { name: "User", icon: CiUser, link: "user/profile" },
  ];
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#083344]  ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
              <img src={logo} alt="Skillswap's Logo" className="logo " style={{ display: 'flex', margin:'5px', paddingTop: '10px', width: '100px', height: 'auto' }} />

        <div className="py-3 flex justify-end">
          <GiHamburgerMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className=" mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, index) => (
            <Link
              to={menu.link}
              key={index}
              className="flex items-center text-sm gap3.6
            font-medium p-2 hover:bg-cyan-600 rounded-md"
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

        <div >
        <Link
              to="/logout"
              className="flex items-center text-sm p-2 ext-center bg-green-700 text-950 py-2 rounded-lg font-semibold mt-4 hover:bg-green-500 focus:scale-95 transition-all duration-200 ease-out"
            >
              <div >
              <SlLogout className="whitespace-pre duration-500 text-950"/>
              </div>
              <h2
                className={`whitespace-pre duration-500 text-950 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Log Out
              </h2>
            </Link>
        </div>
      </div>
    </section>
  );
}
export default SideBar;
