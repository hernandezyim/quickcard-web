const messagesError = {
  userAndPass: {
    incorrect: 'Nombre de usuario y/o contraseña incorrecta.',
  },
  emailAndPass: {
    undefined:
      'Introduzca una dirección de correo electrónico y una contraseña.',
    incorrect: 'Dirección de correo electrónico y/o contraseña incorrecta.',
  },
  passAndPass2: {
    notIqual: 'Las contraseñas no coinciden.',
  },
  username: {
    undefined: 'Introduzca un nombre de usuario.',
    required: 'Nombre de usuario obligatório.',
    characters:
      'Introduzca un usuario que se encuentre entre 6 y 10 caracteres.',
    used: 'Ese usuario esta en uso. Prueba con otro.',
  },
  name: {
    undefined: 'Introduzca su nombre.',
    required: 'Nombre obligatório.',
    characters: 'Introduzca un nombre que tenga mas de 3 caracteres.',
  },
  password: {
    undefined: 'Introduzca una contraseña.',
    required: 'Contraseña obligatória.',
    characters:
      'Introduzca una contraseña como mínimo de 6 caracteres(letras o numeros).',
  },
  password2: {
    undefined: 'Confirme su contraseña.',
  },
  email: {
    undefined: 'Introduzca una dirección de correo electrónico.',
    required: 'Dirección de correo electrónico obligatório.',
    invalid: 'Introduzca una dirección de correo electrónico válida.',
    used: 'Esa dirección de correo electrónico esta en uso. Prueba con otra.',
  },
}

export default messagesError
