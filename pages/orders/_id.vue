<template>
  <v-container class="order-id" column justify-center align-center>
    <v-row class="text-center">
      <v-col
        ><h1>Order {{ this.$route.params.id }}</h1></v-col
      >
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ชื่อเมนู</th>
            <th class="text-left">จำนวน</th>
            <th class="text-left">ราคา</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="menu in menuList.menuList" :key="menu.menu_id">
            <td>{{ menu.menu_name }}</td>
            <td>#</td>
            <td>{{ menu.menu_price }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-row class="text-center">
      <v-col cols="6">รายการเมื่อ {{ menuList.time }} </v-col>
      <v-col cols="6">ราคารวม {{ menuList.totalPrice }} บาท</v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <router-link to="/orders">
          <v-btn text color="deep-purple accent-4"> Back </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'OrdersId',
  data() {
    return {
      menuList: [],
    }
  },
  computed: {},
  mounted() {
    axios
      .post('http://192.168.1.108:3000/AllOrders', {
        order_id: this.$route.params.id,
      })
      .then((res) => {
        this.menuList = res.data.data
      })
  },
  methods: {},
}
</script>

<style scoped></style>
