import Vue from 'vue'
import Router from 'vue-router'
import My from './views/my/my.vue';
import Find from './views/find/find.vue';
import Friend from './views/friend/friend.vue';
import Video from './views/video/video.vue';

Vue.use(Router)

export default new Router({
	linkActiveClass: 'music-active',
	routes: [
		{ path: '/', redirect: {name: 'find'}},
		{ path: '/find', name: 'find', component: Find },
		{ path: '/my', name: 'my', component: My },
		{ path: '/friend', name: 'friend', component: Friend },
		{ path: '/video', name: 'video', component: Video }
	]
})
