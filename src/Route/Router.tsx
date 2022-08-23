import React , { lazy , Suspense} from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import CircularLoading from'./CircularLoading';


//imports lazy-----------
const LoginPage = lazy(() => import("../Pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("../Pages/Homepage/HomePage"));
const Dashboard = lazy(() => import("../Pages/Dashboard/DashboardPage"));
//----------------

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={
            <Suspense fallback={<CircularLoading />}>
                <LoginPage />
            </Suspense>
        } />
        <Route path='home' element={
          <Suspense fallback={<CircularLoading />} >
              <HomePage />
          </Suspense>
        } >
            <Route path="dashboard" element={
              <Suspense fallback={<CircularLoading />}>
                <Dashboard />
              </Suspense>
            } />
            <Route path="admin" element={
              <Suspense fallback={<CircularLoading />}>
                <Dashboard />
              </Suspense>
            } />
        </Route>
    </Routes>
  )
}

export default Router