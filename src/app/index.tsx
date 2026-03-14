import Signin from './(auth)/signin';
import Home from './(app)/home';

export default function Index() {

  let loading = false;

  if(!loading) {
    return(
      <Signin />
    )
  }

  return(
    <Home/>
  )
}