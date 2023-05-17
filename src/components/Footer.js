import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <div className="Footer" style={{ marginTop: 'auto' }}>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#"></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
export default Footer;