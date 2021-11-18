import { useState } from 'react'
import PinInput from "react-pin-input";
import LayoutBg from '../../layout/layoutBg'
import users from '../../redux/actions/users'
import { useRouter } from 'next/router'

const Token = () => {
    
    const Router = useRouter()

    const [data, setData] = useState({
        pin:""
    })

    const handlePin = value => {
        setData({ pin: value });
    };

    const InsertPin = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        users.INSERTPIN(data, token).then((response) => {
            Router.push("/login")
        }).catch((err) => {
            alert("register gagal")
        })
    }
    

    return(
        <LayoutBg isData>
            <div className="d-flex flex-column w-75">
                <div className="pb-5">
                    <h3>
                        Secure Your Account, Your Wallet,
                        and Your Data With 6 Digits PIN
                        That You Created Yourself.
                    </h3>
                    <div>
                        Create 6 digits pin to secure all your money and your data in Zwallet app. 
                        Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
                    </div>
                </div>     

                <form onSubmit={InsertPin} className="formSubmit d-flex flex-column justify-content-center align-items-center">

                    <PinInput
                    length={6}
                    focus
                    // disabled
                    style={{padding: '10px'}}  
                    inputStyle={{borderColor: 'grey'}}
                    inputFocusStyle={{borderColor: 'blue'}}
                    secret
                    type="numeric"
                    onChange={handlePin}
                    />    

                    <button type="submit" className="buttonAcc mt-5">Confirm</button>
                                                        
                </form>
            </div>
        </LayoutBg>
    )
}

export default Token