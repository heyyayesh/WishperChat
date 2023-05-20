import Image from "next/image"
import { AuthForm } from "./components/AuthForm"

export default function Home() {
  return (
    <div className='
      flex
      flex-col
      min-h-full
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-grey-100
    '>
      <div className="
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      ">
        <Image alt="logo" height={64} width={64} className="mx-auto" src="/images/logo_red.svg" />

        <h2 className="
          mt-6
          text-center
          text-3xl
          font-bold
          tracking-tight
          text-grey-900
        ">Sign in to your account</h2>
      </div>

      {/* Auth Form */}
      <AuthForm />

    </div>
  )
}
