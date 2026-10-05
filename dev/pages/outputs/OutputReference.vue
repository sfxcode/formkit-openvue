<script setup lang='ts'>
const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'

const schema
  = [
    {
      $formkit: 'formOutputReference',
      name: 'externalId',
      label: 'External Link',
      reference: 'https://github.com/sfxcode/{{value}}',
    },
    {
      $formkit: 'formOutputReference',
      name: 'externalValue',
      label: 'External Link with custom title',
      title: 'Show on GitHub',
      reference: 'https://github.com/sfxcode/{{valueNameNotImportant}}',
    },
    {
      $formkit: 'formOutputReference',
      name: 'internalLink',
      label: 'Internal Link',
      internal: true,
      reference: '/outputs/{{value}}',
    },
    {
      $formkit: 'formOutputReference',
      name: 'internalLink',
      label: 'Internal Link with custom title',
      internal: true,
      title: 'Show: {{value}}',
      reference: '/outputs/{{value}}',
    },
    {
      $formkit: 'formOutputReference',
      name: 'externalId',
      label: 'Icon Tooltips',
      help: 'Hover the icons to see the tooltips',
      reference: 'https://github.com/sfxcode/{{value}}',
      iconPrefix: 'oi oi-github',
      iconPrefixTooltip: 'View on GitHub',
      iconSuffix: 'oi oi-arrow-up-right',
      iconSuffixTooltip: 'Opens externally',
    },

  ]

const data = { externalId: 42, externalValue: 'formkit-openvue', internalLink: 'outputLink' }
</script>

<template>
  <div class="">
    <OpenVueOutput
      header="FormOutputReference" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
