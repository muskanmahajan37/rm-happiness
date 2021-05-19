import { signIn, signOut, useSession } from 'next-auth/client'
import { FiX } from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'

import * as S from './styles'

const SignInButton = () => {
  const [session] = useSession()

  return session ? (
    <S.Button type="button" onClick={() => signOut()}>
      {session.user?.image ? <img src={session.user.image} /> : <FaGoogle />}
      {session?.user?.name}
      <FiX color="#737380" className="closeIcon" />
    </S.Button>
  ) : (
    <S.Button type="button" onClick={() => signIn('google')}>
      <FaGoogle />
      Fazer login com o Google
    </S.Button>
  )
}

export default SignInButton
