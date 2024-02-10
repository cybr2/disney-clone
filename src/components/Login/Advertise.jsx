import styled from "styled-components";

import { LogoOne } from "../../assets/images";


const Advertise = () => {
  return (
    <>
        <Section>
            <Container>
                <ImgInfo>
                    <img src={LogoOne} alt="logo" />
                </ImgInfo>
                <TextInfo>
                    <p>Get The Disney Bundle to Stream the best movies, shows, and sports with Disney+, HULU and ESPN+. Term Apply</p>
                    <button type="button" className="btn-theme-disney">get this disney bundle</button>
                </TextInfo>

            </Container>
        </Section>
    </>
  )
}

const Section = styled.section`
    position: relative;
    padding: 25px;
    background: transparent;
    display: flex;
    justify-content: center;

`
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px;
    padding: 25px;
    text-align: center;
    line-height: 15px;

    @media screen and (min-width: 767px) and (max-width: 990px ) {
        padding: 25px 15px ;
        width: 90%;
    }

    @media screen and (min-width: 991px) {
        flex-direction: row;
        padding: 25px 35px;
        text-align: start;
        justify-content: space-between;
        width: 80%;

    }

`

const ImgInfo = styled.div`
    width: 100%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;

    @media screen and (min-width: 570px) and ( max-width: 768px){
        width: 80%;
    }

    @media screen and (min-width: 768px) and ( max-width: 991px){
        width: 70%;
    }

    @media screen and (min-width: 991px) {
        width: 45%;
    }

`
const TextInfo = styled.div`
    width: 100%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;

    @media screen and (min-width: 991px) {
        width: 50%;
    }
    


> .btn-theme-disney{
    margin: 12.636px 0;
    outline: none;
    border: none;
    padding: 6.5px 19.5px;
    font-size: 15px;
    text-transform: uppercase;
    color: rgb(249 249, 249);
    background: rgb(0, 99, 229);
    border-radius: 4px;
    transition: all 250ms;


    @media screen and (min-width: 375px) and (max-width: 549px) {
      padding: 6.5px 22.1px;
    }
    @media screen and (min-width: 550px) and (max-width: 765px) {
      padding: 6.5px 26px;
    }
    @media screen and (min-width: 766px) {
      padding: 6.5px 39px;
    }

    &:hover{
      background: #0085ff;
    }


  }

`

export default Advertise