import styled from "styled-components";
import { MarvelImg } from "../../assets/images";

const Marvel = () => {
  return (
    <>
        <Section>
            <Container>
                <Content>
                    <h1>Endless Entertainment</h1>
                    <p>Disney classics, Pixar adventures, Marvel epics, Star Wars sagas, National Geographic explorations, and more.</p>
                </Content>
            </Container>
        </Section>
    </>
  )
}

const Section = styled.section`
    background: url(${MarvelImg}) center / cover no-repeat;
    height: 71vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    @media screen and (min-width: 768px) and (max-width: 1200px){
        height: 61vh;
    }
    
`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: end;
`
const Content = styled.div`
    width: 100%;
    margin-top: 17vh;
    display: flex;
    text-align: end;
    align-items: end;
    flex-direction: column;
    background: rgba(77,106,255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 25px 25px;

    @media screen and (min-width: 768px){
        width: 50%;
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

`
export default Marvel