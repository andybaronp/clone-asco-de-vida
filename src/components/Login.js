import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContex'
import { Alert } from './Alert'
import Button from './Button'

const Login = () => {
  const { login, loginWithGoogle, user } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (user) return navigate('/')
  }, [user, navigate])

  const handleChange = ({ target: { name, value } }) =>
    setUserLogin({ ...userLogin, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await login(userLogin.email, userLogin.password)

      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='w-full max-w-xs m-auto mt-7  '>
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded'
      >
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 text-sm  mb-2'>
            Your email
          </label>
          <input
            autoComplete='off'
            type='email'
            name='email'
            onChange={handleChange}
            className='  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-gray-700 text-sm mb-2'
          >
            Your password
          </label>
          <input
            autoComplete='off'
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='*******'
            className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <Button>Login</Button>
      </form>
      <p className='pb-2  font-bold pr-2 flex justify-between '>
        Don't have an Account{' '}
        <Link to='/register' className='  text-orange-500 font-bold '>
          Register
        </Link>
      </p>
      <button
        className=' py-2 px-3  w-full  bg-blue-700 hover:bg-blue-600 text-white  font-bold  rounded border border-blue-800  '
        onClick={handleGoogleLogin}
      >
        Goole Login
      </button>
    </div>
  )
}
export default Login
