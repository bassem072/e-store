import React from "react";
import Auth from "./Pages/Auth";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import GuestRoutes from "./routes/GuestRoutes";
import Error403 from "./Pages/Errors/Error403";
import Error404 from "./Pages/Errors/Error404";
import Error500 from "./Pages/Errors/Error500";
import Error503 from "./Pages/Errors/Error503";
import Home from "./Pages/User/Home";
import About from "./Pages/User/About";
import Contacts from "./Pages/User/Contacts";
import Shop from "./Pages/User/Shop";
import Blog from "./Pages/User/Blog";
import Main from "./Components/layout/Main";
import Sub from "./Components/layout/Sub";
import Products from "./Pages/User/Products";
import ShowProduct from "./Pages/User/ShowProduct";
import Dashboard from "./Pages/Dashboard";
import Admins from "./Pages/Dashboard/Admin";
import AddAdmin from "./Pages/Dashboard/Admin/AddAdmin";
import Moderators from "./Pages/Dashboard/Moderator";
import AddModerator from "./Pages/Dashboard/Moderator/AddModerator";
import Settings from "./Pages/Dashboard/Setting";
import DashboardBody from "./Components/layout/DashboardBody";
import ShowAdmin from "./Pages/Dashboard/Admin/ShowAdmin";
import EditAdmin from "./Pages/Dashboard/Admin/EditAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthRoutes />}>
        <Route
          index
          element={
            <Main>
              <Home />
            </Main>
          }
        />
      </Route>
      <Route path="/product/:id" element={<AuthRoutes />}>
        <Route
          index
          element={
            <Main>
              <ShowProduct />
            </Main>
          }
        />
      </Route>
      <Route path="/about" element={<AuthRoutes />}>
        <Route
          index
          element={
            <Main>
              <Sub>
                <About />
              </Sub>
            </Main>
          }
        />
      </Route>
      <Route path="/contact" element={<AuthRoutes />}>
        <Route
          index
          element={
            <Main>
              <Contacts />
            </Main>
          }
        />
      </Route>
      <Route path="/shop" element={<AuthRoutes />}>
        <Route
          index
          element={
            <Main>
              <Shop />
            </Main>
          }
        />
      </Route>
      <Route path="/blog" element={<AuthRoutes />}>
        <Route
          index
          element={
            <Main>
              <Blog />
            </Main>
          }
        />
      </Route>
      <Route path="/products" element={<AuthRoutes />}>
        <Route
          index
          element={
            <Main>
              <Products />
            </Main>
          }
        />
      </Route>
      <Route path="/dashboard" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Dashboard">
              <Dashboard />
            </DashboardBody>
          }
        />
      </Route>
      <Route path="/dashboard/admins" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Admins">
              <Admins />
            </DashboardBody>
          }
        />
      </Route>
      <Route path="/dashboard/admins/:id" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Show Admin">
              <ShowAdmin />
            </DashboardBody>
          }
        />
      </Route>
      <Route path="/dashboard/admins/:id/edit" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Edit Admin">
              <EditAdmin />
            </DashboardBody>
          }
        />
      </Route>
      <Route path="/dashboard/admins/add" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Add Admin">
              <AddAdmin />
            </DashboardBody>
          }
        />
      </Route>
      <Route path="/dashboard/moderators" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Moderators">
              <Moderators />
            </DashboardBody>
          }
        />
      </Route>
      <Route path="/dashboard/moderators/add" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Add Moderator">
              <AddModerator />
            </DashboardBody>
          }
        />
      </Route>
      <Route path="/dashboard/setting" element={<AuthRoutes />}>
        <Route
          index
          element={
            <DashboardBody name="Setting">
              <Settings />
            </DashboardBody>
          }
        />
      </Route>
      {/* <Route path="/profile" element={<AuthRoutes />}>
        <Route index element={<Profile />} />
      </Route>
      <Route path="/user" element={<AuthRoutes />}>
        <Route index element={<UserBoard />} />
      </Route>
      <Route path="/admin" element={<AuthRoutes roles={["admin"]} />}>
        <Route index element={<AdminBoard />} />
      </Route>
      <Route path="/mod" element={<AuthRoutes roles={["moderator"]} />}>
        <Route index element={<ModeratorBoard />} />
      </Route> */}
      <Route path="/error403" element={<Error403 />} />
      <Route path="/error503" element={<Error503 />} />
      <Route path="/error500" element={<Error500 />} />
      <Route
        path="/auth"
        element={
          <GuestRoutes>
            <Auth />
          </GuestRoutes>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
