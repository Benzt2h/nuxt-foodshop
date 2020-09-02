<template>
  <div class="result-order">
    ราคารวม {{ sumPrice }}
    <v-btn depressed small color="primary" @click="confirmOrder">ยืนยัน</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ResultOrder',
  props: {
    menuOrder: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      price: 0,
    }
  },

  computed: {
    sumPrice() {
      let p = 0
      this.menuOrder.map((order) => {
        p = p + order.menu_price * order.amount
        this.price = p
      })
      return p
    },
  },
  methods: {
    confirmOrder() {
      if (this.menuOrder.length > 0) {
        this.$emit('onConfirmOrder', this.price)
        setTimeout(() => {
          this.price = 0
        }, 100)
      }
    },
  },
}
</script>
