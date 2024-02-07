import styled from 'styled-components'
import { LogoIcon, UserIcon } from '../assets/images' 
import { imgValue } from '../../lib/util/headerIconUtil';


// subComponents
// eslint-disable-next-line react/prop-types
const NavItem = ({ item }) => {
    const imgSrc = imgValue(item)
    return (
        <Link>
            <img src={imgSrc} alt="" />
            <span>{item}</span>
        </Link>
    )
}


//mainComponent
const Header = () => {
    const navList = [ 'home', 'search', 'watch list', 'originals', 'movies', 'series']
  return (
    <Nav>
        <Logo src={LogoIcon} />
        <NavMenu>
        {
            navList.map((item, index) => {
                return (
                    <NavItem key={index} item={item}/>
                )
            })       
        } 
        </NavMenu>
        <UserImg src={UserIcon}/>

    </Nav>
  )
}


export default Header;

//styles 
const Nav = styled.nav`
    display: flex;
    height: 70px;
    background: #090b13;
    align-items: center;
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

`
const Link = styled.a` 
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
        height: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: '';
            height: 2px;
            background-color: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover{
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }
`   
const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
`


