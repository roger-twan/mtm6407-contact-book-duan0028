<template>
  <div class="card shadow-sm p-4">
    <h1 class="mb-4">Add New Contact</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">First Name: <span class="text-danger">*</span></label>
        <input v-model="form.firstName" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Last Name: <span class="text-danger">*</span></label>
        <input v-model="form.lastName" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Email: <span class="text-danger">*</span></label>
        <input v-model="form.email" type="email" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Add Contact</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useContacts } from '../composables/useContacts';

const router = useRouter();
const { addContact } = useContacts();

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
});

function handleSubmit() {
  const newContact = addContact({ ...form });
  router.push(`/contact/${newContact.id}`);
}
</script>
