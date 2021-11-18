import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Menu from '../components/menu'
import { Col,Row} from 'reactstrap'
import styles from '../styles/daboard.module.css'
import users from '../redux/actions/users'
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react'
import {useRouter} from 'next/router'


const LayoutDasboard = ({ children }) => {

    const Router = useRouter()

    const dispatch = useDispatch();
    const dataStore = useSelector((state) => state.user);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const id = localStorage.getItem('idUser')
        dispatch(users.ACTION_GET_DETAILS_USER(id,token));
    }, [])

return(
    <>
    <Navbar isLogin={true} user={dataStore} />
    <div className="d-flex justify-content-center align-items-center">
        <div className={styles.ds}>
        <Row>
            <Col lg="3" className={styles.menu}>
                <Menu />
            </Col>
            <Col lg="9" className="d-flex justify-content-center align-items-center">
                {children}
            </Col>
        </Row>
        </div>
    </div>
    <Footer />
    </>
)
}  

export default LayoutDasboard