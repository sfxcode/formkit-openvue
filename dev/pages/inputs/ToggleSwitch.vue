<script setup lang='ts'>
const formAttributes = 'trueValue, falseValue'
const customAttributes = 'prefix, suffix'

const schema
  = [
    {
      $formkit: 'formToggleSwitch',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
    },
    {
      $formkit: 'formToggleSwitch',
      name: 'eu_citizen',
      id: 'eu',
      suffix: 'Are you a european citizen: ',
    },
    {
      $formkit: 'formToggleSwitch',
      name: 'confirmation',
      id: 'confirm',
      prefix: 'Are you sure ?',
      wrapperClass: 'flex items-center',
    },
    {
      $formkit: 'formToggleSwitch',
      name: 'readonly',
      label: 'readonly',
      readonly: true,
    },
    {
      $formkit: 'formToggleSwitch',
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
      header="FormToggleSwitch" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
