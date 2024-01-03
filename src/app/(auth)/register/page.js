import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import Link from 'next/link'
import RegisterForm from '@/app/components/RegisterForm'

const Register = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col py-24 items-center gap-7 ">
        <h2 className='text-2xl font-semibold'>Register your account</h2>
        <RegisterForm/>
        <Link href='/login' className='hover:underline'>Already have an account? Login here</Link>
      </div>
    </MaxWidthWrapper>
  )
}

export default Register