import { createRouter, createWebHistory } from 'vue-router';
import ContactListView from '../views/ContactListView.vue';
import ContactDetailsView from '../views/ContactDetailsView.vue';
import AddContactView from '../views/AddContactView.vue';
import EditContactView from '../views/EditContactView.vue';

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactListView,
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetailsView,
    props: true,
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContactView,
  },
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: EditContactView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
