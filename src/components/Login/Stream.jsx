import styled from "styled-components";
import { ImgStream } from "../../assets/images";

const Stream = () => {
  return (
    <>
      <Section>
        <Container>
          <TextInfo>
            <h1>Stream with Premier the Access the <br/>same day it&apos;s in theater</h1>
            <p>Coming May 28. Get Premier Access to Cruella for $29.99 with a Disney+ subscription, and watch as many as you like before it&apos;s available to all Disney+ subscriber at a later date.</p>
            <button type="button" className="btn-them-disney">preorder</button>
          </TextInfo>
          <ImgInfo>
            <img src={ImgStream} alt="img/stream" />
          </ImgInfo>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  background: transparent;
  position: relative;
  padding: 25px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  
`
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;



  @media screen and (min-width: 991px) {
    flex-direction: row-reverse;
  }

`

const TextInfo = styled.div`
  width: 100%;
  flex: 0 auto;
  opacity: 1;
  position: relative;
  z-index: 150;

  @media screen and (min-width: 991px) {
      text-align: start;

  }

  

  p{
    margin-top: 6.318px;
    font-size: 15px;
    font-weight: 100;
    line-height: 1.3rem;

    @media screen and (min-width: 991px) {
        width: 90%;
    }

  }

  > .btn-them-disney{
    margin-top: 12.636px;
    outline: none;
    border: none;
    padding: 6.5px 19.5px;
    font-size: 15px;
    text-transform: uppercase;
    color: rgb(249 249, 249);
    background: rgb(0, 99, 229);
    border-radius: 4px;
    transition: all 250ms ;


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
const ImgInfo = styled.div`
  width: 100%;
  flex: 0 auto;
  opacity: 1;
  position: relative;
  z-index: 150;

  img{
    height: 27vh;
    width: 100%;
    object-fit: contain;

    @media screen and (min-width: 991px) {
      height: 407.17px;
  }
  }
`

export default Stream