import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent';
import Nav from './Nav';

function Header() {
    return (
        <HeaderStyled>
            <Nav/>
            <HeaderContent/>
            
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header``;

export default Header
