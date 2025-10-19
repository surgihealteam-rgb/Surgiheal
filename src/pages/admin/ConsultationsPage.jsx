import { lazy } from 'react';
import { adminService } from '../../services/adminService';

const DataTable = lazy(() => import('../../components/admin/DataTable'));

const ConsultationsPage = () => {
  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'mobile', label: 'Mobile', sortable: false },
    { key: 'city', label: 'City', sortable: true },
    { key: 'disease', label: 'Disease', sortable: false },
    { 
      key: 'createdAt', 
      label: 'Created At', 
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString()
    }
  ];

  return (
    <DataTable
      title="User Free Consultations"
      columns={columns}
      fetchData={adminService.getConsultations}
      searchData={adminService.searchConsultations}
    />
  );
};

export default ConsultationsPage;