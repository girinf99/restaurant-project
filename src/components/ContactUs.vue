<script setup>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      phone (value) {
        if (/^[0-9-]{7,}$/.test(value)) return true

        return 'Phone number needs to be at least 7 digits.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      select (value) {
        if (value) return true

        return 'Select an item.'
      },
      checkbox (value) {
        if (value === '1') return true

        return 'Must be checked.'
      },
    },
  })
  const name = useField('name')
  const phone = useField('phone')
  const email = useField('email')
  const guests = useField('guests')
  const times = useField('time')
  const checkbox = useField('checkbox')

  const guest = ref([
    '1',
    '2',
    '3',
    '4',
  ])

  const time = ref([
    'All Day',
    'Lunch time',
    'Dinner time'
  ])

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>

<template>
  <form @submit.prevent="submit" fill-height>
    <v-text-field
      v-model="name.value.value"
      :counter="20"
      :error-messages="name.errorMessage.value"
      label="Name"
      width="300"
      variant="solo"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
      width="300"
      variant="solo"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
      width="300"
      variant="solo"
    ></v-text-field>

    <v-select
      v-model="guests.value.value"
      :error-messages="guests.errorMessage.value"
      :items="guest"
      label="Guests"
      required
      width="300"
      variant="solo"
    ></v-select>

    <v-select
      v-model="times.value.value"
      :error-messages="times.errorMessage.value"
      :items="time"
      label="Time"
      required
      width="300"
      variant="solo"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      label="I agree"
      type="checkbox"
      value="1"
      variant="solo"
    ></v-checkbox>

    <v-btn
      class="me-4"
      type="submit"
    >
      submit
    </v-btn>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form>
</template>



