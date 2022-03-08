import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/authContex'
import { db } from '../firebase'
const categorys = [
  'varios',
  'amor',
  'amistad',
  'picante',
  'trabajo',
  'familia'
]

const NewPost = () => {
  const { user } = useAuth()
  const userName = user.displayName ? user.displayName : user.email
  const [category, setCategory] = useState('Varios')
  const [newPost, newSetPost] = useState({
    name: userName,
    category: '',
    post: '',
    createdAt: Timestamp.now()
  })
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) =>
    newSetPost({ ...newPost, category, [name]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // validar que no este vacio
    if (newPost.post.trim() === '') return
    try {
      await addDoc(collection(db, 'posts'), newPost)
      // redireccionar
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full max-w-2xl m-auto mt-7 bg-white  rounded p-4'>
      <h3 className='text-gray-900 font-bold mb-4'>
        Por favor, respeta las{' '}
        <span className='text-orange-500 font-bold'>reglas al publicar</span>
      </h3>
      <ul className='text-sm mb-2 text-slate-800'>
        <li className='mb-3'>
          * No hay temas tabú, exprésate en 400 caracteres. Evita historias de
          quinceañeras propias de la SuperPOP.
        </li>
        <li className='mb-3 text-orange-500 font-semibold'>
          * Lee y repasa tu mensaje. Escribe correctamente evitando errores
          ortográficos y lenguaje sms. Los ADV mal redactados y con errores no
          serán publicados.
        </li>
        <li>
          * Si tu anécdota no es publicada, no te ofendas, ¡agradecemos
          enormemente tu colaboración!
        </li>
      </ul>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md px-8 pt-6 pb-8 mb-4  rounded'
      >
        <div className='flex flex-col'>
          <label htmlFor='category' className=' text-gray-700 text-sm  my-3'>
            Categoria
          </label>
          <select
            className='form-select appearance-none

      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-orange-200
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none'
            name='category'
            onChange={(e) => setCategory(categorys[e.target.selectedIndex])}
          >
            {categorys.map((cat) => (
              <option key={cat} value={cat} className=' '>
                {cat}
              </option>
            ))}
          </select>
          <label className=' text-gray-700 text-sm  my-3' htmlFor='post'>
            Post
          </label>
          <textarea
            name='post'
            type='text'
            maxLength={300}
            onChange={handleChange}
            className='resize-none h-36 w-full mt-2 mb-6 px-4 py-2 border border-orange-200 rounded-lg text-gray-700 focus:outline-none focus:border-orange-600'
          />
          <button
            className='bg-orange-500 text-white py-1 px-2 rounded
                font-semibold hover:bg-orange-700 w-16'
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewPost
