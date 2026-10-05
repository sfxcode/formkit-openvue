<script setup lang='ts'>
const formAttributes = 'binary (dfault = true), trueValue, falseValue'
const customAttributes = 'prefix, suffix'

const schema
  = [
    {
      $formkit: 'formCheckbox',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
    },
    {
      $formkit: 'formCheckbox',
      id: 'eu',
      prefix: 'Are you a european citizen: ',
    },
    {
      $formkit: 'formCheckbox',
      id: 'taxes',
      suffix: 'Taxes includes ',
    },
    {
      $formkit: 'formCheckbox',
      name: 'readonly',
      label: 'readonly',
      readonly: true,
    },
    {
      $formkit: 'formCheckbox',
      name: 'indeterminate',
      label: 'indeterminate',
      indeterminate: true,
    },
    {
      $formkit: 'formCheckbox',
      name: 'custom',
      label: 'custom values',
      trueValue: 'A',
      falseValue: 'B',
    },
  ]

const data = { readonly: true }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormCheckbox" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
