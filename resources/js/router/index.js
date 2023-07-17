import { createWebHistory, createRouter } from 'vue-router';

import Login from '../auth/Login.vue';
import register from '../auth/register.vue';
import CategoryList from '../categories/CategoryList.vue';
import Createcategories from '../categories/Createcategories.vue';
import EditCategories from '../categories/EditCategories.vue';

const routes =[

    {
        path: "/login",
        name: "Login",
        component: Login,
    },


    {
        path: "/register",
        name: "Register",
        component: register,
    },
    {
        path: "/categorylist",
        name: "CategoryList",
        component: CategoryList,
    },

    {
        path: "/createcategories",
        name: "Createcategories",
        component: Createcategories,
    },

    {
        path: "/editcategories",
        name: "EditCategorie",
        component: EditCategories,
    },


];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
