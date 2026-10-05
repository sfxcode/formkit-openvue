<script setup lang='ts'>
const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'

const schema
  = [
    {
      $formkit: 'formOutputNumber',
      name: 'mumber1',
      format: 'decimal',
      label: 'Basic',
    },
    {
      $formkit: 'formOutputNumber',
      name: 'number2',
      label: 'Icon Left',
      help: '',
      iconPrefix: 'oi oi-check',
      iconPrefixTooltip: 'Verified value',
    },
    {
      $formkit: 'formOutputNumber',
      name: 'number3',
      format: 'currency',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      iconSuffix: 'oi oi-check',
      iconSuffixTooltip: 'Payment confirmed',

    },

  ]

const data = { mumber1: 12.2, number2: 42.0, number3: 20000 }
</script>

<template>
  <div class="">
    <OpenVueOutput
      header="FormOutputNumber" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
