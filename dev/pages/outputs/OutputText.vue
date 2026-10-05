<script setup lang='ts'>
const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip, maxLength'

function prefixClicked() {
  console.error('Prefix Icon Clicked')
}

function suffixClicked() {
  console.error('Suffix Icon Clicked')
}

function toUpper(value: string) {
  return value.toUpperCase()
}
const schema
  = [
    {
      $formkit: 'formOutputText',
      name: 'name',
      label: 'Basic',
    },
    {
      $formkit: 'formOutputText',
      name: 'toTranslate',
      isTranslationKey: true,
      label: 'Translated',
    },
    {
      $formkit: 'formOutputText',
      name: 'html',
      label: 'HTML as Text (Default)',
    },
    {
      $formkit: 'formOutputText',
      name: 'html',
      html: true,
      label: 'HTML Output (v-html)',
      help: 'Only use on trusted content or sanitize after input !',
    },
    {
      $formkit: 'formOutputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      iconPrefix: 'oi oi-check',
      iconPrefixTooltip: 'Verified',
      onIconPrefixClicked: prefixClicked,
    },
    {
      $formkit: 'formOutputText',
      name: 'iconRight',
      label: 'Icon Right',
      help: 'Right Icon Demo',
      iconSuffix: 'oi oi-check text-yellow-500',
      iconSuffixTooltip: 'All good',
      onIconSuffixClicked: suffixClicked,
    },
    {
      $formkit: 'formOutputText',
      name: 'name',
      label: 'Convert to Uppercase',
      convertValue: toUpper,
    },
    {
      $formkit: 'formOutputText',
      name: 'longText',
      label: 'Max Length (20)',
      help: 'Text will be truncated with "..." if it exceeds maxLength',
      maxLength: 20,
    },
    {
      $formkit: 'formOutputText',
      name: 'longText',
      label: 'Max Length (50)',
      maxLength: 50,
    },
    {
      $formkit: 'formOutputText',
      name: 'longText',
      label: 'No Max Length',
      help: 'Full text without truncation',
    },

  ]

const data = { name: 'Harry Potter', toTranslate: 'sample', iconLeft: 'Some Text ...', iconRight: 'Another Text ...', html: '<b style="color: gold">Bold Hello World</b>', longText: 'This is a very long text that will be truncated when maxLength is applied to demonstrate the functionality.' }
</script>

<template>
  <div class="">
    <OpenVueOutput
      header="FormOutputText" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
