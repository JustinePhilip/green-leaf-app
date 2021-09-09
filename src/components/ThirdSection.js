import React from 'react'
import styled from 'styled-components'
import LeftThirdContent from './LeftThirdContent';

function ThirdSection() {
    return (
        <ThirdSectionStyled>
            <LeftThirdContent/>
            <div className="center-content"></div>
            <div className="right-content"></div>
            
        </ThirdSectionStyled>
    )
}

const ThirdSectionStyled = styled.section`
display: flex;

/* .left-content{
    width: 50%;
    background-color: var(--font-color);
    height: 30%;
    position: relative;
    border-radius: 20px;
} */
`;
export default ThirdSection
