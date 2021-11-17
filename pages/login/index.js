import { useRouter } from 'next/router'
import { Col,Row} from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'
import email from '../../public/images/email.svg'
import gembok from '../../public/images/gembok.svg'
import mata from '../../public/images/mata.svg'
import LayoutBg from '../../layout/layoutBg'
import user from '../../redux/actions/users'
import { useState } from 'react'

const Login = () => {

    const Router = useRouter()

    const [users, setData] = useState({
        email: "",
        password: ""
    })

    const insertData = (e) => {
        setData({
            ...users,
            [e.target.name]: e.target.value
          })
    }

    const login = (e) => {
        e.preventDefault();
        user.LOGIN(users).then((response) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("token", response.result.token)
                const users = response.result.user
                localStorage.setItem("idUser", users.id)
                localStorage.setItem('name', users.name)
                localStorage.setItem('phone', users.phone_number)
                localStorage.setItem('image', users.image)
            }
            Router.push("/home")
        }).catch((err) => {
            alert("username/password salah")
        })
    }

    return(
        <LayoutBg isLogin={true}>
        <div className="formInput d-flex flex-column justify-content-center align-items-center">      
            <div className="d-flex flex-column w-75">
                <div className="pb-5">
                    <h3>
                        Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users
                    </h3>
                    <div>
                        Transfering money is eassier than ever, you can access Zwallet wherever you are. 
                        Desktop, laptop, mobile phone? we cover all of that for you!
                    </div>
                </div>     

                <form onSubmit={login} className="formSubmit d-flex flex-column">
                    <Row className="inp">
                        <Col lg="1" xs="2"className="image">
                            <Image  src={email} alt=""/>  
                        </Col>
                        <Col lg="11" xs="10">
                            <input
                            type="email"
                            placeholder="Enter your Email"
                            value={users.email}
                            name="email"
                            onChange={insertData}
                            />
                        </Col>
                    </Row>
                    <Row className="inp">
                        <Col lg="1" xs="2" className="image">
                            <Image src={gembok} alt=""/> 
                        </Col>
                        <Col lg="10" xs="8">
                            <input
                            type="password"
                            name="password"
                            value={users.password}
                            onChange={insertData}
                            placeholder="Enter ypur password"
                            />
                        </Col>
                        <Col lg="1" xs="2" className="image">
                            <Image src={mata} alt=""/> 
                        </Col>
                    </Row>
                    <div className="forget mt-3 text-end">Forget password?</div>
                    <button type="submit" className="buttonAcc mt-5">Login</button>
                    <div className="text-center mt-4">Don’t have an account? <Link href="/register">Let’s Sign Up</Link></div>
                    
                </form>
            </div>
        </div>
        </LayoutBg>
    )
}

export default Login