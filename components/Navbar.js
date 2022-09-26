import React from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <NavbarContainer>
        <Link style={{ padding: "10px", marginLeft: "20px" }} href="/" passHref>
          <LogoImage>
            <Image
              src="/blueauto_logo.png"
              alt="Logo"
              width={190}
              height={32}
            />
          </LogoImage>
        </Link>
        <MenuDropdown onClick={() => setNavbarOpen(!navbarOpen)}>
          <i className="text-darkBlue-900 fas fa-bars"></i>
        </MenuDropdown>
        <Menu $navbarOpen={navbarOpen}>
          <NavList>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </NavList>
        </Menu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
// <a className="lg:text-darkBlue-900 font-semibold lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xl uppercase ">
// className="absolute ml-auto align-end cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent visible block md:hidden outline-none focus:outline-none"

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: rgb(245, 245, 245) !important;
  padding: 5px;
`;

const LogoImage = styled.div`
  margin: 0 0 10px 10px;
`;

const NavList = styled.ul`
  display: flex;
  right: 0;
  z-index: 2000;
  font-size: 19px;
  color: rgb(0, 0, 90);

  @media (max-width: 750px) {
    background-color: rgb(245, 245, 245);
    width: 20vw;
    padding: 20px 0;
    z-index: 1000;
    height: fit-content;
    flex-direction: column;
    gap: 20px;
    margin-left: 20px;
    position: absolute;
    padding-top: 20px;
  }

  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
    align-items: center;
  }

  li {
    margin-left: 10px;
    font-weight: 600;
    :hover {
      color: rgb(90, 90, 190);
    }
  }
`;

const Menu = styled.div`
  display: block;
  position: absolute;
  color: white;
  right: 80px;
  align-self: center;
  @media (max-width: 750px) {
    display: ${(props) => (props.$navbarOpen ? "block" : "none")};
    right: 0;
    top: 40px;
    font-size: 20px;
  }
`;

const MenuDropdown = styled.button`
  display: none;
  position: absolute;
  margin-left: auto;
  right: 0;
  z-index: 199;
  outline: none;
  align-self: end;
  :focus {
    outline: none;
  }
  cursor: pointer;
  font-size: 25px;
  line-height: 1;
  padding: 3px;

  @media (max-width: 750px) {
    transition: display 2s;
    display: block;
  }
`;
