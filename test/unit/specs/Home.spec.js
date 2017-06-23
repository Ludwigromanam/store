import Vue from 'vue'
import store from '@/store'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should render initial state', () => {
    const Constructor = Vue.extend({ ...Home, store })
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome!')
  })
})
