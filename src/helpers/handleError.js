import msg from './messagesError'

export default function handleError({ status, message }) {
  console.error(`Error: ${status} - ${message}`)

  const validStatus = {
    400: () => ({ emailAndPass: msg.emailAndPass.incorrect }),
    401: () => ({ userAndPass: msg.userAndPass.incorrect }),
    409: () => ({ email: msg.email.used }),
  }

  return validStatus[status] ? validStatus[status]() : {}
}
