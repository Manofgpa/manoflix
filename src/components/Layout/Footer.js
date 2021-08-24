import styled from 'styled-components'
import React from 'react'


const FooterComponent = () => {

    return (
        <Footer>
            Manoflix | &copy; Todos os direitos reservados
        </Footer>
    )
}

export default FooterComponent


const Footer = styled.footer`
    padding: 30px;
    text-align: center;
    background-color: #0B2027;
    color: #D52941;
    font-size: 1.3em;
`