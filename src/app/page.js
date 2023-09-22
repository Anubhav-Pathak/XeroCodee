import Link from "next/link"
import Image from "next/image"
import Input from "@/components/ui/Input"

export default function Home() {
  return (
    <main className="bg-hero-pattern min-h-screen grid place-content-center">
      <section className="bg-white rounded-curved flex flex-wrap justify-center gap-8 items-center p-8 relative">
        <div className="text-center">
          <Image src={"/Logo.png"} width={160} height={50}/>
          <h1 className="text-xl md:text-3xl mt-6 text-black">Hello!</h1>
          <div className="divider before:bg-neutral after:bg-neutral text-neutral"> Create your Account </div>
          <form className="text-center">
            <Input type="text" placeholder="First name"/>
            <Input type="text" placeholder="Last name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <Input type="submit" placeholder="Sign Up" style={"text-secondary bg-primary cursor-pointer"}/>
          </form>
          <div className="my-2"> OR </div>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary"> Sign Up with </button>
            <button className="btn btn-primary"> Sign Up with </button>
          </div>
          <p className="mt-4">Already have an Account ? <Link href="/api/auth/login" className="text-primary">LOGIN</Link></p>
        </div>
        <img src={"/Hero.png"}/>
        <svg className="absolute right-0 bottom-0" xmlns="http://www.w3.org/2000/svg" width="538" height="144" viewBox="0 0 538 144" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 144L22.4167 125.913C44.8333 107.826 89.6667 71.6522 134.5 66.087C179.333 59.8261 224.167 84.1739 269 96C313.833 107.826 358.667 107.826 403.5 89.7391C448.333 71.6522 493.167 36.1739 515.583 18.087L538 0V144H515.583C493.167 144 448.333 144 403.5 144C358.667 144 313.833 144 269 144C224.167 144 179.333 144 134.5 144C89.6667 144 44.8333 144 22.4167 144H0Z" fill="#1F64FF"/>
        </svg>
      </section>
    </main>
  )
}
