import { Navbar } from "../../components/Navbar/navbar"

export const Layout = ({children}) => {
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}