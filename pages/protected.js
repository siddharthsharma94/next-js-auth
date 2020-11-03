import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

export default function Protected() {
  const [session] = useSession();
  return (
    <div className={styles.container}>
      <Link href="/">&larr; Home</Link>
      <img style={{ marginTop: "10px", borderRadius: "400px" }} src={session?.user.image} />
      {
        session ?
          <>
            <h1>Hey {session?.login}!!</h1>
            <Link href="/api/auth/session">Want to view your full JSON Session? Click here &rarr;</Link>
          </>
          :
          <h1> Access Denied! Please go back and Login</h1>
      }
    </div>
  )
};