import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import Service from '~/pages/Service';
import Upload from '~/pages/Upload';
import Login from '~/pages/Login';



const publicRoutes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/service', component: Service },
    { path: '/login', component: Login },
    { path: '/upload', component: Upload }, // admin
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }