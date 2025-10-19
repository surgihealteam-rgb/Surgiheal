import { lazy } from 'react';
import { adminService } from '../../services/adminService';

const DataTable = lazy(() => import('../../components/admin/DataTable'));

const WhatsappUsersPage = () => {
  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'mobile', label: 'Mobile', sortable: false },
    { 
      key: 'createdAt', 
      label: 'Created At', 
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString()
    }
  ];

  return (
    <DataTable
      title="WhatsApp Users"
      columns={columns}
      fetchData={adminService.getWhatsappUsers}
      searchData={adminService.searchWhatsappUsers}
    />
  );
};

export default WhatsappUsersPage;