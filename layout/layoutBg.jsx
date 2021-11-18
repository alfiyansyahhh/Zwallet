import Bg from '../components/bg'
import { Col,Row,Container} from 'reactstrap'


const LayoutBg = (props) => {
    return(
        <Container fluid={true}>
            <Row>
                <Col className="bg d-none d-sm-flex d-xl-flex d-md-flex  flex-column align-items-center justify-content-center">
                    <Bg />
                </Col>
                <Col className="formInput d-flex flex-column justify-content-center align-items-center">
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}
export default LayoutBg