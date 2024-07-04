
import { VerticalNavItemsType } from '../../layouts/types';
import { Home, Mail, Shield } from 'react-feather';



export const navigation: readonly VerticalNavItemsType[] = [
  {
    icon: <Home />,
    id: 'home',
    link: '/home',
    text: 'Home'
  },
  {
    icon: <Mail />,
    id: 'second-page',
    link: '/second-page',
    text: 'Second Page'
  },
  {
    action: 'read',
    icon: <Shield />,
    id: 'acl-page',
    link: '/acl',
    subject: 'acl-page',
    text: 'Access Control'
  }
];
