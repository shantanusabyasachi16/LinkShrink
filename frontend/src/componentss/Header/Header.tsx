import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900 shadow-md">
      <div className="container p-4 mx-auto">
        <nav className="py-3 flex ">
          <h1 className="text-4xl text-blue-700 font-bold ">LinkShrink</h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
