<template>
  <v-card class="menu mx-auto" max-width="344">
    <v-img :src="menu.menu_pic" height="200px"></v-img>

    <v-card-title> {{ menu.menu_name }} </v-card-title>

    <v-card-subtitle> {{ menu.menu_price }} </v-card-subtitle>

    <v-card-actions>
      <v-btn text @click="onAdd(menu)">Add</v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menu: {
      type: Object,
      default: null,
    },
  },
  methods: {
    onAdd(data) {
      const newOrder = {
        menu_id: data.menu_id,
        menu_price: data.menu_price,
        menu_name: data.menu_name,
      }
      this.$emit('addOrder', newOrder)
    },
  },
}
</script>
