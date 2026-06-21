import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div
            className="bg-dark text-white p-3"
            style={{
                width: "250px",
                minHeight: "100vh"
            }}
        >

            <h3>Visitor System</h3>

            <hr />

            <Link
                className="text-white d-block mb-3"
                to="/dashboard"
            >
                Dashboard
            </Link>

            <Link
                className="text-white d-block mb-3"
                to="/visitors"
            >
                Visitors
            </Link>

            <Link
                className="text-white d-block mb-3"
                to="/appointments"
            >
                Appointments
            </Link>

            <Link
                className="text-white d-block mb-3"
                to="/passes"
            >
                Passes
            </Link>
<Link
  className="text-white d-block mb-3"
  to="/security"
>
  Security
</Link>
            <Link
                className="text-white d-block mb-3"
                to="/reports"
            >
                Reports
            </Link>

        </div>

    );

}

export default Sidebar;