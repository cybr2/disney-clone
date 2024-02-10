import styled from "styled-components";
import { GridOne, GridTwo, GridThree, GridFour, GridFive, GridSix, GridSeven, GridEight, GridNine } from "../../assets/images";

const GridTheme = () => {

    const gridImg = [GridOne, GridTwo, GridThree, GridFour, GridFive, GridSix, GridSeven, GridEight, GridNine]
  return (
    <>
        <Section>
            <Container>
                <Title>
                    <h1>Stream Exclusive Disney+ Originals</h1>
                    <p>New Stories from our incredible family of studios</p>
                </Title>
                <GridImg>
                    {
                        gridImg && gridImg.map((img, index) => {
                            return (
                                <Image key={index}><img src={img} alt="grid/img" /></Image>    
                            )
                        })
                    }
                </GridImg>
                <button type="button" className="btn-theme-disney">get this disney bundle</button>
            </Container>
        </Section>
    </>
  )
}

const Section = styled.section`
    padding: 5vh 0 ;
    position: relative ;
`
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    text-align: center;

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
const Title = styled.div`
    text-align: center;
    margin-bottom: 3vh;

    p{
        font-size: 0.8rem;

        @media screen and ( min-width: 550px) {
        font-size: 1rem;
            
        }
    }

`

const GridImg = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 15px 25px;

    @media screen and (min-width: 425px) and (max-width: 990px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (min-width: 991px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`

const Image = styled.div`
    width: 100%;
    padding: 0;
    border-radius: 0.245rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.245rem;
    }
`
export default GridTheme