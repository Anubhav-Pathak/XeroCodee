import React from 'react'

const Input = ({type, placeholder,style}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} 
            className={`mb-2 input bg-transparent input-bordered w-full max-w-md text-neutral border-2${style}`}
        />
    </div>
  )
}

export default Input