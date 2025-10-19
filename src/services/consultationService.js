const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const consultationService = {
  async createConsultation(consultationData) {
    try {
      const response = await fetch(`${API_BASE_URL}/consultations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: consultationData.name,
          email: consultationData.email,
          mobile: consultationData.phone,
          city: consultationData.city,
          disease: consultationData.disease
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