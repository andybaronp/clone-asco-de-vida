export const Alert = ({ message }) => {
  return (
    <div className='relative px-4 py-3 mb-2 text-center text-red-600 bg-red-100 border border-red-400 rounded'>
      <span className='sm:inline-block'>{message}</span>
    </div>
  )
}
