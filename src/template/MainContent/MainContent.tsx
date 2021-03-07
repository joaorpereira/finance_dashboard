import { useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import SidebarButton from '../../components/SidebarButton'
import Routes from '../../routes/Routes'

import * as S from './styled'

const MainContent: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <S.Container>
      <Sidebar openSidebar={openSidebar} />
      <SidebarButton
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <S.Box>
        <Header />
        <Routes />
      </S.Box>
    </S.Container>
  )
}

export default MainContent
