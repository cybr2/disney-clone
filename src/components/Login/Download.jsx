import styled from "styled-components";
import { DownloadStream } from "../../assets/images";

const Download = () => {
  return (
    <>
      <Section>
        <Container>
          <TextInfo>
            <h1>Stream Now or Download Now <br/>Explore US more on Disney</h1>
            <p>Stream on 4 Devices at Once or Download Your Favorites to Watch Later. With dozens of titles i stunning 4K UHD, you can watch the way you always wished.</p>
            <button type="button" className="btn-them-disney">download now</button>
          </TextInfo>
          <ImgInfo>
            <img src={DownloadStream} alt="img/stream" />
          </ImgInfo>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  background: transparent;
  position: relative;
  padding: 5vh 25px;
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
    flex-direction: row;
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

export default Download