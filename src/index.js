/**
 * @file 入口JS
 * @author xujin
 */

// LIB
import Vue from 'vue';
import jquery from 'jquery';

import app from './app.vue';
import './css/main.scss';

new Vue({
    el: '#app',
    render(h) {
        return h(app);
    }
});