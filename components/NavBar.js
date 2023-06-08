import Link from 'next/link';
// import { FaBars } from "react-icons/fa";
import React, {useState} from 'react';
import Image from 'next/image'

import {RiMailSendFill} from "react-icons/ri";
import {BiCommentEdit} from "react-icons/bi";
import {ImProfile} from "react-icons/im";

const Navbar = ({name}) => {
  const logoUrl = '/images/profile.jpg';
  // // if changed threshold here, change in NavBar css
  // const thresholdWidth = 700;
  // const [width, height] = useDeviceSize();

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="fixed top-0 left-0 w-screen h-16 m-0 px-2
                    flex
                    bg-background2 text-dark2 shadow-lg justify-between">
      <div className='flex my-auto'>
        <Link href="/">
          <Image
            priority
            src="/images/profile.jpg"
            className="overflow-hidden rounded-full w-12 h-12 "
            height={60}
            width={60}
            alt={name}
          />
        </Link>
        <a href="/" className='flex my-auto pl-2 font-fjallaOne text-2xl text-dark2 font-bold'>Mirielle Kruger</a>
      </div>
      
      <div className='flex items-center'><Link className="mr-8" href="/resume">
        <NavBarIcon icon={<ImProfile size="28" />} text="Resume"/>
      </Link>
      <Link className="mr-8" href="/blog">
        <NavBarIcon icon={<BiCommentEdit size="28" />} text="Blog"/>
      </Link>
      <Link  className="mr-2" href="/contact">
        <NavBarIcon icon={<RiMailSendFill size="28" />} text="Contact"/>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;

const NavBarIcon = ({icon, text = "tooltip"}) => (
  <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-dark2 text-background2
                  hover:bg-background2 hover:text-dark2
                  rounded-3xl hover:rounded-xl 
                  transition-all duration-300 ease-linear cursor-pointer group'>
    {icon}
    <span className='font-fjallaOne absolute w-auto p-2 m-1 min-w-max top-14 rounded-md shadow-md text-background2 bg-dark2 text-sm font-bold transition-all duration-100 origin-top scale-0 group-hover:scale-100'>
      {text}
    </span>
  </div>
)