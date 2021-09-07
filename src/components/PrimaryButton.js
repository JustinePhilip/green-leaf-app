import React from 'react'
import styled from 'styled-components'

function PrimaryButton({name}) {
    return (
        <PrimaryButtonStyled>
            {name}         
        </PrimaryButtonStyled>
    )
}
const PrimaryButtonStyled = styled.button`
 cursor: pointer;
 left: 90.13%;
right: 0%;
top: 0%;
bottom: 0%;
padding: .6rem 1.8rem;
border-radius: 15px;
background: #219147;
border-radius: 10px;
border:none;

            :hover{
                background-color: var(--font-color);
                color: var(--green-color);
                box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
                transition: all .5s ease-in-out;
            }

 `;

    
export default PrimaryButton;
