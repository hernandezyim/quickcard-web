export const getAuthHeaders = (token) => ({
  'Content-Type': 'application/json',
  authorization: 'Bearer ' + token,
})
