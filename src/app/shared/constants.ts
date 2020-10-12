import { MenuItem } from './interfaces';

export const MenuItemList: MenuItem[] = [
    {
        path: '/feed',
        iconSrc: '../../assets/images/home.svg',
        activeIconSrc: '../../assets/images/home-active.svg',
        content: 'Feed',
    },
    {
        path: '/add-book',
        iconSrc: 'https://via.placeholder.com/20',
        content: 'Add Book',
    },
    {
        path: '/profile',
        iconSrc: '../../assets/images/user.svg',
        activeIconSrc: '../../assets/images/user-active.svg',
        content: 'Profile',
    },
]  