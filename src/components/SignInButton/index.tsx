import { signIn, signOut, useSession } from 'next-auth/client'
import * as S from './styles'

const SignInButton = () => {
  const [session] = useSession()
  console.log({ session })

  return session ? (
    <button type="button" onClick={() => signOut()}>
      {/* <FaGithub color="#04d361" /> */}
      {session?.user?.name} | Sair
      {/* <FiX color="#737380" className={styles.closeIcon} /> */}
    </button>
  ) : (
    <button
      type="button"
      // className={styles.signInButton}
      onClick={() => signIn('google')}
    >
      {/* <FaGithub color="#eba417" /> */}
      Sign in with Google
    </button>
  )
}

export default SignInButton
