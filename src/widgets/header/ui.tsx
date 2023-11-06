/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

export const Header = () => (
  <div className="fixed navbar bg-base-100 z-50">
    <div className="container navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="#AboutMe" className="mr-[10px]">
                About Me
              </a>
            </li>
            <li>
              <a href="#Projects" className="mr-[10px]">
                Projects
              </a>
            </li>
            <li>
              <a href="#Skills" className="mr-[10px]">
                Skills
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">My Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#AboutMe" className="mr-[10px]">
              About Me
            </a>
          </li>
          <li>
            <a href="#Projects" className="mr-[10px]">
              Projects
            </a>
          </li>
          <li>
            <a href="#Skills" className="mr-[10px]">
              Skills
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label htmlFor="my_modal_0" className="btn">
          Contact Me
        </label>
      </div>
    </div>
  </div>
);
