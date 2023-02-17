import '@/styles/globals.css'
import Loading from 'components/loading';
import { auth } from 'config/firebase';
import type { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './login';

export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth);

  if (loading) return <Loading />

  if (!loggedInUser) return <Login />

  if (error) return console.log(error);
  return <Component {...pageProps} />
}
