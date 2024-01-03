import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import Link from 'next/link'
import LoginForm from '@/app/components/LoginForm'

const Login = () => {
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col py-24 items-center gap-7 ">
                <h2 className='text-2xl font-semibold'>Sign in to your account</h2>
                <LoginForm/>
                <Link href='/register' className='hover:underline'>No account?</Link>
            </div>
        </MaxWidthWrapper>
    )
}

export default Login