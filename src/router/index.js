import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Layout from '@/components/Layout';
import Colors from '@/components/Colors';
import Text from '@/components/Text';
import Inputs from '@/components/Inputs';
import Buttons from '@/components/Buttons';
import Loader from '@/components/Loader';
import Cards from '@/components/Cards';
import Icons from '@/components/Icons';
import Nav from '@/components/Nav';
import Modal from '@/components/Modal';
import NotFound from '@/components/NotFound';

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
      path: '/colors',
      name: 'Colors',
      component: Colors,
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons,
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal,
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav,
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons,
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards,
    },
    {
      path: '/loader',
      name: 'Loader',
      component: Loader,
    },
    {
      path: '/inputs',
      name: 'Inputs',
      component: Inputs,
    },
    {
      path: '/text',
      name: 'Text',
      component: Text,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
