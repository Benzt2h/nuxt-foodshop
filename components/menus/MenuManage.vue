<template>
  <v-card class="menu-manage mx-auto" max-width="344">
    <v-img :src="menu.menu_pic" height="200px"></v-img>

    <v-card-title> {{ menu.menu_name }} </v-card-title>

    <v-card-subtitle> {{ menu.menu_price }} </v-card-subtitle>

    <v-card-actions>
      <nuxt-link :to="{ name: 'menus-id', params: { id: menu.menu_id } }">
        <v-btn text color="deep-purple accent-4"> Edit </v-btn>
      </nuxt-link>

      <v-spacer></v-spacer>
      <v-btn text @click="onAdd(menu)">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MenuManage',
  props: {
    menu: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
