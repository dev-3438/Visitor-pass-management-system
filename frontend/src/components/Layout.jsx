import Sidebar from "./Sidebar";

function Layout({ children }) {

    return (

        <div className="d-flex">

            <Sidebar />

            <div className="container mt-4">

                {children}

            </div>

        </div>

    );

}

export default Layout;