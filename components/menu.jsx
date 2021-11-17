/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import ds from '../public/images/daboard.svg'
import ts from '../public/images/tr.svg'
import tp from '../public/images/tp.svg'
import pr from '../public/images/pr.svg'
import ot from '../public/images/out.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Menu.module.css'

const Menu = () => {

    const Router = useRouter()
    const logout = () => {
        window.localStorage.clear();
        Router.push("/login")
    }
    return(
        <div className="d-flex justify-content-start align-items-center">
            <div className="mainCard">
                <div className={styles.card}>
                    <div>
                        <Link href="/home">
                            <div className="p-4 pointer wr">
                                <Image src={ds} alt="" />
                            </div>
                        </Link>

                        <Link href="/transfer">
                            <div className="p-4 pointer wr">   
                                <Image src={ts} alt="" />
                            </div>
                        </Link>

                        <Link href="/topup">
                            <div className="p-4 pointer wr">
                                <Image src={tp} alt=""/>
                            </div>
                        </Link>

                        <Link href="/profile">
                            <div className="p-4 pointer wr">
                                <Image src={pr} alt="" />
                            </div>
                         </Link>
                        
                    </div>
                    <div className={styles.out}>
                        <div className="p-4 pointer wr">
                            <Image onClick={logout} src={ot} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu