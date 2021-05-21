import Vue from 'vue'
import VueRouter from 'vue-router'
import vCatalog from '../components/catalog/v-catalog'
import vAbout from "../components/v-about"
import vContact from "../components/v-contact"
import vCart from "../components/cart/v-cart"
import vInfo from "../components/catalog/v-catalog-item-info"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: "catalog",
            component: vCatalog
        },
        {
            path: '/about',
            name: "about",
            component: vAbout,
            
        },
        {
            path: '/contact',
            name: "contact",
            component: vContact,
            
        },
        {
            path: '/cart',
            name: "cart",
            component: vCart,
            props:true
        },
        {
            path: '/info',
            name: "info",
            component: vInfo,
            props:true
        },
    ]


})