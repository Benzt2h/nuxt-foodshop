<template>
  <v-row class="menu-order text-center">
    {{ order.menu_name }} {{ order.menu_price }} x {{ order.amount }} =
    {{ order.menu_price * order.amount }}
    <v-btn
      @click="onDelete(order.menu_id)"
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'MenuOrder',
  props: {
    order: {
      type: Object,
    },
  },
  methods: {
    onDelete(id) {
      this.$emit('onDelete', id)
    },
  },
}
</script>
