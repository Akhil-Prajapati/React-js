import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Cards(props) {

    const { paraText } = props;
    return (
        <div className="Cards">
            <div className="row">
                {
                    paraText == 1 ?
                        <div className="col-4 col-md-6" name="1">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/200/150" />
                                <Card.Body>
                                    <Card.Title>Card One</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        : <></>
                }

                {
                    paraText == 2 ?
                        <div className="col-4 col-md-6">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/200/150" />
                                <Card.Body>
                                    <Card.Title>Card Two</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        : <></>
                }

                {
                    paraText == 3 ?
                        <div className="col-4 col-md-6">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/200/150" />
                                <Card.Body>
                                    <Card.Title>Card Three</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        : <></>
                }



            </div>
        </div>
    );
}

export default Cards;