import React from 'react'
import styled from 'styled-components'

function HeadConBtn({name}) {
    return (
        <HeadConBtnStyled>
            {name}
            
        </HeadConBtnStyled>
    )
}

const HeadConBtnStyled = styled.button`
margin-top: 2rem;
    cursor: pointer;
    left: 90.13%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    padding: .6rem 1.8rem;
    border-radius: 15px;
    background: var(--font-color);
    color: var(--green-color);
    border-radius: 10px;
    border: none;
    font-weight: 700;

    :hover{
        background-color: var(--green-color);
        color: var(--font-color);
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
        transition: all .5s ease-in-out;

    }
`;

export default HeadConBtn
