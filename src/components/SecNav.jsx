import React, { useState } from "react";
import { Link } from "react-router-dom";
import DCKNav from "../assets/DCK - Footer.png";
import NavCurrency from "./NavCurrency";

const SecNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: "Hosting", hasDropdown: true },
    { name: "Servers", hasDropdown: true },
    { name: "Forex Servers", hasDropdown: false, path: "/forex-servers" },
    { name: "Proxy Servers", hasDropdown: false, path: "/proxy-servers" },
    { name: "Bulk Email", hasDropdown: false, path: "/bulk-email" },
    { name: "Google Workspace", hasDropdown: false, path: "/google-workspace" },
    { name: "Microsoft 365", hasDropdown: false, path: "/microsoft-365" },
    { name: "License", hasDropdown: false, path: "/license" },
    { name: "About us", hasDropdown: false, path: "/about-us" },
  ];

  const dropdownContent = {
    Hosting: ["Shared Hosting", "Reseller Hosting", "Python Hosting"],
    Servers: [
      "Dedicated Servers",
      "Virtual Private Servers(VPS)",
      "Cloud Servers",
    ],
  };

  // Function to generate link paths for dropdown items
  const getLinkPath = (subItem) => {
    if (subItem === "Shared Hosting") return "/shared-hosting";
    if (subItem === "Reseller Hosting") return "/reseller-hosting";
    if (subItem === "Python Hosting") return "/python-hosting";
    // You can add more routes here for other dropdown items if needed
    return "#";
  };

  return (
    <>
      <nav className="bg-cyan-100 border-b border-cyan-200 z-50 sticky top-0">
        <div className="max-w-[2800px] mx-auto px-0 sm:px-4 lg:px-[35px] lg:pr-[18px]">
          <div className="flex items-center h-11">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to={"/"}>
              <div className="flex items-center w-[180px] pt-1 relative right-[8px]">
                <img src={DCKNav} alt="Logo" />
              </div>
              </Link>
              
            </div>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center space-x-2 -ml-[5px]">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={closeDropdowns}
                      className="uppercase flex items-center px-3 py-2 text-[14px] font-bold text-[#075466] hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        item.hasDropdown ? toggleDropdown(item.name) : null
                      }
                      className="uppercase flex items-center -space-x-3 px-3 py-2 text-[14px] font-bold text-[#075466] hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200 cursor-pointer"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <svg
                          className={`w-[18px] h-[18px] relative left-[18px] transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                  )}

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-200 ease-in-out ${
                        activeDropdown === item.name
                          ? "opacity-100 visible transform scale-100 translate-y-0"
                          : "opacity-0 invisible transform scale-95 -translate-y-2"
                      }`}
                    >
                      <div className="py-1">
                        {dropdownContent[item.name]?.map((subItem, index) => (
                          <Link
                            key={index}
                            to={getLinkPath(subItem)}
                            onClick={closeDropdowns}
                            className="block px-4 py-2 text-xs font-medium text-gray-800 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-150"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="">
              <NavCurrency />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => toggleDropdown("mobile")}
                className="p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
              className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
                activeDropdown === "mobile"
                  ? "opacity-100 visible transform translate-y-0"
                  : "opacity-0 invisible transform -translate-y-4"
              }`}
            >
              <div className="px-4 py-2 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        item.hasDropdown ? toggleDropdown(item.name) : null
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    {item.hasDropdown && (
                      <div
                        className={`ml-4 mt-1 space-y-1 transition-all duration-200 ease-in-out ${
                          activeDropdown === item.name
                            ? "opacity-100 visible max-h-96"
                            : "opacity-0 invisible max-h-0 overflow-hidden"
                        }`}
                      >
                        {dropdownContent[item.name]?.map((subItem, index) => (
                          <Link
                            key={index}
                            to={getLinkPath(subItem)}
                            onClick={closeDropdowns}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors duration-150"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div className="fixed inset-0 z-30" onClick={closeDropdowns} />
      )}
    </>
  );
};

export default SecNav;
