import React from 'react'
import styled from 'styled-components'
import UpperSecSection from './UpperSecSection';

function SecondSection() {
    return (
        <SecondSectionStyled>
            <UpperSecSection/>
            
        </SecondSectionStyled>
    )
}

const SecondSectionStyled = styled.section`
position: absolute;
width: 99.9%;
height: 754px;
left: 1px;
top: 1022px;
margin-top:-326px;

background: linear-gradient(180deg, #219147 0%, rgba(30, 136, 66, 0.92) 56.25%, rgba(4, 70, 26, 0.87) 100%);


`;

export default SecondSection

