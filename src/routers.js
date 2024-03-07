import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "About",
        component: About,
        path: "/About",
    },
    {
        name: "Contact",
        component: Contact,
        path: "/Contact",
    },
  
   
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;