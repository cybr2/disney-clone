import styled from "styled-components";
import { Banner, Stream, GroupWatch, Marvel, GridTheme, Download, Devices, Advertise } from './Login/index'

const Login = () => {
  return (
    <>
        <Main>
            <Banner/>
            <Stream/>
            <GroupWatch/>
            <Marvel/>
            <GridTheme/>
            <Download/>
            <Advertise/>
            <Devices/>
        </Main>
    </>
  )
}

const Main = styled.main`
    width: auto;
    height: auto;
    overflow: auto;
`

export default Login
