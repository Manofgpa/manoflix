import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  display: flex;
  margin: 15px auto;
  flex-direction: ${(props) => props.display || "column"};
  color: #9fc490;
  width: 100%;
  text-align: center;
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

export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #0b2027;
  -webkit-box-shadow: 8px 5px 24px 0px #7F7F7F;
  box-shadow: 8px 5px 24px 0px #7F7F7F;
  
`

export const InsideDiv = styled.div`
  margin: 15px;
  text-align: center;
  
`

export const Paragraph = styled.p`
  height:75px;
  margin: 0px;
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
`
