<script setup>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'
  import { GoogleMap, Marker } from 'vue3-google-map'

  const components = {GoogleMap}
  const center = { lat: 38.897384799373775, lng: -77.13333331738288}
  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      message (value) {
        if (value?.length >= 2) return true

        return 'Please fill out this field.'
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
  const email = useField('email')
  const message = useField('message')

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Business Information</h3>
        <p>For any inquiries please fill in this form and we will get back to you.</p>

        <form @submit.prevent="submit">
        <v-text-field
          v-model="name.value.value"
          :counter="20"
          :error-messages="name.errorMessage.value"
          label="Name"
          width="300"
          variant="underlined"
          prepend-icon="mdi-account"
        ></v-text-field>

        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
          width="300"
          variant="underlined"
          prepend-icon="mdi-email"
        ></v-text-field>

        <v-textarea
          v-model="message.value.value"
          :error-messages="message.errorMessage.value"
          label="Write the message"
          width="400"
          variant="underlined"
          prepend-icon="mdi-comment"
        ></v-textarea>

        <v-btn
          class="me-4"
          type="submit"
          style="margin-top: 20px; margin-left: 300px"
        >
          Submit
        </v-btn>

        <!-- <v-btn @click="handleReset">
          clear
        </v-btn> -->
      </form>
      </v-col>

      <v-col>
        <div style="margin-bottom:40px">
          <h3>Operation Hours</h3>
          <p>Everyday 11 AM–9 PM</p>
        </div>
        
      
        <div style="margin-bottom:40px">
          <h3>General Information</h3>
          <p>emailhere@gmail.com</p>
        </div>

        <h3>Location</h3>
       <GoogleMap api-key="AIzaSyCNR4_znZFSeTfsm7b2gn6uNhz9yk7-DPY" 
       style="width: 300px; height: 300px"
       :zoom="15"
       :center="center"
       >
      <Marker :options="{position: center}"></Marker>
      </GoogleMap>
      </v-col>

    </v-row>
  </v-container>
 
  

  
</template>



