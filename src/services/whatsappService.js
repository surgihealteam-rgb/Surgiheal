const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const whatsappService = {
  async createWhatsAppUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/whatsapp-users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          mobile: userData.mobile
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw {
          status: response.status,
          message: data.message || 'Request failed',
          errors: data.data || {}
        };
      }

      return data;
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw {
        status: 500,
        message: 'Network error. Please check your connection.',
        errors: {}
      };
    }
  }
};