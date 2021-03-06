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
    link: '/',
  },
  {
    name: 'Entradas',
    logo: FaFolderPlus,
    link: '/',
  },
  {
    name: 'Saídas',
    logo: FaFolderOpen,
    link: '/',
  },
  {
    name: 'Sair',
    logo: FaSignInAlt,
    link: '/',
  },
]
