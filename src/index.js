import "tailwindcss/tailwind.css";
import Vue from 'vue';
import App from './App.vue';

new Vue({
	render: h => h(App, {
		props: { msg: 'Hello World' },
	}),
}).$mount('#app');
