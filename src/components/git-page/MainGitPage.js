import React from 'react';
import GitInfoButtons from './GitInfoButtons';
import NavbarT from '../common-components/Navbar';
import Footer from '../common-components/Footer';
import Graphpage from './Graphpage';
import {Container, Row, Col} from 'react-bootstrap';

class MainGitPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarT />
                <Container fluid>
                    <Row>
                        <Col md={3}><GitInfoButtons /></Col>
                        <Col md={9}><Graphpage /></Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default MainGitPage;