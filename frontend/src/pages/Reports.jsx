import Layout from "../components/Layout";

import {

exportVisitors,
exportAppointments,
exportLogs

}

from "../services/reportService";

function Reports() {

    const handleVisitors = async()=>{

        const data = await exportVisitors();

        alert(data.message);

    };

    const handleAppointments = async()=>{

        const data = await exportAppointments();

        alert(data.message);

    };

    const handleLogs = async()=>{

        const data = await exportLogs();

        alert(data.message);

    };

    return(

        <Layout>

            <h2 className="mb-4">

                Reports

            </h2>

            <button
            className="btn btn-primary me-3"
            onClick={handleVisitors}
            >

                Export Visitors

            </button>

            <button
            className="btn btn-success me-3"
            onClick={handleAppointments}
            >

                Export Appointments

            </button>

            <button
            className="btn btn-danger"
            onClick={handleLogs}
            >

                Export Logs

            </button>

        </Layout>

    );

}

export default Reports;