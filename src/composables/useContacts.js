import { ref, computed } from 'vue';

const STORAGE_KEY = 'contacts';

function loadContacts() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

const contacts = ref(loadContacts());

function sortContacts(list) {
  return list.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
}

export function useContacts() {
  // Sorted contacts
  const sortedContacts = computed(() => sortContacts(contacts.value));

  // Search contacts by first or last name
  function searchContacts(query) {
    if (!query) return sortedContacts.value;
    const q = query.toLowerCase();
    return sortedContacts.value.filter(
      c => c.firstName.toLowerCase().includes(q) || c.lastName.toLowerCase().includes(q)
    );
  }

  // Get contact by ID
  function getContactById(id) {
    return contacts.value.find(c => c.id === id);
  }

  // Add a new contact
  function addContact(contact) {
    const id = Date.now().toString();
    const newContact = { ...contact, id };
    contacts.value.push(newContact);
    saveContacts(contacts.value);
    return newContact;
  }

  // Update an existing contact
  function updateContact(id, updatedContact) {
    const idx = contacts.value.findIndex(c => c.id === id);
    if (idx !== -1) {
      contacts.value[idx] = { ...contacts.value[idx], ...updatedContact };
      saveContacts(contacts.value);
      return contacts.value[idx];
    }
    return null;
  }

  // Delete a contact
  function deleteContact(id) {
    const idx = contacts.value.findIndex(c => c.id === id);
    if (idx !== -1) {
      contacts.value.splice(idx, 1);
      saveContacts(contacts.value);
      return true;
    }
    return false;
  }

  return {
    contacts: sortedContacts,
    searchContacts,
    getContactById,
    addContact,
    updateContact,
    deleteContact,
  };
} 
