import "../Main/Main.css"
import NavBar from "../NavBar/NavBar.jsx";	
import { Container,Row,Col } from "reactstrap";

function Main(){
    return <div className="body">
                <div className="embed-container">
                    <>
                        <Container>
                            <Row>
                                <Col xs="2"></Col>
                                <Col xs="8">
                                    <NavBar/>
                                </Col>
                                <Col xs="2"></Col>
                            </Row>                    
                        </Container>
                        
                    </>
            
                </div>
            </div>
}

export default Main;