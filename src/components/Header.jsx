import styled from 'styled-components'
import { LogoIcon, UserIcon, HomeIcon, ShutdownIcon } from '../assets/images' 
import { imgValue } from '../../lib/util/headerIconUtil';
import {
    NavLink,
} from "react-router-dom";
import { useEffect, useState } from 'react';



const Header = () => {
    const navList = [ 'home', 'search', 'watchlist', 'originals', 'movies', 'series']
    const [Toggler, setToggler] = useState(false);

    useEffect(() => {

    },[Toggler])
    const handleClick = () => {
        setToggler(prevState => !prevState); // Toggle the state
    };


  return (
    <>
        <Nav>
            <NavLink to='/'><Logo src={LogoIcon} /></NavLink>
            <NavMenu>
            {
                navList.map((item, index) => {
                    const imgSrc = imgValue(item)
                    return (
                        <NavLink className='nav-link' key={index} to={`/${item}`}>
                            <img src={imgSrc} alt="icon" />
                            <span>{item}</span>
                        </NavLink>
                    )
                })       
            } 
            </NavMenu>
            <UserAuth  onClick={handleClick}>
                <img src={UserIcon} alt="admin/disney" />
            </UserAuth>
            {
                Toggler && (
                    <SignOutBtn onClick={handleClick}>
                        <li><NavLink className="nav-link" to="/"><img src={HomeIcon} alt="home" /><span>HOME</span></NavLink></li>
                        <li><NavLink className="nav-link" to="/login"><img src={ShutdownIcon} alt="sign out" /><span>SignOut</span></NavLink></li>
                    </SignOutBtn>
                )
            }
        </Nav>
    </>
  )
}

//styles 
const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 0 37px;
    min-height: 9vh;
    align-items: center;
    flex-direction: row;
    background-color: #040714;
    justify-content: space-between;
    z-index: 5500;
    opacity: 1;
      /* Animations */
    transition-timing-function: ease-in;
    transition: all 0.5s;
`;
const Logo = styled.img`
     width: 75px;
    height: auto;
    object-fit: fill;
    cursor: pointer;

    @media screen and (min-width: 550px){
        width: 101px;
    } 
`
const NavMenu = styled.div`
    display: none;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    > .nav-link{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        margin-right: 0.5rem; 
        text-decoration: none;
        color: white;

        @media screen and (min-width: 1200px){ 
            margin-right: 1rem;
        }

        img{
            width: 1.3rem;
            height: 1.3rem;
            z-index: auto;
            object-fit: fill;
        }

        span {
            font-size: 1rem;          
            line-height: 1.08;
            white-space: nowrap;
            position: relative;
            letter-spacing: 1px;
            padding: 0.5rem;
            margin-top: 5px;

            &:before {
                left: 0px;
                opacity: 0;
                right: 0px;
                content: "";
                height: 2px;
                width: auto;
                bottom: -6px;
                position: absolute;
                visibility: hidden;
                transform-origin: left center;
                border-radius: 0px 0px 4px 4px;
                background-color: rgb(249, 249, 249);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }


        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
    @media screen and (min-width: 991px) {
        display: flex;
    }

`;
const UserAuth = styled.div`
    height: 50px;
    width: 50px;
    cursor: pointer;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
    }
`;
const SignOutBtn = styled.div`
    top: 7vh;
    width: auto;
    height: auto;
    right: 3.5rem;
    display: flex;
    position: absolute;
    border-radius: 4px;
    align-items: center;
    padding: 0.5rem 1rem;
    justify-content: center;
    flex-direction: column;
    background-color: #040714;
    border: 1.3px solid rgba(151, 151, 151, 1);
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    z-index: 2000;
    @media screen and (min-width: 280px) and (max-width: 550px){
        top: 9vh;
        padding: 0.5rem;
    }
    li{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        border-bottom: 1.3px solid rgba(151, 151, 151, 1);
        margin: 0.5vh 0;
        
        > .nav-link{
            text-decoration: none;
             color: white;
            @media screen and (min-width: 280px) and (max-width: 550px){
                font-size: 0.8rem;
            }
            img{
                margin: 0 0.5rem;
                width: 0.9rem;
                height: 0.8rem;
                object-fit: cover;
                @media screen and (min-width: 280px) and (max-width: 550px){
                    margin: 0 0.3rem;
                    width: 0.7rem;
                    height: auto;
                }
            }
        }
    }

`;


export default Header;



