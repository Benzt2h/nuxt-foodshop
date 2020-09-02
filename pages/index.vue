<template>
  <v-container class="index" column justify-center align-center>
    <v-row class="text-center">
      <v-col cols="9">
        Food Shop
        <v-row class="text-center">
          <v-col
            v-for="menu in menuList"
            :key="menu.menu_id"
            class="menu"
            cols="6"
          >
            <Menu :menu="menu" @addOrder="addOrder" />
          </v-col>
        </v-row>
      </v-col>
      <Calculator />
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Menu from '../components/Menu.vue'
import Calculator from '../components/Calculators.vue'
export default {
  name: 'Index',
  components: {
    Menu,
    Calculator,
  },
  computed: {
    ...mapState(['menuList']),
  },
  mounted() {
    this.menuListinit()
  },
  methods: {
    ...mapActions(['menuListinit', 'addOrder']),
  },
}
</script>
