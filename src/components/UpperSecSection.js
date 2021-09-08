import React from 'react'
import styled from 'styled-components'
import SearchSection from './SearchSection';
// import SecSectionPicture from '../img/SecSectionPicture.png'

function UpperSecSection() {
    return (
        <UpperSecStyled>
            <SearchSection/>
            
        </UpperSecStyled>
    )
}

const UpperSecStyled = styled.section`
width: 50%;
background-color: var(--font-color);
height: 30%;
position: relative;
border-radius: 20px;
margin-left: 22rem;
margin-top: -5rem;

`;

export default UpperSecSection
