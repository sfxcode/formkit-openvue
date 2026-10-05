<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'min, max, step, range, orientation'

const schema
  = [
    {
      $formkit: 'formSlider',
      name: 'slider',
      label: 'Use Slider',
      class: 'mt-2 w-72',
      min: 5,
      max: 100,
      step: 5,
      value: 10,
      validation: 'min:20|max:80',
    },
    {
      $formkit: 'formSlider',
      name: 'sliderVertical',
      label: 'Use Slider',
      min: 1,
      max: 10,
      value: 4,
      orientation: 'vertical',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormSlider" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
