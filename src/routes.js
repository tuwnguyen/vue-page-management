import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './views/PageViewer.vue';
import CreatePage from './views/CreatePage.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/PagesList.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer, props: true },
    {
      path: '/pages',
      component: Pages,
      children: [
        { path: 'create', component: CreatePage },
        { path: '', component: PagesList },
      ],
    },
  ],
});

export default router;
