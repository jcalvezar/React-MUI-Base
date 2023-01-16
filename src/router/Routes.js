import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../containers/Home";
import Admin from "../containers/Admin";
import Users from "../containers/Users";

export const JRoutes = () => {
  const { loggedAs } = useSelector((state) => state.authReducer);

  const visitor = !loggedAs;
  const admin = loggedAs === "admin";
  const user = loggedAs === "user";

  return (
    <BrowserRouter>
      <Routes>
        {visitor && (
          <>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signup" element={<Home />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}

        {admin && (
          <>
            <Route path="/admin">
              <Route index element={<Admin />} />
              <Route path="admin2" element={<Admin />} />
            </Route>
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </>
        )}

        {user && (
          <>
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path="user2" element={<Users />} />
            </Route>
            <Route path="*" element={<Navigate to="/users" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
