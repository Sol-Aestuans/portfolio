import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../app.css';

function MyNavBar() {
    return(
       <Navbar fixed="top" className='NavBG'>
        <Container>
            <Navbar.Brand> Sol | Portfolio </Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
       </Navbar>
    );
}

export default MyNavBar;