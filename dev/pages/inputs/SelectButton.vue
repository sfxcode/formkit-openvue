<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'options, optionLabel, optionValue, optionDisabled, multiple, unselectable, dataKey'

const selectOptions = [
  { label: 'yes', value: 'YES' },
  { label: 'no', value: 'NO' },
  { label: 'maybe', value: 'MAYBE' },
]

const selectOptions2 = [
  { label: 'Email', value: 'mail' },
  { label: 'Phone', value: 'phone' },
  { label: 'Chat', value: 'chat' },
]

const schema
  = [
    {
      $formkit: 'formSelectButton',
      label: 'SelectButton',
      name: 'selectButton',
      options: selectOptions,
      optionLabel: 'label',
      optionValue: 'value',
      value: 'MAYBE',
      unselectable: false,
    },
    {
      $formkit: 'formSelectButton',
      label: 'Contact options',
      name: 'selectButtonMultiple',
      optionLabel: 'label',
      optionValue: 'value',
      options: selectOptions2,
      multiple: true,
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="SelectButton" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>
