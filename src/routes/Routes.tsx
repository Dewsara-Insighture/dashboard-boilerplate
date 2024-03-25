import Container from '../components/layout/Container';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import ErrorPage from '../pages/errorpage/ErrorPage';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          key="home"
          path="/"
          element={
            <Container>
              <Dashboard />
            </Container>
          }
        />
         <Route
          key="error"
          path="/error"
          element={
            <Container>
              <ErrorPage />
            </Container>
          }
        />
         <Route
          key="error"
          path="/*"
          element={
            <Navigate to='/error' />
          }
        />
      </Routes>
    </>
  );
}
