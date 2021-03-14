import React, { useState } from 'react'
import CardLogin from '../../components/Cards/CardLogin'
import MyFinanceLogo from '../../assets/logo.svg'
import * as S from './styled'
import Input from '../../components/Input'

const SignIn: React.FC = () => {
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  return (
    <S.Container>
      <S.Logo src={MyFinanceLogo} alt='my_finance' />
      <CardLogin>
        <h2>ENTRAR</h2>
        <div>
          <Input
            name='email'
            label='Email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            name='password'
            label='Senha'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </CardLogin>
    </S.Container>
  )
}

export default SignIn
