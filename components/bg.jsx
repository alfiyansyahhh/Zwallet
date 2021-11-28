import Image from 'next/image'
import hp from '../public/images/png-phone.png'
import hp2 from '../public/images/png-phone2.png'
import Link from 'next/link'

const Bg = () => {
 return(
    <>
        <div className="w-75"> 
            <Link href="/" >
                <div className="logo">Zwallet</div>
            </Link>
        <div className="d-flex pb-4">
            <Image className="ms-5" src={hp2} alt="" />
            <Image className="me-5"src={hp} alt="" />
        </div>
        <div className="textbg">
        <h3 className="pb-1">App that Covering Banking Needs.</h3>
        <div>
            Zwallet is an application that focussing in banking needs for all users
            in the world. Always updated and always following world trends.
            5000+ users registered in Zwallet everyday with worldwide
            users coverage.
        </div>
        </div>
        </div>
    </>
 )
}

export default Bg