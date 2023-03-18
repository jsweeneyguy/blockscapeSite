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
          <SidebarLink to="About blockScapes">About the Art</SidebarLink>
          <SidebarLink to="Join Us">Join Us</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
