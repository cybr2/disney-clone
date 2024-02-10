import styled from "styled-components";
import { GroupWatchImg } from "../../assets/images";

const GroupWatch = () => {
  return (
    <>
        <Section>
            <Container>
                <Content>
                    <h1>Virtual Nights with <br /> GroupWatch</h1>
                    <li>Watch together, even when apart</li>
                    <li>Stream with up to 6 friends</li>
                    <li>Pause, rewind, react together</li>
                    <li>Easy setup and Sharing</li>
                </Content>
            </Container>
        </Section>
    </>
  )
}

const Section = styled.section`
    background: url(${GroupWatchImg}) center / cover no-repeat;
    height: 71vh;

    display: flex;
    align-items: center;
    flex-direction: column;


    @media screen and (min-width: 768px) and (max-width: 1200px){
        height: 61vh;
    }
    
`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`
const Content = styled.div`
    width: 100%;
    margin-top: 17vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgba(77,106,255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 25px 0;

    @media screen and (min-width: 768px){
        width: 50%;
    }

    li{
        list-style-type: none;
        font-size:  14px;
        font-weight: 300;
    }

`
export default GroupWatch