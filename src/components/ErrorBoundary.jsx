import styled from 'styled-components'
import { useNavigate } from 'react-router-dom' 

const ErrorBoundary = () => {
  const nav = useNavigate()
  return (
    <Container className="error-boundary">
      <h2>Oops, something went wrong!</h2>
      {/* <p>{error}</p> */}
      <button onClick={() => nav('/')}>Retry</button>
    </Container>
  )
}

export default ErrorBoundary

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;

    h2{
        margin-bottom: 20px;
    }
    button{
        padding: 4px 10px;
        font-size: 24px;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
        transition: all 250ms;

        &:hover{
            background-color: rgba(255, 255, 255, 0.5);
        }
    }
`