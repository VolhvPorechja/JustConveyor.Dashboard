"use strict";

import './css/site.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';

import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
    {path: '/', component: require('./components/home/home.vue.html')},
    {path: '/blueprints', component: require('./components/blueprints/blueprints.vue.html')},
    {path: '/pipelines', component: require('./components/pipelines/pipelines.vue.html')},
    {path: '/queues', component: require('./components/queues/queues.vue.html')},
    {path: '/contexts', component: require('./components/contexts/contexts.vue.html')},
    {path: '/suppliers', component: require('./components/suppliers/suppliers.vue.html')},
    {path: '/loggers', component: require('./components/loggers/loggers.vue.html')}
];

new Vue({
    el: '#app-root',
    router: new VueRouter({mode: 'history', routes: routes}),
    render: h => h(require('./components/app/app.vue.html'))
});
