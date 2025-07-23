"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const Navigationbar = () => {
  const ef = [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Services",
      link: "/services",
    },
  ];

  const navItems = [
    // {
    //   name: "About",
    //   link: "/about",
    // },
    // {
    //   name: "Products",
    //   link: "/products",
    //   submenu: [
    //     {
    //       title: "product 1",
    //       href: "/products/",
    //       description: "Various button styles for actions.",
    //     },
    //     {
    //       title: "Product 2",
    //       href: "/products/",
    //       description: "Container for content.",
    //     },
    //   ],
    // },
    // {
    //     name: "Services",
    //     link: "/services",
    //     submenu: [
    //       {
    //         title: "Services 1",
    //         href: "/services/",
    //         description: "Various button styles for actions.",
    //       },
    //       {
    //         title: "Services 2",
    //         href: "/services/",
    //         description: "Container for content.",
    //       },
    //     ],
    //   },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-screen">
      <Navbar className={"top-1"}>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};
export default Navigationbar;
