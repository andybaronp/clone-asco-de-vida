const Spinner = () => {
  return (
    //    Spiner tailwind
    <div className=' flex justify-center items-center'>
      <div className='animate-spin rounded-full h-44 w-44 border-t-8 border-orange-500'>
        <div className='animate-ping rounded-full h-44 w-44 border-t-8 border-orange-500' />
      </div>
    </div>
  )
}

export default Spinner
