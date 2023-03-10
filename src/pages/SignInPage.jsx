import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setErrors, clearErrors } from '../actions/ui'
import Button from '../components/ui/Button'
import HelperText from '../components/ui/HelperText'
import LoadingScreen from '../components/ui/LoadingScreen'
import validateForm from '../helpers/validateForm'
import useForm from '../hooks/useForm'
import usePageTitle from '../hooks/usePageTitle'
import startAuth from '../services/auth/startAuth'

export default function SignInPage() {
  const dispatch = useDispatch()

  const { loading, errors } = useSelector((state) => state.ui)
  usePageTitle()

  const [formValues, handleInputChange] = useForm({
    username: '',
    password: '',
  })
  const { username, password } = formValues

  const handleSignIn = (event) => {
    event.preventDefault()
    const errors = validateForm({ ...formValues })

    if (errors) return dispatch(setErrors(errors))

    dispatch(clearErrors())
    dispatch(startAuth({ username, password }))
  }
  useEffect(() => () => dispatch(clearErrors()), [dispatch])
  return (
    <>
      {loading && <LoadingScreen />}
      <div className="sign w-full min-h-screen flex justify-center items-center ">
        <div className="w-full min-h-screen sm:min-h-fit rounded-none bg-slate-100 sm:rounded-lg shadow-lg p-8 md:w-2/3 lg:w-1/2 mx-auto ">
          <h3 className="text-3xl font-bold mb-8 text-center text-slate-700">
            Iniciar sesión
          </h3>
          <form
            onSubmit={handleSignIn}
            noValidate
            autoComplete="off"
            spellCheck={false}
            className="space-y-4"
          >
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="font-semibold mb-1 text-slate-700"
              >
                Nombre de usuario
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className={` font-sans font-bold py-2 px-4 border rounded-md outline-none bg-white shadow-sm ${
                  errors.username || errors.userAndPass ? 'border-red-500' : ''
                }`}
                onChange={handleInputChange}
                value={username}
              />
              {errors.username && <HelperText msg={errors.username} />}
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
                className={`font-sans font-bold py-2 px-4 border rounded-md outline-none bg-white shadow-sm ${
                  errors.password || errors.userAndPass ? 'border-red-500' : ''
                }`}
                onChange={handleInputChange}
                value={password}
              />
              {errors.password && <HelperText msg={errors.password} />}
              {errors.userAndPass && <HelperText msg={errors.userAndPass} />}
            </div>
            <div className="flex items-center justify-center">
              <Button type="submit" disabled={loading}>
                Iniciar sesión
              </Button>
            </div>
            <p className="text-xl text-slate-700 mt-4 text-center">
              ¿No tienes cuenta?{' '}
              <Link to="/auth/register" className="font-bold hover:opacity-50">
                Regístrate aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
