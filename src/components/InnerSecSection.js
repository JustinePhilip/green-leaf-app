import React from 'react'
import styled from 'styled-components'
import Delivery from '../img/Delivery.png'
import customers from '../img/customer.png'
import search from '../img/Vectorsearch.png'
import Vector from '../img/Vector.png'

function InnerSecSection() {
    return (
        <InnerSecSectionStyled>
            <div className="LeftInner">
                <img src={Delivery} alt="Delivery" className="Delivery" />
                <img src={customers} alt="customers" className="customer" />
            </div>

            <div className="RightInner">
                <button>
                    <img src={search} alt="search" className="search" />
                </button>

                <div className="InLeft">
                    <img src={Vector} alt="Vector" className="vector" />
                    <p className="p_search">Search nearest location</p>
                </div>

            </div>
            
        </InnerSecSectionStyled>
    )
}
const InnerSecSectionStyled = styled.section`

display: flex;
justify-content: space-between;
align-items: center;
margin-left: 1.5rem;


/* this is for the left contents */
.LeftInner{
    display: flex;
    margin-top: 5rem; 
    margin-left: 0.6rem;
    /* justify-content: space-between; */

    .customer{
        margin-left: 1.5rem;
        width: 40%;
        height: 80%;
    }

    .Delivery{
        width: 40%;
        height: 80%;
    }
}


/* this is for the right contents */
.RightInner{
    position: absolute;
width: 300px;
height: 58.31px;
left: 502.17px;
top: 84.01px;
margin-left: -10rem;
/* border: 0.5px solid rgba(0, 0, 0, 0.5); */
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
box-sizing: border-box;
border-radius: 15px;



    .InLeft{
        display: flex;
        margin-top: 25px;
    }

    .p_search{
        color: black;
        opacity: 0.7;
        font-size: 13px;
        margin-left: 11px;
    }

    .vector{
        height: 20px;
        width: 20px;
        margin-left: 15px;
    }


    button{
    background-color: var(--green-color);
    border: none;
    border-radius: 15px;
    height: 58.31px;
    width: 58.31px;
    float: right;
    opacity: 1;
    cursor: pointer;
/* 
    :hover{
        background-color: var(--font-color);
         -webkit-transition: ease-out 0.4s;
        -moz-transition: ease-out 0.4s;
        
        transition: all .5s ease-in-out;
        } */
    }

   
}
`;

export default InnerSecSection
