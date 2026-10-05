<script setup lang='ts'>
const formAttributes = 'options, optionLabel, optionValue'
const customAttributes = 'optionClass'

const schema
  = [
    {
      $formkit: 'formRadioButton',
      id: 'basic',
      label: 'Select',
      name: 'basic',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Every hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
    },
    {
      $formkit: 'formRadioButton',
      id: 'answer',
      label: 'Select Answer',
      name: 'answer',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
        { label: 'D', value: 'D' },
        { label: 'E', value: 'E' },

      ],
    },
  ]

const data = { basic: 'refresh' }
</script>

<template>
  <div>
    <OpenVueInput
      class="space-x-2 items-center"
      header="FormRadioButton" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
