<template>
  <div v-if="contact" class="card shadow-sm p-4">
    <h1 class="mb-4">Edit Contact</h1>
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
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  </div>
  <div v-else>
    <p>Contact not found.</p>
  </div>
</template>

<script setup>
import { reactive, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useContacts } from '../composables/useContacts';

const route = useRoute();
const router = useRouter();
const { getContactById, updateContact } = useContacts();

const contact = getContactById(route.params.id);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
});

watchEffect(() => {
  if (contact) {
    form.firstName = contact.firstName;
    form.lastName = contact.lastName;
    form.email = contact.email;
  }
});

function handleSubmit() {
  updateContact(route.params.id, { ...form });
  router.push(`/contact/${route.params.id}`);
}
</script>
