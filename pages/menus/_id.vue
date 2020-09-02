<template>
  <v-container class="menus-id" column justify-center align-center>
    <v-row class="text-center">
      <v-col>Edit</v-col>
    </v-row>
    <v-form>
      <v-text-field
        v-model="menu.menu_name"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="menu.menu_price"
        label="Price"
        required
      ></v-text-field>
      <v-text-field
        v-model="menu.menu_pic"
        label="Image"
        required
      ></v-text-field>
    </v-form>
    <v-row class="text-center">
      <v-col>
        <v-btn @click="menuEdit(menu)">Edit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'MenusId',
  data() {
    return {
      menu: {},
    }
  },
  mounted() {
    axios
      .get('http://192.168.1.108:3000/getMenuDetail/' + this.$route.params.id)
      .then((res) => {
        this.menu = res.data.message
      })
  },
  methods: {
    ...mapActions(['menuEdit']),
  },
}
</script>

<style scoped></style>
