import { useState } from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Sidebar from '../../components/Sidebar'
import SidebarButton from '../../components/SidebarButton'

import * as S from './styled'

const MainContent: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <S.Container>
      <Sidebar openSidebar={openSidebar}/>
      <SidebarButton
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <S.Box>
        <Header />
        <Main />
      </S.Box>
    </S.Container>
  )
}

export default MainContent
