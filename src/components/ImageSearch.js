import React, {useState} from 'react'

const ImageSearch = ({ searchTerm }) => {
const [text, setText] = useState('');

const submitHandler = e =>{
    e.preventDefault();
    searchTerm(text);
}

  return (
    <div className="flex justify-center">
    <div className="mb-3 xl:w-96">
    <form onSubmit={submitHandler} className='w-full mx-w-sm'>
    <div className="input-group relative flex flex-row items-stretch w-full mb-4 rounded">
    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search Images" aria-label="Search" aria-describedby="button-addon2" onChange={e => setText(e.target.value)}>
    </input>
    <button type='button' onClick={submitHandler} className='btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center'>Search</button>
    </div>
    </form>
    </div>
  </div>
  )
}

export default ImageSearch