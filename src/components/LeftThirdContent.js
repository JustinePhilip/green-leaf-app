import React from 'react'
import styled from 'styled-components'

function LeftThirdContent() {
    return (
        <LeftThirdStyled>
            <div className="left"></div>
            3&4 bedroom terrace, all rooms en suite, 
            24hrs uninterrupted power, treated and potable water, 
            road fully tared to the houses. serene and environment to 
            give you the comfort and security you desire.
            
        </LeftThirdStyled>
    )
}

const LeftThirdStyled = styled.div`
  .left{
    width: 50%;
    background-color: var(--font-color);
    height: 30%;
    position: relative;
    border-radius: 20px;
  }
`;
export default LeftThirdContent
