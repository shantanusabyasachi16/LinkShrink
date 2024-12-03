import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-500 shadow-md  hover:scale-105">
      <div className="container p-4 mx-auto">
        <nav className="py-3 flex ">
          <h1 className="text-5xl text-white font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-blue-300  transition-all duration-1000">LinkShrink</h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
