import React , { lazy , Suspense} from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import CircularLoading from'./CircularLoading';


//imports lazy-----------
const LoginPage = lazy(() => import("../Pages/LoginPage/LoginPage"));


//----------------

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={
            <Suspense fallback={<CircularLoading />}>
                <LoginPage />
            </Suspense>
        } />
    </Routes>
  )
}

export default Router