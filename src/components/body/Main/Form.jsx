import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormM() {


    return (
        <div className="FormM">
            <Form>
                <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Label className="float-start fs-5">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="float-start fs-5">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="float-start fs-5" type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark my-4" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default FormM;