import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Layout from '@/components/Layout';
import Text from '@/components/Text';
import Inputs from '@/components/Inputs';

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
      path: '/Inputs',
      name: 'Inputs',
      component: Inputs,
    },
    {
      path: '/text',
      name: 'Text',
      component: Text,
    },
  ],
});
