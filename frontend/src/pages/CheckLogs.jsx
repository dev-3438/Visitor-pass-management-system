import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import {

getLogs,
checkOutVisitor

}

from "../services/checkLogService";

function CheckLogs() {

    const [logs, setLogs] = useState([]);

    const fetchLogs = async ()=>{

        try{

            const data = await getLogs();

            setLogs(data);

        }
        catch(error){

            console.log(error);

        }

    };

    useEffect(()=>{

        fetchLogs();

    },[]);

    const handleCheckout = async(id)=>{

        try{

            await checkOutVisitor(id);

            fetchLogs();

        }
        catch(error){

            console.log(error);

        }

    };

    return(

        <Layout>

            <h2 className="mb-4">

                Security Panel

            </h2>

            <table className="table table-bordered shadow">

                <thead className="table-dark">

                    <tr>

                        <th>Status</th>

                        <th>Check In</th>

                        <th>Check Out</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        logs.map((log)=>(

                            <tr key={log._id}>

                                <td>

                                    <span
                                    className={`badge ${
                                    log.status==="Checked In"
                                    ?
                                    "bg-success"
                                    :
                                    "bg-secondary"
                                    }`}
                                    >

                                        {log.status}

                                    </span>

                                </td>

                                <td>

                                    {

                                    new Date(
                                    log.checkInTime
                                    ).toLocaleString()

                                    }

                                </td>

                                <td>

                                    {

                                    log.checkOutTime

                                    ?

                                    new Date(
                                    log.checkOutTime
                                    ).toLocaleString()

                                    :

                                    "-"

                                    }

                                </td>

                                <td>

                                    {

                                    log.status==="Checked In"

                                    &&

                                    <button
                                    className="btn btn-danger btn-sm"
                                    onClick={()=>
                                    handleCheckout(log._id)
                                    }
                                    >

                                        Check Out

                                    </button>

                                    }

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </Layout>

    );

}

export default CheckLogs;