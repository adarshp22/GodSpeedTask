import React, { useState } from "react";
import { useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement; // Stores the root HTML element (<html>) in a variable called element. & used for add/removing the dark class to the root for Tailwinnd's dark mode

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[1px] border-primary/50 ">
        <nav className="container flex items-center justify-between h-[70px] py-2 px-2">
          {}
          <div className="text-2xl md:text-3xl text-white">
            <a href="#">
              God
              <span className="inline-block font-bold text-primary">
                {" "}
                speed
              </span>{" "}
            </a>
          </div>
          {}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all-duration-200 group-hover:rotate-180">
                      {" "}
                    </FaCaretDown>
                  </span>
                </a>
                {/* dropdown section */}
                <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-300">About us</li>
                    <li className="p-2 hover:bg-violet-300">Privacy policy</li>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Our Work{" "}
                  <span>
                    <FaCaretDown className="transition-all-duration-200 group-hover:rotate-180">
                      {" "}
                    </FaCaretDown>
                  </span>
                </a>
                {/* dropdown full-width section */}
                <div className="absolute -left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-2 text-black shadow-md group-hover:block ">
                  <div className="grid grid-cols-3 gap-5    ">
                    <div className="overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>

                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3">
                        Founders' Biggest Challenges
                      </h1>

                      <p className="text-sm text-slate-500">
                        Only 10% effort, time, and money yields the real
                        business breakthroughs. Are you struggling with the
                        other 90%?
                        <div className="grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold ">
                              The Godspeed Solution
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                1. 11x Tech and AI Infra
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                2. Tech Skills Augmentation
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                3. Founder & Funding Network
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold ">
                              Why Godspeed ?
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                1. Start seeing productivity in 1-2 days
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                2. Deploy and monitor any stack on cloud
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                3. Achieve scale readiness on day 1
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="https://picsum.photos/180"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>Team</li>
              <li>Pricing</li>
              <li>Contact us</li>
              <li>
                <div className="flex items-center gap-2">
                  <div>
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white hover:bg-primary/90" />
                  </div>
                  <div>
                    <p>Reach us</p>
                    <p>
                      <a href="tel: +91 123467890"> +91 1234567890</a>
                    </p>
                  </div>
                </div>
              </li>
              {/* {Mobile Menu Header} */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl "
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* {} */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl "
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile Menu Section */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
