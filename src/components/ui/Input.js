import React from 'react'

const Input = ({type, placeholder,style}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} 
            className={`mb-2 input input-ghost focus:input-ghost input-bordered w-full max-w-md text-neutral border-transparent focus:border-transparent focus:ring-0 ${style}`}
        />
    </div>
  )
}

export default Input