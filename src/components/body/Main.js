import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from "./Main/Form";
import Formula from "./Main/Formula";
import Weather from './Main/Weather';

function Main() {

    return (
        <div className="Main">
            <Container>
                <Form />

                <Formula />

                <Weather />
            </Container>
        </div>

    )
}

export default Main;