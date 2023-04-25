import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <Wrapper>
      <SuperHeader />
      <MainHeader>
        <StyledLogo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </Wrapper>
  );
};


const Wrapper = styled.header`
`;

const StyledLogo = styled(Logo)`
  flex: 0 0 auto;
`;

const MainHeader = styled.div`
  display: flex;
  height: 72px;
  gap: 48px;
  padding-inline: var(--padding-inline);
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
