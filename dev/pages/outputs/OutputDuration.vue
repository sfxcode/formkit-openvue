<script setup lang='ts'>
const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'

function prefixClicked() {
  console.error('Prefix Icon Clicked')
}

const schema
  = [
    {
      $formkit: 'formOutputDuration',
      name: 'duration1',
      label: 'Duration',
    },
    {
      $formkit: 'formOutputDuration',
      name: 'duration2',
      label: 'Another Duration',
    },
    {
      $formkit: 'formOutputDuration',
      name: 'duration3',
      label: 'Another Duration',
      iconPrefix: 'oi oi-check',
      iconPrefixTooltip: 'Duration verified',
      onIconPrefixClicked: prefixClicked,
    },
    {
      $formkit: 'formOutputDuration',
      name: 'duration3',
      label: 'Icon Right with Tooltip',
      iconSuffix: 'oi oi-clock',
      iconSuffixTooltip: 'Elapsed time',
    },

  ]

const data = { duration1: '142', duration2: '4h35m', duration3: '3:47' }
</script>

<template>
  <div class="">
    <OpenVueOutput
      header="FormOutputDuration" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
