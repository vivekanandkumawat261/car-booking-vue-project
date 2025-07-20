import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from '../components/layout/DefaultLayout.vue';
import HomePage from "../page/HomePage.vue"
import AboutPage from "../page/AboutPage.vue";
import ProductsPage from "../page/ProductsPage.vue";
import PricingPage from "../page/PricingPage.vue";
import LightsPage from "../page/LightsPage.vue";
import BlogPage from "../page/BlogPage.vue";
import ContactPage from "../page/ContactPage.vue";
import LightDetails from "../page/LightDetails.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "home",
                component: HomePage,
            },
            {
                path: "/about",
                name: "about",
                component: AboutPage,
            },
            {
                path: "/services",
                name: "services",
                component: ProductsPage,
            },
            {
                path: "/pricing",
                name: "pricing",
                component: PricingPage,
            },
            {
                path: "/lights",
                name: "lights",
                component: LightsPage,
            },
            {
                path: "/light/:id",
                name:"lightDetails",
                component: LightDetails,

            },
            {
                path: "/blog",
                name: "blog",
                component: BlogPage,
            },
            {
                path: "/contact",
                name: "contact",
                component: ContactPage,
            },
        ],
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0}; //scroll to the top on page navigation
    }
});

export default router;