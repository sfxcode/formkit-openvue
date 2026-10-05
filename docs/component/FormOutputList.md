# FormOutputList

A FormKit wrapper for OpenVue's OutputList component.

[Live Example on Website](https://formkit-openvue.netlify.app/outputs/outputlist)

## Usage
```vue
<FormKit type="formOutputList" v-model="list" />
```

### Object-based Example
```vue
<script setup>
function convertValues(value) {
  return value.map(item => item.toUpperCase())
}
function convertValuesCharCount(value) {
  return value.map(item => `${item} (${item.length})`)
}
function convertValuesSortedReverse(value) {
  return value.sort((a, b) => a.localeCompare(b)).reverse()
}
const schema = [
  { $formkit: 'formOutputList', name: 'list1', label: 'Default Divider' },
  { $formkit: 'formOutputList', name: 'list1', label: 'Custom Divider', divider: ' ' },
  { $formkit: 'formOutputList', name: 'list2', label: 'Custom Divider with Prefix Icon', iconPrefix: 'oi oi-list', divider: ' - ' },
  { $formkit: 'formOutputList', name: 'list1', label: 'Converter Function', convertValue: convertValues, divider: ' - ' },
  { $formkit: 'formOutputList', name: 'list2', label: 'Converter Function - Char Count', convertValue: convertValuesCharCount },
  { $formkit: 'formOutputList', name: 'list2', label: 'Converter Function - Sorted Reverse', convertValue: convertValuesSortedReverse },
  { $formkit: 'formOutputList', name: 'list2', label: 'Use Chip Item Class', itemClass: 'p-chip-item', divider: ' ' },
  { $formkit: 'formOutputList', name: 'list1', label: 'Use listStyle: span', listStyle: 'span' },
  { $formkit: 'formOutputList', name: 'list2', label: 'Use listStyle: div', listStyle: 'div' },
  { $formkit: 'formOutputList', name: 'list2', label: 'Use listStyle: ul', listStyle: 'ul' },
  { $formkit: 'formOutputList', name: 'list2', label: 'Use listStyle: ol', listStyle: 'ol' },
]
const data = { list1: ['Hello', 'World'], list2: ['FormKit', 'meets', 'OpenVue'] }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| divider      | string    | Divider between items |
| convertValue | function  | Function to convert values |
| listStyle    | string    | List style (span, div, ul, ol) |
| itemClass    | string    | Class for list items |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See FormOutputList source for all props |

See [FormOutputList source](https://github.com/sfxcode/formkit-openvue/tree/main/src/components/FormOutputList.vue) for more details.
