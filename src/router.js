import { createRouter, createWebHistory } from "vue-router";

import HousesOverView from './pages/HousesOverview.vue';
import HouseDetails from './pages/HouseDetails.vue';
import Theform from './pages/TheForm.vue';
import TheAbout from './pages/TheAbout.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {path: '/', redirect: '/houses'},

        {
            path: '/houses',
            redirect: '/houses/overview',
            children: [
                {
                    path: 'overview',
                    component: HousesOverView
                },
                {
                    path: 'createlisting',
                    component: Theform
                },
                {
                    path: 'housedetails/:id',
                    component: HouseDetails,
                    props: true
                },
                {
                    path: 'editlisting/:id',
                    component: Theform,
                    props: true},
            ]
        },

        {path: '/about', component: TheAbout},
    ]
});

export default router;