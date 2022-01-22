import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";

describe("List.vue", () => {
    const wrapper = shallowMount(List);
    it('Rendering List div', () => {
        expect(wrapper.contains('.list')).toBe(true);
    })
})