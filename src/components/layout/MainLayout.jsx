import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";


export const MainLayout = ({ children }) => {

    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}