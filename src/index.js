/**
 * @file 入口JS
 * @author xgl
 */

// LIB
import Vue from 'vue';

import app from './app.vue';

new Vue({
    el: '#app',
    render(h) {
        return h(app);
    }
});