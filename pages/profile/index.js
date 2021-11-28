import Guard from '../../HOC/guard'
import styles from '../../styles/Profile.module.css'
import { useSelector } from "react-redux";
import { API_URL } from '../../utils/env'
import { useRouter } from 'next/router'
import { Row } from 'reactstrap'

const Profile = () => {
    const dataStore = useSelector((state) => state.user);
    const Router = useRouter()
    const logout = () => {
        window.localStorage.clear();
        Router.push("/login")
    }
    return(        
            <Row className="mainCard w-100">
                <div className="card">
                {dataStore.loadingDetails === true?(
                        <>..loading</>
                    ):(
                    <div className={styles.pr}>
                    <div><img className={styles.pp} src={`${API_URL}/uploads/${dataStore.details.image}`} /></div>
                    <div className={styles.name}>{dataStore.details.name}</div>
                    <div className={styles.phone}>{dataStore.details.phone_number}</div>
                    </div>
                    )}
                    <div className={styles.cardM}>
                        <div className={styles.m}>Personal Information</div>
                        <div className={styles.m}>Change Password</div>
                        <div className={styles.m}>Change PIN</div>
                        <div className={styles.m} onClick={logout}>Logout</div>
                    </div>
                </div>
            </Row>
    )
}

export default Guard(Profile)