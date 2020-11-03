import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'


export default function Home() {
  const [session] = useSession()
  const handleLogin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleLogout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      <>
        {session?.user ?
          <a href="#" onClick={handleLogout} >Logout</a> :
          <a href="#" onClick={handleLogin} >Login</a>
        }
      </>
      <Link href="/protected">Protected &rarr;</Link>
    </div>
  )
};