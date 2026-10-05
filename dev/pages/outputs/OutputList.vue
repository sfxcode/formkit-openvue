<script setup lang='ts'>
import { useFormKitSchema } from 'my-library'

const formAttributes = ''
const customAttributes = 'iconPrefix, prefix, suffix, iconSuffix, iconPrefixTooltip, iconSuffixTooltip'
const { addElement } = useFormKitSchema()

function convertValues(value: string[]): string[] {
  return value.map(item => item.toUpperCase())
}

function convertValuesCharCount(value: string[]): string[] {
  return value.map(item => `${item} (${item.length})`)
}

function convertValuesSortedReverse(value: string[]): string[] {
  return value.sort((a, b) => a.localeCompare(b)).reverse()
}

const schema
  = [
    addElement('h3', ['Default (listStyle: span)']),

    {
      $formkit: 'formOutputList',
      name: 'list1',
      label: 'Default Divider',
    },
    {
      $formkit: 'formOutputList',
      name: 'list1',
      label: 'Custom Divider',
      divider: ' ',
    },
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Custom Divider with Prefix Icon',
      iconPrefix: 'oi oi-list',
      divider: ' - ',
    },
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Icon Tooltips',
      help: 'Hover the icons to see the tooltips',
      iconPrefix: 'oi oi-list',
      iconPrefixTooltip: 'Item list',
      iconSuffix: 'oi oi-info-circle',
      iconSuffixTooltip: 'Additional information',
    },
    addElement('h3', ['Converter']),

    {
      $formkit: 'formOutputList',
      name: 'list1',
      label: 'Converter Function',
      convertValue: convertValues,
      divider: ' - ',
    },
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Converter Function - Char Count',
      convertValue: convertValuesCharCount,
    },
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Converter Function - Sorted Reverse',
      convertValue: convertValuesSortedReverse,
    },
    addElement('h3', ['Chips']),
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Use Chip Item Class',
      itemClass: 'p-chip-item',
      divider: ' ',
    },
    addElement('h3', ['List Styles']),
    {
      $formkit: 'formOutputList',
      name: 'list1',
      label: 'Use listStyle: span',
      listStyle: 'span',
    },
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Use listStyle: div',
      listStyle: 'div',
    },
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Use listStyle: ul',
      listStyle: 'ul',
    },
    {
      $formkit: 'formOutputList',
      name: 'list2',
      label: 'Use listStyle: ol',
      listStyle: 'ol',
    },

  ]

const data = { list1: ['Hello', 'World'], list2: ['FormKit', 'meets', 'OpenVue'] }
</script>

<template>
  <div class="list">
    <OpenVueOutput
      header="FormOutputList" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>
.list .p-formkit-data-view .formkit-form .formkit-outer {
  padding-bottom: 1rem;
}
</style>
