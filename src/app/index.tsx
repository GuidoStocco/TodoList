import SignIn from '@/app/(auth)/signin/page'
import Home from './(app)/home/page';

export default function Index() {

  let loading = false;

  if(!loading) {
    return(
      <SignIn />
    )
  }

  return(
    <Home/>
  )
}