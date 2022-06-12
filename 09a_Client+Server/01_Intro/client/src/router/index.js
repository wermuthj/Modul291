import Vue from 'vue'
import VueRouter from 'vue-router'
import validate from '../components/Validate'
Vue.use(VueRouter);

export const routes =[
    {
        path: '/Validate',
        name: 'validate',
        component: () =>
            import('../components/Validate')
    }
]

const router = new VueRouter( {
    routes
})
export default router;