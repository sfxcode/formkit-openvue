<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'placeholder, options, filter, optionLabel, optionValue'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema
  = [
    {
      $formkit: 'formMultiSelect',
      name: 'cookie_notice',
      label: 'Cookie notice MultiSelect',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'Cookie notice frequency ?',
    },
    {
      $formkit: 'formMultiSelect',
      name: 'styled',
      label: 'Styled',
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
      $formkit: 'formMultiSelect',
      name: 'custom',
      label: 'With Multiple Select and Filter',
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
      header="MultiSelect" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>
