import SignInButton from 'components/SignInButton'

import * as S from './styles'

const LoginTemplate = () => {
  return (
    <S.Wrapper>
      <S.WrapperText>
        <h1>Faça login para continuar</h1>
        <SignInButton />
      </S.WrapperText>
    </S.Wrapper>
  )
}

export default LoginTemplate
