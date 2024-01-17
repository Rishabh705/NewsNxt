import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { getDetail } from '@/utils/api'
import Favorite from '@/app/components/Favorite'
import { getFavs } from '@/lib/actions'
import { auth } from '@/lib/auth'

const Detail = async ({ params }) => {
  const getResults =  getDetail(params.id)
  const getSession = auth()
  const [result, session] = await Promise.all([getResults, getSession])
  const favs = session?.user ? (await getFavs(session.user.name)).favs : []
  return (
    <MaxWidthWrapper>
      <div className='min-h-full w-2/3'>
        <div className='mt-6'>
          <Image src={result.image} width={800} height={350} alt={result.uri} />
        </div>
        <div className='py-4 flex flex-col max-w-3xl gap-2'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>{result.title}</h1>
          <h3 className='mt-3'><span className='font-semibold'>Date Published: </span>{result.date}</h3>
          <h4 className='text-slate-600 italic'>By {result.authors?.map((author, index) => <span key={index}>{author.name}</span>)||'Anonymous'}</h4>
        </div>
        <div>
          <p className='mt-3 text-lg max-w-prose text-muted-foreground'>{result.body}</p>
          <div className='flex gap-4 pt-6'>
            <p>Like the article? Click here</p>
            <Favorite id={params.id} user={session?.user?.name || null} isFav={favs.includes(params.id)}/>
          </div>
          <p className='mt-6'>See full article at <Link href={result.url}><span className='text-blue-500'>{result.source.title}</span></Link></p>
        </div>
      </div>
    </MaxWidthWrapper>

  )
}

export default Detail