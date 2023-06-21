import React from 'react'

const Final = () => {
  return (
    <div className='container md:mt-10'>
        <div className='flex flex-col items-center'>
            <div className='text-gray-700'>
                <svg className='w-20 h-20' fill='currentColor' viewBox='0 0 20 20' xmlns='https://www.w3.org/2000/svg' >
                <path fillRule="evenodd" d="M8.707 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 11.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7z" clipRule="evenodd"
  />
                </svg>            
            </div>

            <div className='mt-3 text-xl font-semibold text-green-500 uppercase'>
                Congratulations!
            </div>

            <div className='text-lg font-semibold text-gray-500'>
                Your Account has been created.
            </div>

            <a className='mt-10' href='/'>
                <button className='h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg foucs:shadow-outline hover:bg-greem-500 hover:text-green-100'>Close</button>
            </a>

        </div>

    </div>
  )
}

export default Final