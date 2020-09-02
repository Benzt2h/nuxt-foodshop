<template>
  <v-container class="order" column justify-center align-center>
    <v-row class="text-center">
      <v-col><h1>Order</h1></v-col>
    </v-row>
    <v-row class="text-center">
      <Order
        v-for="order in orders"
        :key="order.order_id"
        :order="order"
        @onDelete="orderDelete"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Order from '../../components/orders/Order.vue'
export default {
  name: 'Orders',
  components: {
    Order,
  },
  computed: {
    ...mapState(['orders']),
  },
  mounted() {
    this.orderInit()
  },
  methods: {
    ...mapActions(['orderInit', 'orderDelete']),
  },
}
</script>

<style scoped></style>
