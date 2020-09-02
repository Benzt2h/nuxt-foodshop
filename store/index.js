import axios from 'axios'
export const state = () => ({
  menuList: [],
  menuOrder: [],
  orders: [],
})

export const mutations = {
  menuListinit(state, menuList) {
    state.menuList = menuList
  },
  orderInit(state, orders) {
    state.orders = orders
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
  async menuListinit({ commit }) {
    await axios.get('http://192.168.1.108:3001/getallMenuTest').then((res) => {
      commit('menuListinit', res.data.message)
    })
  },
  async menuAdd({ commit, dispatch }, data) {
    await axios.post('http://192.168.1.108:3001/addMenuTest', data).then(() => {
      dispatch('menuListinit')
    })
  },
  async menuEdit({ commit, dispatch }, data) {
    await axios.post('http://192.168.1.108:3001/editMenu', data).then(() => {
      dispatch('menuListinit')
    })
  },
  async menuDelete({ commit, dispatch }, data) {
    await axios.post('http://192.168.1.108:3001/deleteMenu', data).then(() => {
      dispatch('menuListinit')
    })
  },
  deleteOrder({ commit }, id) {
    commit('deleteOrder', id)
  },
  addOrder({ commit }, data) {
    commit('addOrder', data)
  },
  async confirmOrder({ state, commit }, price) {
    const conOrder = {
      order: [
        {
          sumPrice: price,
        },
      ],
      menuList: state.menuOrder,
    }
    await axios.post('http://192.168.1.108:3001/addOn', conOrder).then(() => {
      commit('confirmOrder')
    })
  },
  async orderInit({ commit }) {
    await axios.get('http://192.168.1.108:3001/getAllOrders').then((res) => {
      commit('orderInit', res.data.data)
    })
  },
  async orderDelete({ commit, dispatch }, id) {
    await axios
      .post('http://192.168.1.108:3001/deleteOrder', {
        order_id: id,
      })
      .then(() => {
        dispatch('orderInit')
      })
  },
}
