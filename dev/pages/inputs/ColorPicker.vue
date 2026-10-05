<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'placeholder, separator, allowDuplicate, max, addOnBlur'

const schema
  = [
    {
      $formkit: 'formColorPicker',
      label: 'Select Color',
      name: 'color',
    },
    {
      $formkit: 'formColorPicker',
      name: 'styled',
      label: 'Styled + Disabled',
      style: { background: 'gray' },
      class: 'customClass',
      disabled: true,
    },
    {
      $formkit: 'formColorPicker',
      name: 'inline',
      label: 'Inline - Format RGB',
      inline: true,
      format: 'rgb',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormColorPicker" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
