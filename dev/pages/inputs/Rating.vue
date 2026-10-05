<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'stars, cancel, onIcon, officon, cancelIcon'

const schema
  = [
    {
      $formkit: 'formRating',
      label: 'Select Rating',
      name: 'rating',
    },
    {
      $formkit: 'formRating',
      label: 'Select Rating',
      name: 'ratingDisabled',
      value: 3,
      disabled: true,
    },
    {
      $formkit: 'formRating',
      label: 'Select Rating',
      name: 'ratingCancel',
      value: 7,
      stars: 10,
      cancel: true,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormRating" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
