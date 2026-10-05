<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'min, max, step, size, strokeWidth, showValue, valueColor, rangeColor, textColor, valueTemplate'

const schema
  = [
    {
      $formkit: 'formKnob',
      name: 'knob',
      label: 'Use Knob',
      value: 50,
      validation: 'min:20|max:80',
    },
    {
      $formkit: 'formKnob',
      name: 'custom',
      label: 'Customized Knob',
      min: 42,
      max: 98,
      step: 4,
      value: 58,
      showValue: false,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormKnob" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
