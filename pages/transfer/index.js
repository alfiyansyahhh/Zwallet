import Guard from '../../HOC/guard'
import styles from '../../styles/transfer.module.css'
import users from '../../redux/actions/users'
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from 'react'
import { API_URL } from '../../utils/env'
import {useRouter} from 'next/router'
import {Row,Col } from 'reactstrap'
import cari2 from '../../public/images/cari.svg'

const Transfer = () => {

    const Router = useRouter()

    const dispatch = useDispatch();
    const dataStore = useSelector((state) => state.user);
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('idUser')

    useEffect(() => {
        dispatch(users.ACTION_GET_USERS(token,search.user));
        dispatch(users.ACTION_GET_DETAILS_USER(id,token));
    }, [])

    const [search, setSearch] = useState({
        user:""
    })

    const changeSearch = (e) => {
        setSearch({
            user: e.target.value
        })
    }

    const HandleSearch = (e) => {
        e.preventDefault()
        dispatch(users.ACTION_GET_USERS(token,search.user));
    }

    const tf = (id) => {
        Router.push(`transfer/${id}`)
    }

    return(       
            <Row className="mainCard w-100">
                <div className="card">
                  <b className="text-start w-75">Search Receiver</b>
                  <div className={styles.cari}>
                      {/* <img className="w-25" src={cari2} alt="" /> */}
                      <form onSubmit={HandleSearch} className="w-100">
                          <input className={styles.Icari}
                            placeholder="search receiver here"
                            onChange={changeSearch}
                          />
                      </form>
                  </div>
                  <div className={styles.all}>
                      {dataStore.loadAll == true?(
                      <div>
                          ...loading
                      </div>
                      ):(
                      <div>
                          
                           {dataStore.all.map((e)=>{
                                if (e.id != id) {
                                    return(
                                        <div className={styles.card}>
                                            <img onClick={() => tf(e.id)} className={styles.pp} src={`${API_URL}/uploads/${e.image}`} />
                                            <div className={styles.bb}>
                                                <div className={styles.name}>{e.name}</div>
                                                <div className={styles.phone}>{e.phone_number}</div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                      </div>
                      )}
                   
                  </div>
                </div>
            </Row>
    )
}

export default Guard(Transfer)