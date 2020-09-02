<template>
  <v-container class="menus" column justify-center align-center>
    <v-row class="text-center">
      <v-col><h1>Menu Manage</h1></v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Add Menu
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Add Menu</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newMenu.name"
                    label="Name*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newMenu.price"
                    type="number"
                    label="Price*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newMenu.picture"
                    label="Image*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="onAdd">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row>
      <v-col v-for="menu in menuList" :key="menu.menu_id" class="menu" cols="6">
        <MenuManage :menu="menu" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MenuManage from '../../components/menus/MenuManage'
export default {
  name: 'Menus',
  components: {
    MenuManage,
  },
  data() {
    return {
      dialog: false,
      newMenu: {
        name: '',
        price: null,
        picture: '',
      },
    }
  },
  computed: {
    ...mapState(['menuList']),
  },
  mounted() {
    this.menuListinit()
  },
  methods: {
    ...mapActions(['menuListinit', 'addOrder', 'menuAdd']),
    onAdd() {
      this.dialog = false
      this.newMenu.price = parseFloat(this.newMenu.price)
      this.menuAdd(this.newMenu)
    },
  },
}
</script>

<style lang="scss" scoped></style>
