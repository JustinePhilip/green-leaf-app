import React from 'react'
import styled from 'styled-components'

function PrimaryBtn({name}) {
    return (
        <PrimaryBtnStyled>
            {name}
        </PrimaryBtnStyled>
    )
}
const PrimaryBtnStyled = styled.button`
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
    margin-right: -250px;
`;

export default PrimaryBtn