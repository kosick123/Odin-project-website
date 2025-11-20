import React from 'react';
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="">
      
      {/* TOP FOOTER */}
      <div className="flex flex-col md:flex-row justify-between items-start p-10 gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col gap-5 max-w-sm">
          <div className="flex flex-row gap-4 items-center">
            <img 
              src={logo}
              alt="logo"
              className="w-10 h-10"
            />
            <p className="font-semibold text-black">THE ODIN PROJECT</p>
          </div>

          <p className="text-left">
            High quality coding education maintained by an open <br />
            source community.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left">

          <div>
            <h2 className="font-bold text-black">About us</h2>
            <ul className="flex flex-col gap-2 mt-3">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Success Stories</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-black">Support</h2>
            <ul className="flex flex-col gap-2 mt-3">
              <li>FAQ</li>
              <li>Contribute</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-black">Guides</h2>
            <ul className="flex flex-col gap-2 mt-3">
              <li>Community</li>
              <li>Installation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-black">Legal</h2>
            <ul className="flex flex-col gap-2 mt-3">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

        </div>

      </div>

      {/* LINE */}
      <hr className="border-t border-gray-200 w-full mx-10" />

      {/* BOTTOM FOOTER */}
      <div className="p-10 text-sm">
        <p>© 2025 The Odin Project. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
