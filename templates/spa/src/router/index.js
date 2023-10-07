import { createRouter, createWebHistory } from "vue-router";
import guards from "./guards/authGuard";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/*webpackChunkName: "home"*/ "@/views/HomeView.vue")
    },
    {
        path: "/dashboard",
        name: "dashboard",
        // route level code-splitting
        // this generates a separate chunk (dashboard.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
			import(/* webpackChunkName: "dashboard" */ "@/views/DashboardView.vue"),
		meta: {guard: 'requireAuth'}
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
	const guardName = to.meta.guard;
	const guardFunction = guards[guardName];
	if (guardFunction) {
		guardFunction(to, from, next);
	}
	else {
		next();
	}
});

export default router;
