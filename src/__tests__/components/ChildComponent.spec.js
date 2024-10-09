import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ChildComponent.vue', () => {
  it('al hacer click en boton se envia texto', async () => {
    const wrapper = mount(ChildComponent)

    //ingreso texto
    await wrapper.find('input').setValue('texto ingresado')
    //click en boton
    await wrapper.find('button').trigger('click')
    //await wrapper.vm.$nextTick()

    expect(wrapper.emitted('enviar-texto')[0]).toEqual(['texto ingresado'])
  })
})
