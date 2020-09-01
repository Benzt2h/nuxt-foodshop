import axios from 'axios'
export const state = () => ({
  menuList: [],
  menuOrder: [],
})

export const mutations = {
  menuListinit(state, menuList) {
    state.menuList = menuList
  },
  deleteOrder(state, id) {
    state.menuOrder = state.menuOrder.filter((order) => order.menu_id !== id)
  },
  addOrder(state, data) {
    const find = state.menuOrder.find((order) => order.menu_id === data.menu_id)
    if (find !== undefined) {
      find.amount++
    } else {
      data.amount = 1
      state.menuOrder.push(data)
    }
  },
  confirmOrder(state) {
    state.menuOrder = []
  },
}
export const actions = {
  menuListinit({ commit }) {
    axios.get('http://192.168.1.108:3000/getallMenuTest').then((res) => {
      commit('menuListinit', res.data.message)
    })
  },
  deleteOrder({ commit }, id) {
    commit('deleteOrder', id)
  },
  addOrder({ commit }, data) {
    commit('addOrder', data)
  },
  confirmOrder({ commit }, data) {
    commit('confirmOrder')
  },
}
