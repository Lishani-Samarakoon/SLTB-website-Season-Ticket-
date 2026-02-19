// API utility for making requests to the backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};

export const submitApplication = async (formData) => {
  return apiCall('/apply', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

export const checkHealth = async () => {
  return apiCall('/health');
};
