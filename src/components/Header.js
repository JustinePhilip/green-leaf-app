import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent';

function Header() {
    return (
        <HeaderStyled>
            <HeaderContent/>
            
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header``;

export default Header
