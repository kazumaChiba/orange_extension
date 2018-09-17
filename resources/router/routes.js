const routes = [
    {
        path: '/',
	    component: resolve => require(['pages/layout/Landing.vue'], resolve),
        children: [
            {
                path: '',
                name: '首頁',
                component: resolve => require(['pages/Home.vue'], resolve),
            },
            
        ]
    },
]
export default routes
