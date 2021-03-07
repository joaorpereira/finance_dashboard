import { useState } from 'react'
import { useLocation } from 'react-router'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SidebarButton from '../../components/SidebarButton'
import Routes from '../../routes/Routes'

import * as S from './styled'

const MainContent: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true)
  const { pathname } = useLocation<string>()

  const conditional: boolean = pathname === '/login' || pathname === '/signup'

  return (
    <S.Container>
      {conditional ? (
        <S.Box>
          <Routes />
        </S.Box>
      ) : (
        <>
          <Sidebar openSidebar={openSidebar} />
          <SidebarButton
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
          <S.Box>
            <Header />
            <Routes />
          </S.Box>
        </>
      )}
    </S.Container>
  )
}

export default MainContent
