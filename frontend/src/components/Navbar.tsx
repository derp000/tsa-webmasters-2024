import { useEffect, useState } from "react";

import { Menu } from "@emotion-icons/evaicons-solid/Menu";
import { Popover } from "@headlessui/react";

import "./Navbar.css";


const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<string>("bg-opacity-0");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      
      windowHeight > 24
        ? setSticky("bg-opacity-100 shadow")
        : setSticky("bg-opacity-0");
    }
  };

  console.log(open);
  return (
    <nav className={`${sticky} flex lg:flex-col flex-row items-center p-4 fixed w-full top-0 z-50 bg-emerald-900 transition-duration-150`}>
      <div className="lg:hidden ml-auto text-white">
        <Popover>
          <Popover.Button>
            <Menu size={32} color="white" onClick={() => {
              setOpen(!open);
              }} />
          </Popover.Button>
          <Popover.Panel className="absolute w-full right-1">
            <div className="z-50 flex flex-col text-right text-white text-lg font-semibold tracking-tight bg-emerald-900">
              <div className="p-2 m-6">Outreach</div>
              <div className="p-2 m-6">Contact</div>
              <div className="p-2 m-6">Sponsors</div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>

      <div className="lg:flex hidden w-full justify-end">
        <ul className="flex justify-between items-center w-2/4 text-white text-lg">
          <li className="p-4">Outreach</li>
          <li className="p-4">Resources</li>
          <li className="p-4">Contact</li>
          <li className="p-4">Sponsors</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
