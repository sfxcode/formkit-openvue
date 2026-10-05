<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'placeholder, options, showClear, filter, optionLabel, optionValue'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]

const stringArray = ['refresh', 'hourly', 'daily']

const schema
  = [
    {
      $formkit: 'formSelect',
      name: 'selectValue',
      label: 'Cookie notice Select',
      value: 'hourly',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'formSelect',
      name: 'selectObjectByLabel',
      label: 'Select Object',
      optionLabel: 'name',
      options: cities,
    },
    {
      $formkit: 'formSelect',
      name: 'selectString',
      label: 'Simple String Array Select',
      options: stringArray,
    },
    {
      $formkit: 'formSelect',
      name: 'styled',
      label: 'Styled',
      value: 'hourly',
      style: { background: 'gray' },
      class: 'customClass',
      optionLabel: 'label',
      optionValue: 'value',
      options: [
        { label: 'Every page load', value: 'refresh' },
        { label: 'Every hour', value: 'hourly' },
        { label: 'Every day', value: 'daily' },
      ],
      disabled: true,
    },
    {
      $formkit: 'formSelect',
      name: 'custom',
      label: 'With Clear and Filter',
      showClear: true,
      filter: true,
      placeholder: 'Please select',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      validation: 'required',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormSelect" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
