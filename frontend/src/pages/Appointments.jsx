import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  getAppointments,
  approveAppointment,
} from "../services/appointmentService";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const data = await getAppointments();
      setAppointments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveAppointment(id);
      fetchAppointments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="mb-4">Appointments</h2>

      <table className="table table-bordered table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>Visitor</th>
            <th>Host</th>
            <th>Purpose</th>
            <th>Visit Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>
                {appointment.visitorId?.name || "N/A"}
              </td>

              <td>
                {appointment.hostId?.name || "N/A"}
              </td>

              <td>{appointment.purpose}</td>

              <td>
                {new Date(
                  appointment.visitDate
                ).toLocaleDateString()}
              </td>

              <td>
                <span
                  className={`badge ${
                    appointment.status === "Approved"
                      ? "bg-success"
                      : appointment.status === "Rejected"
                      ? "bg-danger"
                      : "bg-warning"
                  }`}
                >
                  {appointment.status}
                </span>
              </td>

              <td>
                {appointment.status === "Pending" ? (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() =>
                      handleApprove(appointment._id)
                    }
                  >
                    Approve
                  </button>
                ) : (
                  <button
                    className="btn btn-secondary btn-sm"
                    disabled
                  >
                    Done
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Appointments;