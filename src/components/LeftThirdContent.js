import React from 'react'
import styled from 'styled-components'

function LeftThirdContent() {
    return (
        <LeftThirdStyled>
            <div className="left"></div>
            
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
