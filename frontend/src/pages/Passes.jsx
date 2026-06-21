import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  getPasses
} from "../services/passService";

function Passes() {

  const [passes, setPasses] = useState([]);

  const fetchPasses = async () => {

    try {

      const data = await getPasses();

      setPasses(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchPasses();

  }, []);

  return (

    <Layout>

      <h2 className="mb-4">
        Visitor Passes
      </h2>

      <table className="table table-bordered table-hover shadow">

        <thead className="table-dark">

          <tr>

            <th>Visitor</th>
            <th>Status</th>
            <th>Valid Till</th>
            <th>QR Code</th>
            <th>PDF Badge</th>

          </tr>

        </thead>

        <tbody>

          {

            passes.map((pass)=>(

              <tr key={pass._id}>

                <td>

                  {pass.visitorId?.name}

                </td>

                <td>

                  <span
                    className={`badge ${
                      pass.status==="Active"
                      ?
                      "bg-success"
                      :
                      "bg-secondary"
                    }`}
                  >

                    {pass.status}

                  </span>

                </td>

                <td>

                  {

                    new Date(
                      pass.validTill
                    ).toLocaleDateString()

                  }

                </td>

                <td>

                  <img
                    src={pass.qrCode}
                    alt="QR"
                    width="100"
                  />

                </td>

                <td>

                  {

                    pass.pdfBadge

                    ?

                    <span className="text-success">

                      Available

                    </span>

                    :

                    <span className="text-danger">

                      Not Available

                    </span>

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

export default Passes;