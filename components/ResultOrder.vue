<template>
  <div class="result-order">
    ราคารวม {{ sumPrice }}
    <v-btn @click="confirmOrder" depressed small color="primary">ยืนยัน</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ResultOrder',
  data() {
    return {
      price: 0,
    }
  },
  props: {
    menuOrder: {
      type: Array,
    },
  },
  computed: {
    sumPrice() {
      this.menuOrder.map((order) => {
        this.price = this.price + order.menu_price * order.amount
      })
      return this.price
    },
  },
  methods: {
    confirmOrder() {
      if (this.menuOrder.length > 0) {
        this.price = 0
        this.$emit('onConfirmOrder', this.price)
      }
    },
  },
}
</script>
