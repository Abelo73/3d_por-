import React from "react";

const Nav2 = () => {
  return (
    <div className=" bg-white text-tertiary">
      <nav className="  font-bold flex items-center justify-between w-ful h-auto mx-8">
        <div>Log</div>

        <ul className="md:flex hidden items-center justify-center">
          <li className="p-2 m-2 bg-red-500">
            <a href="#">Home</a>
          </li>

          <li className="p-2 m-2">
            <a href="#">About</a>
          </li>

          <li className="p-2 m-2">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav2;
