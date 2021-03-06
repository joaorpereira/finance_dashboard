import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'

import * as S from './styled'

const iconStyle = {
  fontSize: '25px',
  fill: '#222831',
}

const Header: React.FC = () => {
  return (
    <S.Container>
      <FaRegUserCircle style={iconStyle} />
      <p>João Paulo</p>
    </S.Container>
  )
}

export default Header
