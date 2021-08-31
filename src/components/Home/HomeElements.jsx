import styled from 'styled-components'
import { Container } from 'reactstrap'

export const Home = styled(Container)`
  color: #9fc490;
`

export const Image = styled.p`
  margin: 15px;
`

export const Wrapper = styled(Container)`
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #0b2027;
  -webkit-box-shadow: 8px 5px 24px 0px #7f7f7f;
  box-shadow: 8px 5px 24px 0px #7f7f7f;
  align-self: middle;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const InsideDiv = styled(Container)`
  margin: 15px;
  text-align: center;
  min-height: 400px;
`

export const Paragraph = styled.p`
  height: 75px;
  margin: 0px;
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
`

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  padding: 10px;
  margin: 30px 0;
  color: #d52941;
  text-align: center;
  border: 1px dotted #d52941;
`
