import React, { useState } from 'react'
import logo from '../assets/logo2.png'
import logoadv from '../assets/logoadv.png'

import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContex'
import Button from './Button'
import Spinner from './Spinner'
const Header = () => {
  const { user, logout, loading } = useAuth()
  const [error, setError] = useState()
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      setError(error.message)
    }
  }
  if (loading) return <Spinner />

  return (
    <header className='mb-2'>
      <div className='flex items-center justify-between p-3 sm:h-12 sm:flex-row flex-nowrap bg-neutral-900'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='h-10 min-w-fit' />
        </Link>

        <div>
          {error && <alert message={error} />}
          <div className='flex justify-between align-middle'>
            <h2 className='mr-6 font-semibold text-white'>
              {user ? user.displayName || user.email : 'Anonimo'}
            </h2>
            {user ? (
              <Button action={handleLogout}>Logout </Button>
            ) : (
              <div className='flex justify-between'>
                <Button>
                  <Link to='/login'>Login</Link>
                </Button>

                <Button>
                  <Link to='/register'>Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2 p-3 h-60 sm:h-auto sm:flex-row'>
        <div className='flex justify-center w-48 sm:w-96 hover:scale-105'>
          <Link to='/'>
            <img src={logoadv} alt='LOGO' />
          </Link>
        </div>
        <div className='flex flex-col items-center gap-2 p-3 '>
          <p className='text-sm italic text-center text-white sm:text-justify'>
            <span className='mr-2 font-semibold text-orange-600'>
              ¡ESTO ES UN CLON!
            </span>
            Asco de vida recoge anécdotas que han arruinado tu día. ¿Por qué
            guardártelo para ti cuando puedes sacar una sonrisa a miles de
            personas? Tu desgracia puede ser nuestra gracia.
          </p>

          <nav className='sm:self-end '>
            <Button>
              <Link to='/newpost'>Publicar</Link>
            </Button>
            <Button variant='pointer-events-none  opacity-70 '>
              <Link to='/'>Moderar</Link>
            </Button>
            <Button variant='pointer-events-none  opacity-70 '>
              <Link to='/'>Aleatorio</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
