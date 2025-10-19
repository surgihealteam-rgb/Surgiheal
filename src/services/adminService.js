const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const adminService = {
  async getConsultations(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc') {
    try {
      const response = await fetch(
        `${API_BASE_URL}/consultations?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`
      );
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch consultations');
    }
  },

  async searchConsultations(keyword, page = 0, size = 10) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/consultations/search?keyword=${encodeURIComponent(keyword)}&page=${page}&size=${size}`
      );
      return await response.json();
    } catch (error) {
      throw new Error('Failed to search consultations');
    }
  },

  async getWhatsappUsers(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc') {
    try {
      const response = await fetch(
        `${API_BASE_URL}/whatsapp-users?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`
      );
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch WhatsApp users');
    }
  },

  async searchWhatsappUsers(keyword, page = 0, size = 10) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/whatsapp-users/search?keyword=${encodeURIComponent(keyword)}&page=${page}&size=${size}`
      );
      return await response.json();
    } catch (error) {
      throw new Error('Failed to search WhatsApp users');
    }
  }
};