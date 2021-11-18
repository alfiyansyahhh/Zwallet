import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Col,Row} from 'reactstrap'
import { useEffect, useState } from 'react'
import users from '../redux/actions/users'
import { useDispatch, useSelector } from "react-redux";


const LayoutDefault = ({ children }) => {
    const [token, setToken] = useState("")

    const dispatch = useDispatch();
    const dataStore = useSelector((state) => state.user);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const id = localStorage.getItem('idUser')
        setToken(token)
        dispatch(users.ACTION_GET_DETAILS_USER(id,token));
    }, [])

        
    return(
        <>
        <Navbar isLogin={false} user={dataStore}/>
        <main>{children}</main>
        <Footer />
        </>
    )

}  

export default LayoutDefault