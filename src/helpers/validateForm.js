import msg from '../helpers/messagesError'

const reExpEmail = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/

export default function validateForm(values) {
  const errors = {}

  const { name, username, email, password, passAndPass2, password2 } = msg

  const validValues = {
    username: () => {
      if (!values.username) errors.username = username.required
      else if (values.username.length < 6 || values.username.length > 10)
        errors.username = username.characters
    },
    name: () => {
      if (!values.name) errors.name = name.required
      else if (values.name.length < 3) errors.name = name.characters
    },
    email: () => {
      if (!values.email) errors.email = email.required
      else if (!reExpEmail.exec(values.email)) errors.email = email.invalid
    },
    password: () => {
      if (!values.password) errors.password = password.required
      else if (values.password.length < 6 && values.name)
        errors.password = msg.password.characters
    },
    passwordConfirmation: () => {
      if (!values.passwordConfirmation) errors.password2 = password2.undefined
      else if (values.passwordConfirmation !== values.password)
        errors.passAndPass2 = passAndPass2.notIqual
    },
  }

  Object.keys(values).forEach((key) => {
    values[key] = values[key].trim()
    validValues[key]()
  })

  return Object.keys(errors).length ? errors : null
}
