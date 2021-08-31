import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const InsideContainer = styled.section`
  display: flex;
  margin: 15px auto;
  flex-direction: ${(props) => props.display || "column"};
  color: #9fc490;
  width: 100%;
  text-align: center;
  color: #9fc490;
  margin: 15px auto;
`