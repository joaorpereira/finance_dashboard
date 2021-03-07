import React from 'react'

import * as S from './styled'
import MyFinanceLogo from '../../assets/logo.svg'
import { sidebarOption } from '../../utils/sidebarOptions'

interface IProps {
  openSidebar: boolean
}

const Sidebar: React.FC<IProps> = ({ openSidebar }) => {
  return (
    <S.Container openSidebar={openSidebar}>
      {openSidebar ? (
        <S.ImageBox>
          <S.Logo src={MyFinanceLogo} alt='my_finance' />
        </S.ImageBox>
      ) : (
        <div style={{ marginTop: '3.5rem' }} />
      )}
      <S.List>
        {sidebarOption.map(item => (
          <S.ListItem openSidebar={openSidebar} key={item.name} to={item.link}>
            <item.logo />
            <p>{item.name}</p>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  )
}

export default Sidebar
