import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
    //base: '/',
    mode: 'history',
    //scrollBehavior: () => ({ y: 0 }), //切換頁面回到頂部
    scrollBehavior(to, from, savedPosition) {
        //console.log(to)
        //console.log(from)
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})


router.beforeEach((to, from, next) => {
    /*const path  = to.fullPath;
    const start = path.indexOf('/index');
    const end   = path.length;

    const replace_path = path.substring(start, end);*/


    next();
})


export default router
