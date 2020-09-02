<template>
  <v-col cols="4">
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div></div>
        <p class="display-1 text--primary">Order {{ order.order_id }}</p>
        <p>{{ order.time }}</p>
        <div class="text--primary">
          ราคารวมทั้งหมด {{ order.order_total }} บาท
        </div>
      </v-card-text>
      <v-card-actions>
        <nuxt-link :to="{ name: 'orders-id', params: { id: order.order_id } }">
          <v-btn text color="deep-purple accent-4"> Detail </v-btn>
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-btn text color="deep-purple accent-4" @click="onDelete">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Order',
  props: {
    order: {
      type: Object,
      default: null,
    },
  },
  methods: {
    onDelete() {
      this.$emit('onDelete', this.order.order_id)
    },
  },
}
</script>
