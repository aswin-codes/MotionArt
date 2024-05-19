import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-lg3 to-lg4 pt-2 pb-8">
      <div className="mx-auto my-4 flex justify-center gap-10">
        <a href="https://www.linkedin.com/in/aswin-raaj">
          <span className="text-xs opacity-90 text-slate-100">
            Documentation
          </span>
        </a>
        <a href="https://www.linkedin.com/in/aswin-raaj">
          <span className="text-xs opacity-90 text-slate-100">Support</span>
        </a>
      </div>
      <div>
        <p className="text-center text-slate-100 opacity-90 text-xs">
          © 2023 Copywrite. All rights reserved by QodeMatrix
        </p>
      </div>
    </div>
  );
};

export default Footer;
