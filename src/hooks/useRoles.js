import { useSelector } from 'react-redux'

export default function useRoles() {
  const { roles } = useSelector((state) => state.auth)

  return {
    isUserAdmitted: roles.some((role) => role.name.includes(...['admin'])),
  }
}
