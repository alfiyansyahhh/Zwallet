import Guard from '../../HOC/guard'
import styles from '../../styles/topUp.module.css'
import users from '../../redux/actions/users'
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from 'react';
import PinInput from "react-pin-input";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Row } from 'reactstrap'

const Topup = (props) => {

     const {
          buttonLabel,
          className
        } = props;

     const [modal, setModal] = useState(false);

     const toggle = () => setModal(!modal);



     const [Data, setData] = useState({
          total:"",
          pin:""
     })

     const insertTotal = (e) => {
          setData({ ...Data,
               [e.target.name]: e.target.value
          })
     }

     const handlePin = value => {
          setData({ ...Data, pin: value });
      };

     const TopUp = (e) => {
          e.preventDefault();
          const token = localStorage.getItem('token')
          users.LOGINPIN(Data,token).then((responser) => {
               users.TOPUP(Data,token).then((response)=>{
                    setData({
                         total: "",
                         pin:""
                    })
                    setModal(!modal);
               }).catch((err) => {
                    alert("topUp gagal")
               })
          }).catch((err) => {
               console.log(err)
               alert("pin salah")
          })
         
     }


    return(        
            <Row className="mainCard w-100">
                <div className="card">
                    <h1 className="pt-3">How To Top Up</h1>
                    <div className={styles.form}>
                    <form >
                         <input placeholder="0.00" name="total" type="number" onChange={insertTotal} value={Data.total} />
                    </form>
                    <button onClick={toggle} className={styles.topUp}>top up</button>
                    </div>
                    <div>
                         <Modal isOpen={modal} toggle={toggle} className={className}>
                         <ModalHeader toggle={toggle}>Insert Pin</ModalHeader>
                         <ModalBody>
                         <form onSubmit={TopUp} className="formSubmit d-flex flex-column justify-content-center align-items-center">
                              <PinInput
                              length={6}
                              focus
                              // disabled
                              style={{padding: '10px'}}  
                              inputStyle={{borderColor: 'grey'}}
                              inputFocusStyle={{borderColor: 'blue'}}
                              secret
                              // name="pin"
                              type="numeric"
                              onChange={handlePin}
                              />                                                             
                         </form>

                         </ModalBody>
                         <ModalFooter>
                              <form onSubmit={TopUp}>
                              <Button color="primary" type="submit">TOP UP</Button>{' '}
                              <Button color="secondary" onClick={toggle}>Cancel</Button>
                              </form>
                         </ModalFooter>
                         </Modal>
                    </div>
                    <div className="ketTop ">
                       <div>
                            1.  Go to the nearest ATM or you can use E-Banking.
                       </div>
                       <div>
                            2.  Type your security number on the ATM or E-Banking.
                       </div>
                       <div>
                            3.  Select “Transfer” in the menu
                       </div>
                       <div>
                            4.  Type the virtual account number that we provide you at the top.
                       </div>
                       <div>
                            5.  Type the amount of the money you want to top up.
                       </div>
                       <div>
                            6.  Read the summary details.
                       </div>
                       <div>
                            7.  Press transfer / top up.
                       </div>
                       <div>
                            8.  You can see your money in Zwallet within 3 hours.
                       </div>

                    </div>
                </div>
            </Row>
    )
}

export default Guard(Topup)