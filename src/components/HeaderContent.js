import React from 'react'
import styled from 'styled-components'
import Nav from './Nav';

function HeaderContent() {
    return (
        <HeaderConStyled>
            <Nav/>
            
        </HeaderConStyled>
    )
}

const HeaderConStyled = styled.div`
Nav{
    margin-top: -50px;
}

`;

export default HeaderContent
