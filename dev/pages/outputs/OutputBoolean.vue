<script setup lang='ts'>
const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'

const schema
  = [
    {
      $formkit: 'formOutputBoolean',
      name: 'trueValue',
      label: 'Default',
    },
    {
      $formkit: 'formOutputBoolean',
      name: 'trueValue',
      prefix: 'Boolean Value:',
    },
    {
      $formkit: 'formOutputBoolean',
      name: 'falseValue',
      label: 'False Example',
    },

    {
      $formkit: 'formOutputBoolean',
      name: 'trueValue',
      label: 'True with custom Text',
      trueValue: 'Sure',
    },
    {
      $formkit: 'formOutputBoolean',
      name: 'falseValue',
      label: 'False with custom Text',
      falseValue: 'Never',
    },
    {
      $formkit: 'formOutputBoolean',
      name: 'trueValue',
      label: 'Conditional true - only Icon',
      if: '$trueValue',
      trueValue: '',
      iconSuffix: 'oi oi-check',
    },
    {
      $formkit: 'formOutputBoolean',
      name: 'falseValue',
      label: 'Conditional false - only Icon',
      if: '!$falseValue',
      falseValue: '',
      iconSuffix: 'oi oi-minus',
    },
    {
      $formkit: 'formOutputBoolean',
      name: 'trueValue',
      label: 'Icon Tooltips',
      help: 'Hover the icons to see the tooltips',
      iconPrefix: 'oi oi-info-circle',
      iconPrefixTooltip: 'Status information',
      iconSuffix: 'oi oi-check',
      iconSuffixTooltip: 'Confirmed',
    },
  ]

const data = { trueValue: true, falseValue: false }
</script>

<template>
  <div class="">
    <OpenVueOutput
      header="FormOutputBoolean" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
