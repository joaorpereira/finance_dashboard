import React, { Dispatch } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import * as S from './styled'

interface IProps {
  openSidebar: boolean
  setOpenSidebar: Dispatch<boolean>
}

const SidebarButton: React.FC<IProps> = ({ openSidebar, setOpenSidebar }) => {
  return (
    <S.Span open={openSidebar} onClick={() => setOpenSidebar(!openSidebar)}>
      {openSidebar ? (
        <FaChevronLeft style={{ fontSize: '12px' }} />
      ) : (
        <FaChevronRight style={{ fontSize: '12px' }} />
      )}
    </S.Span>
  )
}

export default SidebarButton
