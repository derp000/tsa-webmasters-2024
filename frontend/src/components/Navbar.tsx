import { useEffect, useRef, useState } from "react";

import { Menu } from "@emotion-icons/evaicons-solid/Menu";
import { Popover } from "@headlessui/react";

import "./Navbar.css";


const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<string>("bg-opacity-0");
  const test = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      
      if(windowHeight > 24 || open){
        setSticky("bg-opacity-100 shadow");
        test.current = true;
      }else{
        setSticky("bg-opacity-0");
        test.current = false;
      }
    }
  };

  console.log(test);
  console.log(open);
  return (
    <nav className={`${sticky} flex lg:flex-col flex-row items-center p-4 fixed w-full top-0 z-50 bg-emerald-900 transition-duration-500`}>
      <div className="lg:hidden ml-auto text-white">
        <Popover>
            <div className="flex justify-end">
              <Popover.Button className="focus:outline-none">
                <Menu size={32} color="white" onClick={() => {
                  if(!open || test){
                    setSticky("bg-opacity-100 shadow");
                  }else{
                    setSticky("bg-opacity-0");
                  }
                  setOpen(!open);
                  }} />
              </Popover.Button>
            </div>
          <Popover.Panel className="w-full right-1 bg">
            <div className="z-50 flex flex-col text-right text-white text-base font-semibold tracking-tight">
              <div className="m-6 mr-2">Home</div>
              <div className="m-6 mr-2">Learn More</div>
              <div className="m-6 mr-2">Impact</div>
              <div className="m-6 mr-2">Benefits</div>
              <div className="m-6 mr-2 text-emerald-500">About</div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>

      <div className="lg:flex hidden w-full justify-end">
        <ul className="flex justify-between items-center w-2/4 text-white text-base font-semibold pr-5">
          <li className="p-2">Home</li>
          <li className="p-2">Learn More</li>
          <li className="p-2">Impact</li>
          <li className="p-2">Benefits</li>
          <li className="p-2 text-emerald-500">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
