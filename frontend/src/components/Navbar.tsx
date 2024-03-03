import { useEffect, useState } from "react";

import Dropdown, { SubtitleItemArray } from "./Dropdown";

import { Menu } from "@emotion-icons/evaicons-solid/Menu";
import { Popover } from "@headlessui/react";

import "./Navbar.css";

const aboutItems: SubtitleItemArray = [
  { title: "Team Info", to: "info", key: "info" },
  { title: "History", to: "history", key: "history" },
  { title: "Awards", to: "awards", key: "awards" },
  { title: "Leadership", to: "leadership", key: "leadership" },
];

const parentsItems: SubtitleItemArray = [
  { title: "Forms", to: "forms", key: "forms" },
  { title: "Wishlist", to: "wishlist", key: "wishlist" },
  {
    title: "Newsletter",
    to: "https://frc1257.github.io/blog",
    key: "newsletter",
    external: true,
  },
];

const resourcesItems: SubtitleItemArray = [
  { title: "Documentation", to: "docs", key: "docs" },
  { title: "Handbook", to: "book", key: "book" },
];

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

  return (
    <nav className={`${sticky} flex lg:flex-col flex-row items-center p-4 fixed w-full top-0 z-50 bg-emerald-900 transition-duration-150`}>
      <div className="lg:hidden ml-auto text-white">
        <Popover>
          <Popover.Button>
            <Menu size={32} color="white" onClick={() => setOpen(!open)} />
          </Popover.Button>
          <Popover.Panel className="absolute w-full top-20 right-1 z-50">
            <div className="z-50 flex flex-col text-left text-white text-lg font-semibold tracking-tight bg-gray-900 rounded-lg">
              <div className="p-2 m-6">
                <Dropdown title="About" subtitles={aboutItems} />
              </div>
              <div className="p-2 m-6">Outreach</div>
              <div className="p-2 m-6">
                <Dropdown title="Parents" subtitles={parentsItems} />
              </div>
              <div className="p-2 m-6">
                <Dropdown title="Resources" subtitles={resourcesItems} />
              </div>
              <div className="p-2 m-6">Contact</div>
              <div className="p-2 m-6">Sponsors</div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>

      <div className="lg:flex hidden justify-center">
        <ul className="flex justify-between items-center gap-4 text-white text-lg font-bold">
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
