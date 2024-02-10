import styled from "styled-components"
import { LoginBackground, LogoOne, LogoTwo } from '../../assets/images';


const Banner = () => {
  return (
    <>
        <Background>
            <Container>
                <Content>
                    <img src={LogoOne} alt="logo/img" />
                    <button type="button" className="get-bundle-btn">get the disney bundle</button>
                    <h4>Stream Now: terms apply</h4>
                    <img src={LogoTwo} alt="logo/img" />
                    <button type="button" className="links">Sign up for disney+ only</button>
                    <button type="button" className="links text-gray">$7.99/month or $79.99/year</button>
                </Content>
            </Container>
        </Background>
    </>
  )
}

const Background = styled.section`
  height: calc(80vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  
  
  &:before{
    background: url(${LoginBackground}) top / cover no-repeat ;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    z-index: -1;
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: calc(90vh - 70px);
  }

  @media screen and (min-width: 1024px) {
    height: calc(100vh - 70px);
  }
`
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  width: auto;
  margin-top: 13vh;
  max-width: 650px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 375px) and (max-width: 550px) {
    max-width: 350px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 551px) and (max-width: 767px) {
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 550px;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }

  h4{
    color: #fff;
    margin: 1vh 0;
  }

  img{
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    max-width: 600px;
    margin-bottom: 12px;
  }
  > .get-bundle-btn{
   
    outline: none;
    border: none;
    width: 100%;
    padding: 5px 0;
    font-size: 14px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    border-radius: 0.145rem;
    transition: all 250ms ease-in-out ;
    margin-bottom: 12px;

    @media screen and (min-width: 551px) and (max-width: 1224px) {
      padding: 10px 0;
      font-size: 15px;
    }
    @media screen and (min-width: 1225px)  {
      padding: 11.5px 15px; 
      font-size: 18px; 
    }

    &:hover{
      background: #0085ff;
    }
  }

  > .links{
    outline: none;
    border: none;
    font-size: 15px;
    background: transparent;
    color: #f9f9f9;

    @media screen and (min-width: 551px) {
      font-size: 19px;
    }
  }

  > .text-gray{
    color: gray;
  }

`
export default Banner
