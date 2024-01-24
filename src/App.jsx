import {useState} from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from "./componentes/Menu.jsx";
import Tarjetero from "./componentes/Tarjetero.jsx";
import {Container} from "react-bootstrap";


function App() {
    return (
        <>
            <Menu></Menu>
            <Container>
                <div className="row">
                    <Tarjetero></Tarjetero>
                </div>
            </Container>


        </>

    )
}

export default App
