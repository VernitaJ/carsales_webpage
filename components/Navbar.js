import React from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <NavbarContainer>
      <Link style={{ padding: "10px", marginLeft: "20px" }} href="/">
        <Image src="/blueauto_logo.png" alt="Logo" width={190} height={32} />
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
  );
};

export default Navbar;

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: rgb(245, 245, 245) !important;
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
    transition:
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
  right: 0;
  z-index: 199;
  outline: none;
  align-self: center;
  :focus {
    outline: none;
  }
  cursor: pointer;
  font-size: 25px;
  line-height: 1;
  @media (max-width: 750px) {
    display: block;
  }
`;
