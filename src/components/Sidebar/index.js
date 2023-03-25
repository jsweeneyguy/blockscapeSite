import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} toggle ={toggle}>
      <Icon onClick ={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="Mint">Mint</SidebarLink>
          <SidebarLink to="info">Mint Info</SidebarLink>
          <SidebarLink to="About blockScapes">About the Art</SidebarLink>
          <SidebarLink to="Join Us">Join Us</SidebarLink>
          <SidebarLink onClick={() => window.location.href = 'https://linktr.ee/blockscapes'}>More</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
