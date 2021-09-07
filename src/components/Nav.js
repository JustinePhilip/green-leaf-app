import React from 'react'
import styled from 'styled-components';
import green_logo from '../img/green_logo.png'
import PrimaryBtn from './PrimaryBtn';
import PrimaryButton from './PrimaryButton';

function Nav() {
    return (
        <NavStyled>
            <img src={green_logo} alt="" className="logo"/>
            <ul>
                <li>
                    <a href="Home">Home</a>
                </li>
                <li>
                    <a href="About">About</a>
                </li>
                <li>
                    <a href="Services">Services</a>
                </li>
                <li>
                    <a href="Contact">Contact</a>
                </li>
            </ul>
            <PrimaryBtn name={'Sign In'}/>
            <PrimaryButton name={'Sign Up'}/>

            
        </NavStyled>
    )
}
const NavStyled = styled.nav`
      display: flex;
      justify-content: space-between;
      align-items:center ;
      margin-top: -50px;

      ul{
        display: flex;
        justify-content: space-between;
        /* padding: 20px; */
        width:30%;
      }
`;

export default Nav
