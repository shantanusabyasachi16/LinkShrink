import * as React from 'react';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-500 to-teal-500 shadow-md  hover:scale-105 text-white text-base text-center py-4">
      © Copyright: LinkShrink - Tool to shorten a long link
    </div>
  );
};

export default Footer;


