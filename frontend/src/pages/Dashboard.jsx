import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";
import Sidebar from "../components/Sidebar";
function Dashboard() {

    const [stats, setStats] = useState({});

    useEffect(() => {

        const fetchData = async () => {

            try {

                const data = await getDashboardStats();

                setStats(data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchData();

    }, []);

    return (
<div className="d-flex">

        <Sidebar />
        <div className="container mt-4">

            <h2>Admin Dashboard</h2>

            <div className="row">

                <div className="col-md-4">

                    <div className="card p-3 shadow">

                        <h4>Total Visitors</h4>

                        <h2>{stats.totalVisitors}</h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card p-3 shadow">

                        <h4>Total Appointments</h4>

                        <h2>{stats.totalAppointments}</h2>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card p-3 shadow">

                        <h4>Active Passes</h4>

                        <h2>{stats.activePasses}</h2>

                    </div>

                </div>

            </div>

            <br />

            <div className="row">

                <div className="col-md-6">

                    <div className="card p-3 shadow">

                        <h4>Used Passes</h4>

                        <h2>{stats.usedPasses}</h2>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card p-3 shadow">

                        <h4>Checked-In Visitors</h4>

                        <h2>{stats.checkedInVisitors}</h2>

                    </div>

                </div>

            </div>


        </div>
        </div>

    );

}

export default Dashboard;