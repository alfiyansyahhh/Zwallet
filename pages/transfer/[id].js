import Guard from '../../HOC/guard'
import styles from '../../styles/transfer.module.css'
import users from '../../redux/actions/users'
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from 'react'
import { API_URL } from '../../utils/env'
import { useRouter } from 'next/router'
import Tf from '../../redux/actions/transactions';
import {Row,Col } from 'reactstrap'
import PinInput from "react-pin-input";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Transfer = (props) => {

    const {
        buttonLabel,
        className
      } = props;

   const [modal, setModal] = useState(false);

   const toggle = () => setModal(!modal);


    const Router = useRouter();
    const dispatch = useDispatch();

    const dataStore = useSelector((state) => state.user);
    const token = localStorage.getItem('token')

    const id = Router.query.id

    const [Data, setData] = useState({
        total: "", 
        to: id,
        pin: ""
    })

    const insertData = (e) => {
        setData({
            ...Data,
            total: e.target.value
        })
    }


    const handlePin = value => {
        setData({ ...Data, pin: value });
    };

    const insertTransaction = (e) => {
        e.preventDefault();
        users.LOGINPIN(Data,token).then((responser) => {
            Tf.TRANSFER(Data,token).then((response) => {
                Router.push("/transfer")
            }).catch((err) => {
                alert("gagal1")
            })
        }).catch((err) => {
            alert("pin salah")
        })
    }

    useEffect(() => {
        dispatch(users.ACTION_GET_RECEIVER(id,token));
    }, [])

    return(       
        <Row className="mainCard w-100">
                <div className="card">
                    {dataStore.loadingDetails === true?(
                        <>..loading</>
                    ):(
                        <div className="w-75 h-100 d-flex flex-column">
                            <b className="mb-3">Transfer Money</b>
                            
                            <div className=" w-75 d-flex mb-3 align-items-center">
                                <img className={styles.pp} src={`${API_URL}/uploads/${dataStore.receiver.image}`} />
                                <div className={styles.bb}>
                                    <div className={styles.name}>{dataStore.receiver.name}</div>
                                    <div className={styles.phone}>{dataStore.receiver.phone_number}</div> 
                                </div>
                            </div>

                            <div>Type the amount you want to transfer and then press continue to the next steps.</div>

                            <form  className="d-flex w-100 pt-5 h-50 flex-column justify-content-center align-items-center">
                                <input className={styles.inputN}
                                type="number"
                                placeholder="0.00"
                                onChange={insertData}
                                value={Data.total}
                                />
                                <div className={styles.av}>Rp.{dataStore.details.saldoUser} Available</div>
                            </form>

                                    <div className="d-flex justify-content-end">                        
                            <button onClick={toggle} className={styles.tmb}>Continue</button>
                                    </div>
                            <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Insert Pin</ModalHeader>
                            <ModalBody>
                            <form onSubmit={insertTransaction} className="formSubmit d-flex flex-column justify-content-center align-items-center">
                                <PinInput
                                length={6}
                                focus
                                style={{padding: '10px'}}  
                                inputStyle={{borderColor: 'grey'}}
                                inputFocusStyle={{borderColor: 'blue'}}
                                secret
                                type="numeric"
                                onChange={handlePin}
                                />                                                             
                            </form>
                            </ModalBody>
                            <ModalFooter>
                                <form onSubmit={insertTransaction}>
                                <Button color="primary" type="submit">TRANSFER</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </form>
                            </ModalFooter>
                         </Modal>

                        </div>
                    )}
                
                </div>
        </Row>
    )
}

export default Guard(Transfer)