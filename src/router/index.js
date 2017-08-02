import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Layout from '@/components/Layout';
import Text from '@/components/Text';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/text',
      name: 'Text',
      component: Text,
    },
  ],
});
