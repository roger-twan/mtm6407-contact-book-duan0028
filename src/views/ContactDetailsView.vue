<template>
  <div v-if="contact" class="card shadow-sm p-4">
    <h1 class="mb-4">{{ contact.firstName }} {{ contact.lastName }}</h1>
    <ul class="list-group mb-4">
      <li class="list-group-item"><strong>Email:</strong> {{ contact.email }}</li>
    </ul>
    <div class="d-flex gap-2">
      <router-link :to="`/edit/${contact.id}`" class="btn btn-outline-primary">
        Edit
      </router-link>
      <button @click="handleDelete" class="btn btn-outline-danger">Delete</button>
    </div>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useContacts } from '../composables/useContacts';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();
const { getContactById, deleteContact } = useContacts();

const contact = computed(() => getContactById(route.params.id));

function handleDelete() {
  if (confirm('Are you sure you want to delete this contact?')) {
    deleteContact(route.params.id);
    router.push('/');
  }
}
</script>
