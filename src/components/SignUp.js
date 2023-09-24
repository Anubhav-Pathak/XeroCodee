import React from 'react'
import Input from "@/components/ui/Input"

const SignUp = () => {
  return (
    <form>
        <Input type="text" placeholder="First name"/>
        <Input type="text" placeholder="Last name"/>
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <Input type="password" placeholder="Confirm Password"/>
        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
    </form>
  )
}

export default SignUp