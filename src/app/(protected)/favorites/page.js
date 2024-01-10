import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import Results from '@/app/components/Results'
import { getFavs } from '@/lib/actions'
import { auth } from '@/lib/auth'

export default async function UserFavorites({searchParams}) {
  const session =  await auth() 
  const favs = session?.user ? (await getFavs(session.user.name)).favs : []

return (
    <MaxWidthWrapper>
      <Results articles={favs} favs={favs} session={session} searchParams={searchParams}/>
    </MaxWidthWrapper>
  )
}
