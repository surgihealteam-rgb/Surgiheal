import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  return <Navigate to="/admin-access-controll/consultations" replace />;
};

export default AdminDashboard;