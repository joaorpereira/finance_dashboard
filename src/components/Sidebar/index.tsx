import React from 'react'

import * as S from './styled'
import MyFinanceLogo from '../../assets/logo.svg'
import { sidebarOption } from '../../utils/sidebarOptions'

interface IProps {
  openSidebar: boolean
}

const Sidebar: React.FC<IProps> = ({ openSidebar }) => {
  return (
    <S.Container
      style={
        openSidebar
          ? { width: '240px', transition: '0.2s ease-in' }
          : { width: '60px', transition: '0.2s ease-in' }
      }
    >
      {openSidebar ? (
        <S.ImageBox>
          <S.Logo src={MyFinanceLogo} alt='my_finance' />
        </S.ImageBox>
      ) : (
        <div style={{ marginTop: '3.5rem' }} />
      )}
      <S.List>
        {sidebarOption.map(item => (
          <S.ListItem
            style={
              openSidebar
                ? { padding: '13px 0px 13px 20px' }
                : { padding: '10px 4px' }
            }
            key={item.name}
            to={item.link}
          >
            <item.logo />
            {openSidebar ? <p>{item.name}</p> : null}
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  )
}

export default Sidebar
