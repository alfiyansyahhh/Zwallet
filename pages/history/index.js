/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../../styles/History.module.css'
import Guard from '../../HOC/guard'
import { useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import tr from '../../redux/actions/transactions';
import { API_URL} from '../../utils/env'
import {Row} from 'reactstrap'
const History = () => {

    const dispatch = useDispatch();
    const dataHistory = useSelector((state) => state.transactions);

    console.log(dataHistory)

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('idUser')
    useEffect(() => {
        dispatch(tr.GET_HISTORY(token,50));
    }, [])

    return(      
            <Row className="mainCard w-100">
                <div className="card">
                    <div className="d-flex w-75">
                  <div className={styles.nameHistory}>Transaction History</div>
                  <div className="w-25 "><button className="filter">-- Select Filter --</button></div>
                    </div>
                    <div className="d-flex w-75">
                    

                        {dataHistory.loadHistory === true?(<div>loading</div>):(
                                <div className={styles.historyS}>
                                    {dataHistory.history.map((e) => {
                                        return(
                                            <div className="d-flex w-100 justify-content-center align-items-center">
                                            <div className={styles.history}>
                                                <div className="d-flex w-50">
                                                    <img className={styles.ppHis} src={`${API_URL}/uploads/${e.user.image}`} />
                                                    <div className={styles.nameH}>{e.user.name}</div>
                                                </div>
                                                
                                                {e.to == id?(
                                                    <div className={styles.hr}>
                                                         <div className={styles.green}>+ {e.total}</div>
                                                    </div>
                                                ):(
                                                    <div className={styles.hr}>
                                                         <div className={styles.red}>- {e.total}</div>
                                                    </div>
                                                )}
                                               
                                            </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}

                    </div>
                </div>
            </Row>
    )
}

export default Guard(History)