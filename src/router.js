import Vue from 'vue';
import VueRouter from 'vue-router';
import App1 from './views/App1';
import Loader from "./views/Loader";
import RssList1 from "./views/RssList1";
import RssEdit1 from "./views/RssEdit1";
import RssList from "./views/RssList";
import RssEdit from "./views/RssEdit";
import App from './views/App';
import Admin from "./views/Admin";

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "Admin/", name: "Admin", component: Admin },
		{ path: "/app", component: App, children: [
				{ path: "/", name: "app", component: RssList },
				{ path: "/:id", name: "edit", component: RssEdit }
			]},
		{ path: "/app1", component: App1, children: [
				{ path: "/", name: "app1", component: RssList1 },
				{ path: "/:id", name: "edit1", component: RssEdit1 }
			]},
	]
});
