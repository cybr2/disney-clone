import styled from 'styled-components';
import { ViewerOne, ViewerTwo, ViewerThree, ViewerFour, ViewerFive } from '../assets/images';

const Viewers = () => {

    const imgScr = [ ViewerOne, ViewerTwo, ViewerThree, ViewerFour, ViewerFive ]
  return (
    <Container>
    {
        imgScr.map((img, index) => (
            <Wrap key={index}>
            <img src={img} alt=''/>
        </Wrap>
        ))
    }
        
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 0 0 26px;
    gap: 25px;
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0/ 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
        transform: scale(1.05);
        border-color: rgba( 249, 249, 249, 0.8);
    }
`