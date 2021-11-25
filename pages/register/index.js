import { Col,Row} from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'
import email from '../../public/images/email.svg'
import gembok from '../../public/images/gembok.svg'
import mata from '../../public/images/mata.svg'
import org from '../../public/images/org.svg'
import LayoutBg from '../../layout/layoutBg'
import { useState } from 'react'
import users from '../../redux/actions/users'
import { useRouter } from 'next/router'


const Register = () => {

    const Router = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: "",
        phone_number: "",
        name:""
    })

    const insertData = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault();
        users.REGISTER(user).then((response) => {
            localStorage.setItem("token", response.result.token);
            Router.push("/pin")
        }).catch((err) => {
            alert("register gagal")
        })
    }


    return(
        <LayoutBg >
        <div className="d-flex flex-column w-75">
                <div className="pb-5">
                    <Link href="/" >
                        <div className="logo2">Zwallet</div>
                    </Link>
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

                <form onSubmit={register} className="formSubmit d-flex flex-column">
                    <Row className="inp">
                        <Col lg="1" xs="2" className="image">
                            <Image  src={org} alt=""/>  
                        </Col>
                        <Col lg="11" xs="10">
                            <input
                            type="text"
                            name="name"
                            xs="10"
                            value={user.name}
                            onChange={insertData}
                            placeholder="Enter your Full-Name"
                            />
                        </Col>
                    </Row>
                    <Row className="inp">
                        <Col lg="1" xs="2" className="image">
                            <Image  src={org} alt=""/>  
                        </Col>
                        <Col lg="11" xs="10">
                            <input
                            type="number"
                            name="phone_number"
                            value={user.phone_number}
                            onChange={insertData}
                            placeholder="Enter your Phone-Number"
                            />
                        </Col>
                    </Row>
                    <Row className="inp">
                        <Col lg="1" xs="2" className="image">
                            <Image  src={email} alt=""/>  
                        </Col>
                        <Col lg="11" xs="10">
                            <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={insertData}
                            placeholder="Enter your Email"
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
                            value={user.password}
                            onChange={insertData}
                            placeholder="Enter ypur password"
                            />
                        </Col>
                        <Col lg="1" xs="2" className="image">
                            <Image src={mata} alt=""/> 
                        </Col>
                    </Row>
                    <button type="submit" className="buttonAcc mt-5">Register</button>
                    <div className="text-center mt-4">Already have an account? <Link href="/login">Let’s Login   </Link></div>
                </form>
        </div>
        </LayoutBg>
    )
}

export default Register