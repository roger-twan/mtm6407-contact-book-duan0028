<template>
  <div>
    <h1 class="mb-4">Contact List</h1>
    <input
      v-model="searchQuery"
      type="text"
      class="form-control mb-3"
      placeholder="Search contacts..."
    />
    <ul class="list-group mb-3">
      <li v-for="contact in filteredContacts" :key="contact.id" class="list-group-item d-flex justify-content-between align-items-center">
        <router-link :to="`/contact/${contact.id}`" class="text-decoration-none">
          {{ contact.firstName }} {{ contact.lastName }}
        </router-link>
      </li>
    </ul>
    <div v-if="filteredContacts.length === 0" class="alert alert-info">
      No contacts found.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useContacts } from '../composables/useContacts';

const searchQuery = ref('');
const { contacts, searchContacts } = useContacts();

const filteredContacts = computed(() => searchContacts(searchQuery.value));
</script>
