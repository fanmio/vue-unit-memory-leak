import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// xdescribe('HelloWorld.vue', () => {
//   for (let i = 0; i < 10000; i++) {
//     it(`renders props.msg when passed: ${i}`, () => {
//       const msg = 'new message'
//       const wrapper = shallowMount(HelloWorld, {
//         propsData: { msg }
//       })
//       console.log('heapUsed', process.memoryUsage().heapUsed)
//       expect(wrapper.text()).to.include(msg)
//     })
//   }
// })

describe('HelloWorld.vue', () => {
  const msg = 'new message'
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
  })

  for (let i = 0; i < 10000; i++) {
    it(`renders props.msg when passed: ${i}`, () => {
      console.log('heapUsed', process.memoryUsage().heapUsed)
      expect(wrapper.text()).to.include(msg)
    })
  }
})
