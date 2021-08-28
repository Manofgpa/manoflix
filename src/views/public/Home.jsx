import styled from 'styled-components'
import { Container, InsideContainer } from '../../assets/style'
import React from 'react'

const HomeComponent = () => {
  return (
    <Home>
      <InsideContainer>
        <Title>Bem-vindo ao Manoflix</Title>
        <Wrapper>
          <InsideDiv>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium corrupti delectus illo. A maiores excepturi nam dolorum
              odit possimus, laudantium voluptas libero quisquam sunt magni
              similique non sint eligendi ex.
            </Paragraph>
          </InsideDiv>
          <InsideDiv>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium corrupti delectus illo. A maiores excepturi nam dolorum
              odit possimus, laudantium voluptas libero quisquam sunt magni
              similique non sint eligendi ex.
            </Paragraph>
          </InsideDiv>
          <Image>
            <img
              src='https://yt3.ggpht.com/ytc/AAUvwnhGl6gTJhFtaBC1UEsya9LY9h-sppeBE4HwHvGA=s900-c-k-c0x00ffffff-no-rj'
              width='400'
              alt=''
            />
          </Image>
        </Wrapper>
      </InsideContainer>
      <InsideContainer>
        <Wrapper>
          <Image>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/71aH-U9%2BEfL.png'
              width='400'
              alt=''
            />
          </Image>
          <InsideDiv>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            temporibus asperiores quaerat, tenetur delectus magni veritatis
            itaque fugit aliquam earum. Expedita, sunt harum enim nulla incidunt
            aliquid quia veniam nihil pariatur mollitia quibusdam ea ducimus
            laudantium quos impedit culpa officia nisi commodi, voluptatum nemo
            rerum repellat dolorum iure vel. Repudiandae quis eaque debitis
            molestias. Eos a cum officiis cupiditate culpa fugiat vero quaerat
            velit dolor labore quis animi mollitia repellendus repellat totam,
            voluptates ex? Laudantium distinctio ea rerum incidunt minus
            reiciendis, quis repudiandae officiis, dicta numquam velit. Cumque
            eveniet, ut fugit sunt quaerat eius placeat maxime totam voluptas
            ab, labore quia nostrum eos. Repellendus dolorum magni nulla
            voluptatem, a officiis assumenda! Doloremque et consectetur
            doloribus illum ratione tempora quis. Minus culpa ducimus numquam
            est! Corporis necessitatibus aliquam accusantium modi odio error,
            corrupti magni enim libero repellendus. Reiciendis molestiae
            accusamus rem. Dolor nesciunt voluptatibus veritatis quam rem
            perferendis blanditiis, ducimus error!
          </InsideDiv>
        </Wrapper>
      </InsideContainer>
      <InsideContainer>
        <Wrapper>
          <InsideDiv>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            temporibus asperiores quaerat, tenetur delectus magni veritatis
            itaque fugit aliquam earum. Expedita, sunt harum enim nulla incidunt
            aliquid quia veniam nihil pariatur mollitia quibusdam ea ducimus
            laudantium quos impedit culpa officia nisi commodi, voluptatum nemo
            rerum repellat dolorum iure vel. Repudiandae quis eaque debitis
            molestias. Eos a cum officiis cupiditate culpa fugiat vero quaerat
            velit dolor labore quis animi mollitia repellendus repellat totam,
            voluptates ex? Laudantium distinctio ea rerum incidunt minus
            reiciendis, quis repudiandae officiis, dicta numquam velit. Cumque
            eveniet, ut fugit sunt quaerat eius placeat maxime totam voluptas
            ab, labore quia nostrum eos. Repellendus dolorum magni nulla
            voluptatem, a officiis assumenda! Doloremque et consectetur
            doloribus illum ratione tempora quis. Minus culpa ducimus numquam
            est! Corporis necessitatibus aliquam accusantium modi odio error,
            corrupti magni enim libero repellendus. Reiciendis molestiae
            accusamus rem. Dolor nesciunt voluptatibus veritatis quam rem
            perferendis blanditiis, ducimus error!
          </InsideDiv>
        </Wrapper>
      </InsideContainer>
    </Home>
  )
}

export default HomeComponent

const Image = styled.p`
  margin: 15px;
`

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #0b2027;
  -webkit-box-shadow: 8px 5px 24px 0px #7f7f7f;
  box-shadow: 8px 5px 24px 0px #7f7f7f;
`

const InsideDiv = styled.div`
  margin: 15px;
  text-align: center;
`

const Paragraph = styled.p`
  height: 75px;
  margin: 0px;
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
`
const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  padding: 10px;
  margin: 30px 0;
  color: #d52941;
  text-align: center;
  border: 1px dotted #d52941;
`

const Home = styled(Container)`
  margin: 0 2em;
`
