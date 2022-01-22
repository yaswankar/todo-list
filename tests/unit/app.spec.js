import { shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue';
import List from '@/components/List.vue';

describe('App.vue', () => {
  const wrapper = shallowMount(App);
  it('renders main div', () => {
    expect(wrapper.contains('#app')).toBe(true);
  })
  it('Rendering header', () => {
    expect(wrapper.contains('#app h1')).toBe(true);
  })
  it('Rendering Input section elements', () => {
    expect(wrapper.contains('.inputSection')).toBe(true);
    expect(wrapper.contains('.inputSection input')).toBe(true);
    expect(wrapper.contains('.inputSection button')).toBe(true);
    const btnWrapper = wrapper.find('.add-btn');
    expect(btnWrapper.text()).toBe('ADD');
  })
  it('Renders List', () => {
    expect(wrapper.contains(List)).toBe(true);
  })
})
