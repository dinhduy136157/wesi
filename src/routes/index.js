//Layouts
import DefaultLayout from '~/components/Layout/DefaultLayout';
import OnlyHeader from '~/components/Layout/OnlyHeader';

//Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Watch from '~/pages/Watch';

//public routes
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/profile', component: Profile, layout: OnlyHeader },
    { path: '/watch', component: Watch, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
