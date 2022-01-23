import { mount } from "@vue/test-utils";
import List from "@/components/List.vue";

describe("List.vue", () => {
    const wrapper = mount(List, {
        propsData: {
            items: []
        }
    });
    it('Rendering List div', () => {
        expect(wrapper.contains('.list')).toBe(true);
    })
    it('Renders table and header row', () => {
        expect(wrapper.contains('table')).toBe(true);
        expect(wrapper.contains('table thead')).toBe(true);
    })
    it('Checking props', () => {
        expect(Array.isArray(wrapper.props().items)).toBe(true);
    })
})