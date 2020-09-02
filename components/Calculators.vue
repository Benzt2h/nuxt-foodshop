<template>
  <v-col cols="3" class="calculators">
    ตะกร้า
    <MenuOrder
      v-for="order in menuOrder"
      :key="order.menu_id"
      :order="order"
      @onDelete="deleteOrder"
    />
    <v-row class="text-center">
      <ResultOrder :menu-order="menuOrder" @onConfirmOrder="confirmOrder" />
    </v-row>
  </v-col>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MenuOrder from './MenuOrder.vue'
import ResultOrder from './ResultOrder.vue'
export default {
  name: 'Calculators',
  components: {
    MenuOrder,
    ResultOrder,
  },
  computed: {
    ...mapState(['menuOrder']),
  },
  methods: {
    ...mapActions(['deleteOrder', 'confirmOrder']),
  },
}
</script>
