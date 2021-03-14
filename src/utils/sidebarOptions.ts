import {
  FaThLarge,
  FaSignInAlt,
  FaFolderPlus,
  FaFolderOpen,
} from 'react-icons/fa'

interface IListOption {
  name: string
  logo: any
  link: string
}

export const sidebarOption: IListOption[] = [
  {
    name: 'Dashboard',
    logo: FaThLarge,
    link: '/dashboard',
  },
  {
    name: 'Entradas',
    logo: FaFolderPlus,
    link: '/entradas',
  },
  {
    name: 'Saídas',
    logo: FaFolderOpen,
    link: '/saidas',
  },
  {
    name: 'Sair',
    logo: FaSignInAlt,
    link: '/login',
  },
]
