import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/welcome-information.vue'

describe('Home.vue', () => {
  it('renders h1 tag', () => {
    const wrapper = shallowMount(Home);
    expect(
      wrapper.find("h1")
      .text()
    ).equal("===This is something for testing");
  })
})
