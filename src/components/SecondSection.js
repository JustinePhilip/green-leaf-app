import React from 'react'
import styled from 'styled-components'
import UpperSecSection from './UpperSecSection';

function SecondSection() {
    return (
        <SecondSectionStyled>
            <UpperSecSection/>
            <p className="p-now">We are Committed to Providing the Best Medical Care</p>
            <h5>We supply the very best in pharmaceutical products.</h5>
            
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


.p-now{
    position: absolute;
    width: 548px;
    height: 84px;
    left: 447px;
    top: 1380px;
    bottom: 0;
    margin-top: -60rem;

    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;

}

h5{
    position: absolute;
    width: 453px;
    height: 21px;
    left: 494px;
    top: 1493px;
    margin-top: -60rem;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
}


`;

export default SecondSection

