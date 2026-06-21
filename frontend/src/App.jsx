import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Visitors from "./pages/Visitors";
import Passes from "./pages/Passes";
import CheckLogs from "./pages/CheckLogs";
import Reports from "./pages/Reports";
import Appointments from "./pages/Appointments";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={

                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>

                    }
                />
                <Route
path="/visitors"
element={
<ProtectedRoute>
<Visitors/>
</ProtectedRoute>
}
/>
<Route
path="/passes"
element={
<ProtectedRoute>
<Passes/>
</ProtectedRoute>
}
/>
<Route
path="/security"
element={
<ProtectedRoute>
<CheckLogs/>
</ProtectedRoute>
}
/>
<Route
path="/reports"
element={
<ProtectedRoute>
<Reports/>
</ProtectedRoute>
}
/>
<Route
path="/appointments"
element={
<ProtectedRoute>
<Appointments/>
</ProtectedRoute>
}
/>

            </Routes>
            


        </BrowserRouter>

    );

}

export default App;