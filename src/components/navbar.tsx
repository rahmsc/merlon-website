"use client";
import Image from "next/image";
import React from "react";

import HomeButton from "../../public/img-btn/home-button.png";
import BuyButton from "../../public/img-btn/buy-button.png";
import LoreButton from "../../public/img-btn/lore-button.png";
import TalkButton from "../../public/img-btn/talk-button.png";

const NavBar: React.FC = () => {
  return (
    <div className="fixed left-0 top-8 z-50 flex h-16 w-full items-center justify-center">
      <nav className="flex">
        <ul className="flex space-x-4">
          <li className="hover:rounded-2xl hover:shadow-lg">
            <a href="/">
              <Image src={HomeButton} alt="Home" width={200} height={50} />
            </a>
          </li>
          <li className="hover:rounded-2xl hover:shadow-lg">
            <a href="/buy">
              <Image src={BuyButton} alt="Buy" width={200} height={50} />
            </a>
          </li>
          <li className="hover:rounded-2xl hover:shadow-lg">
            <a href="/lore">
              <Image src={LoreButton} alt="Lore" width={200} height={50} />
            </a>
          </li>
          <li className="hover:rounded-2xl hover:shadow-lg">
            <a href="/talk">
              <Image src={TalkButton} alt="Talk" width={200} height={50} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
