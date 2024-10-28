import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900 fixed top-0 w-full ">
      <div className="container p-2 mx-auto">
        <nav className="py-5">
          <div className="text-3xl text-white">
            LinkShrink
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
