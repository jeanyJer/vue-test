<template>
    <div class="main">
        <ul class="title-list">
            <li v-for="item in titles" :class="{active: item.title == view}" @click="changeTitle(item.title)">
                <span>{{item.title | upperCase}}</span>
            </li>
        </ul>
        <div class="list-wrap">
            <component v-bind:is="view" :title="view"></component>
        </div>
    </div>
</template>

<script>
    import dashboard from './dashboard/index.vue';
    import agents from './agents/index.vue';
    import {titleList} from './config.js';
    export default {
        data() {
            return {
                titles: titleList,
                view: "agents",
            }
        },
        components: {
            'dashboard': dashboard,
            'agents': agents
        },
        methods: {
            changeTitle(title) {
                this.view = title;
            }
        },
        filters: {
            upperCase(str) {
                return str.toUpperCase();
            }
        }
    }
</script>
<style lang="sass">
    
</style>