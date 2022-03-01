import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContex'
import { Alert } from './Alert'
import Button from './Button'

const Register = () => {
  const { signup, user } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [userRegister, setUserRegister] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (user) return navigate('/')
  }, [user, navigate])

  const handleChange = ({ target: { name, value } }) =>
    setUserRegister({ ...userRegister, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await signup(userRegister.email, userRegister.password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='w-full max-w-xs m-auto mt-7 '>
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
            type='email'
            name='email'
            autoComplete='off'
            onChange={handleChange}
            className='  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-gray-700 text-sm  mb-2'
          >
            Your password
          </label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='********'
            autoComplete='off'
            className='  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <Button>Register</Button>
      </form>
      <p className='pb-2  pr-2 flex justify-between font-bold '>
        Already have an account?
        <Link to='/login' className='  text-orange-500 font-bold '>
          Login
        </Link>
      </p>
    </div>
  )
}
export default Register
