<script setup lang='ts'>
const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'

const schema
  = [
    {
      $formkit: 'formOutputLink',
      name: 'link1',
      label: 'External Link',
    },
    {
      $formkit: 'formOutputLink',
      name: 'link2',
      label: 'Ensure protocol and use custom title',
      title: 'Click me',
    },
    {
      $formkit: 'formOutputLink',
      name: 'link1',
      label: 'Icon Tooltips',
      help: 'Hover the icons to see the tooltips',
      iconPrefix: 'oi oi-external-link',
      iconPrefixTooltip: 'Opens in a new tab',
      iconSuffix: 'oi oi-info-circle',
      iconSuffixTooltip: 'External resource',
    },

  ]

const data = { link1: 'https://github.com/sfxcode', link2: 'sfxcode.github.io/formkit-openvue' }
</script>

<template>
  <div class="">
    <OpenVueOutput
      header="FormOutputLink" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
