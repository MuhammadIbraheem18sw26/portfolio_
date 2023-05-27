import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Blog from '../components/Blog.vue';
import RecentWork from '../components/RecentWork.vue';
import App from '../App.vue';

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/recent-work',
    name: 'RecentWork',
    component: RecentWork
  },
  {
    path: '/app',
    name: 'App',
    component: App
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;