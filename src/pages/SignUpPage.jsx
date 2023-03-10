import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearErrors, setErrors } from '../actions/ui'
import Button from '../components/ui/Button'
import HelperText from '../components/ui/HelperText'
import LoadingScreen from '../components/ui/LoadingScreen'
import validateForm from '../helpers/validateForm'
import useForm from '../hooks/useForm'
import usePageTitle from '../hooks/usePageTitle'
import startAuth from '../services/auth/startAuth'

export default function SignUpPage() {
  const dispatch = useDispatch()

  const { loading, errors } = useSelector((state) => state.ui)
  usePageTitle()

  const [formValues, handleInputChange] = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const { name, username, email, password, passwordConfirmation } = formValues

  const handleSignUp = (event) => {
    event.preventDefault()

    const errors = validateForm({ ...formValues })

    if (errors) return dispatch(setErrors(errors))

    dispatch(clearErrors())
    dispatch(
      startAuth({ name, username, email, password, passwordConfirmation })
    )
  }
  useEffect(() => () => dispatch(clearErrors()), [dispatch])

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="w-full min-h-screen flex sign justify-center items-center">
        <div className="w-full min-h-screen sm:min-h-fit rounded-none bg-slate-100 sm:rounded-lg shadow-lg p-8 md:w-2/3 lg:w-1/2 mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-slate-700">
            Registro
          </h3>
          <form
            onSubmit={handleSignUp}
            noValidate
            autoComplete="off"
            spellCheck={false}
            className="space-y-4"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-semibold mb-1 text-slate-700"
              >
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className={`py-2 px-4 border rounded-md outline-none bg-white  shadow-sm ${
                  errors.name ? 'border-red-500' : ''
                }`}
                onChange={handleInputChange}
                value={name}
              />
              {errors.name && <HelperText msg={errors.name} />}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-semibold mb-1 text-slate-700"
              >
                Nombre de usuario
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className={`py-2 px-4 border rounded-md outline-none bg-white  shadow-sm ${
                  errors.username ? 'border-red-500' : ''
                }`}
                onChange={handleInputChange}
                value={username}
              />
              {errors.username && <HelperText msg={errors.username} />}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-semibold mb-1 text-slate-700"
              >
                Dirección de correo
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={`py-2 px-4 border rounded-md outline-none bg-white  shadow-sm ${
                  errors.email ? 'border-red-500' : ''
                }`}
                onChange={handleInputChange}
                value={email}
              />
              {errors.email && <HelperText msg={errors.email} />}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="font-semibold mb-1 text-slate-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className={`py-2 px-4 border rounded-md bg-white border-rounded-md outline-none ${
                  errors.password || errors.passAndPass2
                    ? 'border-red-500'
                    : 'border-gray-300'
                }} onChange={handleInputChange} value={password} /> {errors.password && <HelperText msg={errors.password} />} <div className="flex items-center justify-between"> <div className="flex flex-col"> <label htmlFor="passwordConfirmation" className="font-semibold mb-1 text-slate-100"> Confirmar contraseña </label> <input id="passwordConfirmation" type="password" name="passwordConfirmation" className={py-2 px-4 border rounded-md outline-none bg-slate-100 border
                -rounded-md outline-none ${
                  errors.password2 || errors.passAndPass2
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                onChange={handleInputChange}
                value={password}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="font-semibold mb-1 text-slate-700"
              >
                Verificar contraseña
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                name="passwordConfirmation"
                className={`py-2 px-4 border rounded-md bg-white border-rounded-md outline-none ${
                  errors.password || errors.passAndPass2
                    ? 'border-red-500'
                    : 'border-gray-300'
                }} onChange={handleInputChange} value={password} /> {errors.password && <HelperText msg={errors.password} />} <div className="flex items-center justify-between"> <div className="flex flex-col"> <label htmlFor="passwordConfirmation" className="font-semibold mb-1 text-slate-100"> Confirmar contraseña </label> <input id="passwordConfirmation" type="password" name="passwordConfirmation" className={py-2 px-4 border rounded-md outline-none bg-slate-100 border
                -rounded-md outline-none ${
                  errors.password2 || errors.passAndPass2
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                onChange={handleInputChange}
                value={passwordConfirmation}
              />
              {errors.password2 && <HelperText msg={errors.password2} />}
              {errors.passAndPass2 && <HelperText msg={errors.passAndPass2} />}
            </div>
            <div className="flex items-center justify-center">
              <Button type="submit" disabled={loading}>
                Registrarse
              </Button>
            </div>
          </form>
          <p className="text-xl text-slate-700 mt-4 text-center">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/auth/login" className="font-bold hover:opacity-50">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
