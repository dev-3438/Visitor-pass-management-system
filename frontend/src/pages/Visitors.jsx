import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import {
    getVisitors,
    createVisitor,
    deleteVisitor
}
from "../services/visitorService";

function Visitors() {

    const [visitors, setVisitors] = useState([]);

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        company: "",
        purpose: ""

    });

    const fetchVisitors = async () => {

        const data = await getVisitors();

        setVisitors(data);

    };

    useEffect(() => {

        fetchVisitors();

    }, []);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await createVisitor(formData);

        setFormData({

            name:"",
            email:"",
            phone:"",
            company:"",
            purpose:""

        });

        fetchVisitors();

    };

    const handleDelete = async (id) => {

        await deleteVisitor(id);

        fetchVisitors();

    };

    return (

        <Layout>

            <h2>Visitors</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-2"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-2"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    name="purpose"
                    placeholder="Purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                />

                <button className="btn btn-primary">

                    Add Visitor

                </button>

            </form>

            <hr />

            <table className="table">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        visitors.map((visitor)=>(

                            <tr key={visitor._id}>

                                <td>{visitor.name}</td>

                                <td>{visitor.email}</td>

                                <td>{visitor.company}</td>

                                <td>

                                    <button
                                    className="btn btn-danger"
                                    onClick={()=>handleDelete(visitor._id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </Layout>

    );

}

export default Visitors;