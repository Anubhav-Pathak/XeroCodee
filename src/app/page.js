import Link from "next/link"
import Image from "next/image"
import SignUp from "@/components/SignUp"


export default function Home() {
  return (
    <main className="bg-hero-pattern min-h-screen grid place-content-center">
      <section className="bg-secondary rounded-curved flex flex-wrap justify-center gap-8 items-center p-8 relative overflow-hidden">
        <div className="text-center mb-24 lg:mb-0 lg:border-r lg:pr-8">
          <Image src={"/Logo.png"} width={160} height={50} className="mx-auto"/>
          <h1 className="text-xl md:text-3xl mt-6 text-black">Hello!</h1>
          <div className="divider before:bg-gray after:bg-gray text-gray"> Create your Account </div>
          <SignUp />
          <div className="my-2"> OR </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-outline">Sign Up with Google <Image src={"/Google.png"} width={30} height={30}/></button>  
            <button className="btn btn-outline">Sign Up with GitHub <Image src={"/GitHub.png"} width={30} height={30}/></button>  
          </div>
          <p className="mt-4">Already have an Account ? <Link href="/api/auth/login" className="text-primary">LOGIN</Link></p>
        </div>
        <img src={"/Hero.png"} className="hidden lg:block"/>
      </section>
    </main>
  )
}
