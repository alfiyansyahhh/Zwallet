import styles from '../styles/Footer.module.css'
import {Col,Row,Container} from 'reactstrap'

const Footer = () => {
    return(
        <div className={styles.footer}>
            <Row className="d-flex justify-content-center h-100 w-100 align-items-center">
                <Col xs="12"className="w-75 ">
                    <div className={styles.logo}>
                        Zwallet
                    </div>
                    <div className={styles.ket}>
                        Simplify financial needs and saving much time in banking needs with one single app.
                    </div>
                    <Row className={styles.fb}>
                        <Col xs="12" lg="8" className={styles.l}>
                            2020 Zwallet. All right reserved.
                        </Col>
                        <Col xs="12" lg="4" className={styles.bwhh}>
                            <div className={styles.bwh1}>
                            +62 5637 8882 9901
                            </div>
                            <div className={styles.bwh2}>
                            contact@zwallet.com
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer