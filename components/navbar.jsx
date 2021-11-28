/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import { Col,Row} from 'reactstrap'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bel from '../public/images/bel.svg'
import { API_URL} from '../utils/env'
import garis from '../public/images/garistiga.svg'
import { useState } from 'react'

const Navbar = ({isLogin, user}) => { 
    
    const [menu, setmenu] = useState(false)

    const handlemenu = () => {
        setmenu(!menu)
    }

    return(
        <div className={isLogin === false?(styles.navbar):(styles.navbar2)}>
            <div className="d-flex justify-content-center align-items-center">
                {isLogin === false?(
                    <Row className={styles.nv}>
                    <Col lg="6" xs="4"className="text-start" >
                        <Link href="/">
                            <div className={styles.logo}>Zwallet</div>
                        </Link>
                    </Col>
                    <Col lg="6" xs="8">
                        <div className='p-3 d-flex justify-content-end'>
                            <Link href="/login">
                                <button className={styles.accs}>Login</button>
                            </Link>
                            <Link href="/register">
                                <button className={styles.accs}>SignUp</button>
                            </Link>
                        </div>
                    </Col>
                  </Row> 
                ):(
                <Row className={styles.nv}>
                    <Col lg="8" xs="3" className="text-start" >
                        <Link href="/">
                            <div className={styles.logo2}>Zwallet</div>
                        </Link>
                    </Col>
                    <Col lg="4" xs="9" className="text-end">
                            <div className="d-block d-xl-none d-md-none w-100 mt-4">
                                <Image onClick={handlemenu} src={garis} alt="" />
                            </div>                               
                        
                        <div className='p-3 d-flex  align-items-center'>
                             
                            
                                <div className="d-none d-xl-flex d-sm-flex d-md-flex w-100">
                                <div className="w-75 d-flex ps-5">
                                    <div>
                                    <Link href="/profile">
                                        <img className={styles.pp} src={`${API_URL}/uploads/${user.details.image}`} />
                                    </Link>
                                    </div>
                                    <div className="d-flex flex-column w-100 text-start ps-3">
                                        <b>{user.details.name}</b>
                                        <div>{user.details.phone_number}</div>
                                    </div>
                                </div>                                    
                                </div>

                                                       
                            <Image  className="d-none d-xl-block d-sm-block d-md-block pointer" src={bel} alt="" />
                        </div>
                    </Col>
                    <Col xs="12" lg="12">
                        <div className={menu === true ?(styles.menumini):(styles.menumini2)}>
                            <Link href="/home">
                                <div className={styles.m} >home</div>
                            </Link>

                            <Link href="/transfer">
                                <div className={styles.m} > transfer </div>
                            </Link>

                            <Link href="/topup">
                                <div className={styles.m} >topup </div>
                            </Link>

                            <Link href="/profile">
                                <div className={styles.m} >profile </div>
                            </Link>                  
                        </div>   
                      
                    </Col>
                </Row> 
                )}
              
            </div>
        </div>
    )
}

export default Navbar