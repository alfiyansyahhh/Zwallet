import { useRouter } from "next/router"
import LayoutDasboard from '../layout/dasboard.jsx'

const Guard = (Component) => {
    const Result = (props) => {
        const Router = useRouter()
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (!token) {
                Router.replace("/login")
                return null;
            }
            return (
                <>
                <LayoutDasboard >
                    <Component {...props}/>
                </LayoutDasboard>
                </>
            )
        }
        return null;
    }
    return Result
}

export default Guard;