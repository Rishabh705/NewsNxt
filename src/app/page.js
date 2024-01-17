import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import SearchBox from '@/app/components/SearchBox'
import Hbuttons from './components/Hbuttons'
import { Suspense } from 'react'
import Loading from './components/Loading'
import Results from './components/Results'

const Home = ({ searchParams }) => {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your Ultimate  Destination for <span className='bg-gradient-to-r from-sky-500 to-indigo-500 inline-block text-transparent bg-clip-text'>Premium News</span>
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to NewsNxt, where every piece of news on our platform undergoes rigorous verification by our team, ensuring high-quality and truth.
          </p>
          <SearchBox />
        </div>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper>
          <Hbuttons />

          <Suspense fallback={<Loading />}>
            <Results searchParams={searchParams} />
          </Suspense>

        </MaxWidthWrapper>
      </section>
    </>
  )
}

export default Home