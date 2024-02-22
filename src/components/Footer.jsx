import styled from 'styled-components'
import { LogoIcon } from '../assets/images'

const Footer = () => {
  return (
    <>
        <Section>
            <Container>
                <FooterBrand>
                    <img src={LogoIcon} alt="img/logo" />
                </FooterBrand>
                <Nav>
                    <li><p>English</p></li>
                    <li><p>Subscriber Agreement</p></li>
                    <li><p>Privacy Policy</p></li>
                    <li><p>Your California Privacy</p></li>
                    <li><p>Do Not Sell My Info</p></li>
                    <li><p>Children&apos;s Online Privacy Policy</p></li>
                    <li><p>Closed Captioning</p></li>
                    <li><p>Interest-Based-Ads</p></li>
                    <li><p>Supported Devices</p></li>
                    <li><p>Help</p></li>
                    <li><p>Gift Disney+</p></li>
                    <li><p>About US</p></li>
                    <li><p>Disney+ Partner Program</p></li>
                    <li><p>Premier Access</p></li>
                    <li><p>The Disney Bundle</p></li>
                </Nav>
                <Copyright>
                    <p>© DisneyPlus-CYBR. All Rights Reserved 2024</p>
                </Copyright>

            </Container>

        </Section>
    </>
  )
}

const Section = styled.section`
    padding : 1rem;
    margin-bottom: 0 ;

    @media screen and (min-width: 550px) {
        padding : 2rem 0;
    }
`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`
const FooterBrand = styled.div`
    text-align: center;
    img{
        width: 7rem;
        height: auto;
        object-fit: fill;

        @media screen and (min-width: 550px) {
            width: 10rem;
        }
    }
`
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-grow: initial;

    li{
        list-style: none;

        p{
            padding: 0.1rem;
            font-size: 0.75rem;
            margin-right: 0.3rem;

            @media screen and (min-width: 550px) {
                font-size: 0.9rem;
                padding: 0.5rem;
            }
        }
    }
`

const Copyright = styled.div`
    text-align: center;
    font-size: 0.75rem;
    color: rgb(249, 249, 249);
    p{
        font-weight: 400;
        margin-top: 1vh;
    }
`
export default Footer