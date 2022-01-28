import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Home, Icon, Mail, Tv, User } from 'react-feather';

function MainLayout({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const navLinks: [Icon, string, string][] = [
    [Home, 'Home', '/'],
    [User, 'About', '/about'],
    [Tv, 'Portfolio', '/portfolio'],
    [Mail, 'Contact', '/contact'],
  ];
  return (
    <>
      <div
        className="bg-white fixed top-0 md:w-80 w-full md:h-full flex md:flex-col z-10"
        style={{
          boxShadow: '0 0 30px rgb(62 68 125 / 8%)',
        }}
      >
        <div className="flex-auto flex md:flex-col justify-center items-center">
          <div className="flex-auto flex flex-col md:justify-center md:w-[13ch] md:mr-1 font-display">
            <Link passHref href="/">
              <a>
                <h6 className="text-3xl text-center py-4 md:text-lg md:mb-8 font-medium tracking-wider">Prashan Fernando</h6>
              </a>
            </Link>
            <div className="flex md:block justify-around fixed md:static w-full bottom-0 border-0 border-t md:border-t-0 border-t-[#ebebeb] border-solid">
              {navLinks.map(([icon, label, href], i) => (
                <NavLink key={label} icon={icon} label={label} href={href} />
              ))}
            </div>
          </div>
        </div>
        <footer className="flex-none hidden md:block">
          <p className="italic py-4 px-4 text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Prashan Fernando. All rights reserved.
          </p>
        </footer>
      </div>
      <main className="g-[#f8f8f8] md:ml-80 pt-24 md:pt-0 border-0 md:border-l border-l-[#ebebeb] border-solid h-full">
        {/* <div className="max-w-screen-lg mx-auto py-8 px-8 flex-auto">{children}</div> */}
        {children}
      </main>
    </>
  );
}

export default MainLayout;

type NavLinkProps = {
  icon: Icon;
  href: string;
  label: string;
};

const NavLink: React.FC<NavLinkProps> = ({ icon: Icon, label, href }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <>
      <Link passHref href={href}>
        <a
          className={classnames(
            'md:hidden flex-auto border-b-2 border-solid bg-white border-[#ebebeb] py-5 tracking-wide hover:tracking-widest transition-all duration-200 font-medium md:mb-3 text-slate-600 hover:text-slate-900 flex flex-col items-center justify-center group',
            {
              'text-slate-900': isActive,
            },
          )}
        >
          <Icon
            size={18}
            className={classnames('transition-all duration-200 mr-2 mb-1 group-hover:scale-125 group-active:!scale-105', {
              'scale-125': isActive,
            })}
          />
        </a>
      </Link>
      <Link passHref href={href}>
        <a
          className={classnames(
            'hidden md:block py-3 tracking-wide hover:tracking-widest transition-all duration-300 font-medium mb-3 text-slate-500 hover:text-slate-900',
            {
              'text-slate-900': isActive,
            },
          )}
        >
          <div className="flex items-center">
            <Icon size={18} />
            <span className="hidden md:inline ml-3">{label}</span>
          </div>
        </a>
      </Link>
    </>
  );
};