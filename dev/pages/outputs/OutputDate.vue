<script setup lang='ts'>
const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'

const schema
  = [
    {
      $formkit: 'formOutputDate',
      name: 'date1',
      label: 'Basic',
    },
    {
      $formkit: 'formOutputDate',
      id: 'date2',
      name: 'date2',
      label: 'Icon Left',
      help: '',
      iconPrefix: 'oi oi-check',
      iconPrefixTooltip: 'Verified date',
    },
    {
      $formkit: 'formOutputDate',
      name: 'date3',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      iconSuffix: 'oi oi-check text-yellow-500',
      iconSuffixTooltip: 'Confirmed',
    },

  ]

const data = { date1: new Date(), date2: new Date(), date3: new Date() }
</script>

<template>
  <div class="">
    <OpenVueOutput
      header="FormOutputDate" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
