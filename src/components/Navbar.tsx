import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const links = [
    { name: 'about', label: 'About Us' },
    { name: 'services', label: 'Our Services' },
    { name: 'contact', label: 'Contact Us' },
  ];

  const isActive = (name: string) => {
    const pathname = usePathname();
    return pathname === `/${name}`;
  };

  const closeMenu = () => setOpenMenu(false);

  return (
    // <nav className="container bg-white border-b border-gray-200 sticky top-0 z-10 shadow-md">
    //   <div className="container mx-auto px-4 flex items-center h-16 justify-between">
    //     {/* Logo Section */}
    //     <div className="flex items-center">
    //       <div className="flex-shrink-0 pr-6">
    //         <Link href="/" passHref>
    //           <img className="h-12 w-auto" src="/img/logo.jpeg" alt="Logo" />
    //         </Link>
    //       </div>
    //       {/* Links Section */}
    //       <div className="hidden md:flex space-x-6">
    //         {links.map((link) => (
    //           <Link key={link.name} href={`/${link.name}`} passHref>
    //             <span
    //               className={`relative text-gray-800 hover:text-tetra transition-colors duration-300 ease-in-out 
    //               before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
    //               before:bg-tetra before:scale-x-0 before:origin-left 
    //               before:transition-transform before:duration-300 before:ease-in-out 
    //               hover:before:scale-x-100 ${isActive(link.name) ? 'text-tetra border-tetra' : ''}`}
    //               onClick={closeMenu}
    //             >
    //               {link.label}
    //             </span>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   {/* Mobile Menu */}
    //   <div className="flex items-center space-x-4 justify-end px-4 py-4">
    //       <div className="flex md:hidden items-center">
    //         {/* Hamburger Icon */}
    //             <button onClick={() => setOpenMenu(!openMenu)} className="focus:outline-none">
    //               <FontAwesomeIcon icon={faBars} className='!w-6 !h-6'/>
    //             </button>
    //       </div>
    //   </div>
    //   {openMenu && (
    //     <div className="md:hidden px-4 pb-4 text-center shadow-xl">
    //       {links.map((link) => (
    //         <Link key={link.name} href={`/${link.name}`} passHref>
    //           <span
    //             className={`block py-2 text-gray-800 hover:text-tetra transition-colors duration-300 ease-in-out 
    //             ${isActive(link.name) ? 'text-tetra' : ''}`}
    //             onClick={closeMenu}
    //           >
    //             {link.label}
    //           </span>
    //         </Link>
    //       ))}
    //     </div>
    //   )}
    // </nav>
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-md">
  <div className="container mx-auto px-4 flex items-center h-16 justify-between">
    {/* Logo Section */}
    <div className="flex items-center">
      <div className="flex-shrink-0 pr-6">
        <Link href="/" passHref>
          {/* <img className="h-12 w-auto" src="/img/logo.jpeg" alt="Logo" /> */}
          <img className="h-12 w-auto" src="/img/logo_hz.png" alt="Logo" />
        </Link>
      </div>
      {/* Links Section */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link key={link.name} href={`/${link.name}`} passHref>
            <span
              className={`relative text-gray-800 hover:text-tetra transition-colors duration-300 ease-in-out 
              before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] 
              before:bg-tetra before:scale-x-0 before:origin-left 
              before:transition-transform before:duration-300 before:ease-in-out 
              hover:before:scale-x-100 ${isActive(link.name) ? 'text-tetra border-tetra' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
    {/* Mobile Menu Button */}
    <div className="flex md:hidden items-center">
      <button onClick={() => setOpenMenu(!openMenu)} className="focus:outline-none">
        <FontAwesomeIcon icon={faBars} className='!w-6 !h-6'/>
      </button>
    </div>
  </div>
  {/* Mobile Menu */}
  {openMenu && (
    <div className="md:hidden px-4 pb-4 shadow-xl">
      {links.map((link) => (
        <Link key={link.name} href={`/${link.name}`} passHref>
          <span
            className={`block py-2 text-gray-800 hover:text-tetra transition-colors duration-300 ease-in-out 
            ${isActive(link.name) ? 'text-tetra' : ''}`}
            onClick={closeMenu}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  )}
</nav>

  );
}
