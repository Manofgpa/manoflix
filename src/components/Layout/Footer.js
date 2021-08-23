import styled from 'styled-components'


const FooterComponent = () => {

    return (
        <Footer>
            Manoflix | &copy; Todos os direitos reservados
        </Footer>
    )
}

export default FooterComponent


const Footer = styled.div`
    padding: 30px;
    text-align: center;
    background-color: #0B2027;
    color: #D52941;
    font-size: 1.3em;
`