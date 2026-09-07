const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message || "API request failed");
  }

  return response.json();
}
