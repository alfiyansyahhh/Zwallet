/* eslint-disable @next/next/link-passhref */
import styles from '../../styles/Home.module.css'
import {Row,Col } from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'
import down from '../../public/images/down.svg'
import up from '../../public/images/up.svg'
import { Bar } from 'react-chartjs-2';
import Guard from '../../HOC/guard'
import { useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import users from '../../redux/actions/users';
import tr from '../../redux/actions/transactions';
import { API_URL} from '../../utils/env'


const Home = (props) => {

    const data = {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
            label: '# of Votes',
            data: [12000, 19000, 3000, 5000, 2000, 3000, 4000],
            backgroundColor: [
                '#6379F4',
            ],
  
            borderWidth: 0.3,
            },
        ],
    };
        
    const options = {
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
            ],
        },
    };

    const dispatch = useDispatch();
    const dataStore = useSelector((state) => state.user);
    const dataHistory = useSelector((state) => state.transactions);

    console.log(dataHistory)
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('idUser')

    useEffect(() => {
        dispatch(users.ACTION_GET_DETAILS_USER(id,token));
        dispatch(tr.GET_HISTORY(token,5));
    }, [])

   

    return(
       <Row className="mainCard h-100" >
            <Col lg="12" xs="12"className={styles.ats}>
                <div className={styles.card1}>
                    <div className={styles.balance}>
                        <div className={styles.b}>
                        {dataStore.loadingDetails === true?(
                        <>..loading</>
                        ):(
                        <div>
                            <h3>Balance</h3>
                            <h2>Rp.{dataStore.details.saldoUser}</h2>
                            <div>+62 {dataStore.details.phone_number}</div>
                        </div>
                        )}
                                
                        </div>
                        <div className={styles.b2}>
                            <Link href="/transfer">
                                <button className={styles.btn}>Transfer</button>
                            </Link>
                            <Link href="/topup">
                                <button className={styles.btn}>Top Up</button>
                            </Link>                            
                        </div>
                    </div>
                </div>
            </Col>
            <Col className={styles.bwh}>
            <Row>
                <Col lg="6" xs="12">
                <div className={styles.card}>
                    <Row className="w-100">
                        <Col lg="6" xs="6" className="ps-5">
                            <Image src={down} alt="" />
                            <div>Income</div>
                            <bold>Rp.12.123.123</bold>
                        </Col>
                        <Col lg="6" xs="6" className="ps-5">
                            <Image src={up} alt="" />
                            <div>Expense</div>
                            <bold>Rp.12.123.123</bold>
                        </Col>
                        <Col lg="12">
                            <Bar className="mt-4 pointer" data={data} options={options} />
                        </Col>
                    </Row>
                </div>
                </Col>
                <Col lg="6" xs="12">
                <div className={styles.card}>
                <Row className="w-100">
                        <Col lg="7" xs="7"   className="ps-5">
                            <h5>Transaction History</h5>
                        </Col>
                        <Col lg="4" xs="4" className="ps-5 text-end">
                            <Link href="/history">
                            <p className="pointer  ">See all</p>
                            </Link>
                        </Col>
                        <Col lg="12">
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
                                                    <div className="w-50 text-end mt-4 ms-5 ps-3">
                                                         <div className={styles.green}>+ {e.total}</div>
                                                    </div>
                                                ):(
                                                    <div className="w-50 text-end mt-4 ms-5 ps-3">
                                                         <div className={styles.red}>- {e.total}</div>
                                                    </div>
                                                )}
                                               
                                            </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </Col>
                </Row>
                </div>
                </Col>
            </Row>
            </Col>
       </Row>
    )
}

export default Guard(Home)