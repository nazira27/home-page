import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import vuetify from './plugins/vuetify';
import vueScrollto from 'vue-scrollto';

Vue.use(vuetify, {
	options: {
		customProperties: true,
	},
	iconfont: 'mdi',
});
Vue.use(vueScrollto);
new Vue({
	router,
	vuetify,
	render: h => h(App),
}).$mount('#app');
