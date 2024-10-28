import * as React from 'react';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <footer className="container fixed buttom-0 w-full bg-slate-900 text-white text-center py-5">
      © Copyright: LinkShrink - Tool to shorten a long link
    </footer>
  );
};

export default Footer;
