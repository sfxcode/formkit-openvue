# FormOutputReference

A FormKit wrapper for OpenVue's OutputReference component.

[Live Example on Website](https://formkit-openvue.netlify.app/outputs/outputreference)

## Usage
```vue
<FormKit type="formOutputReference" v-model="reference" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formOutputReference', name: 'externalId', label: 'External Link', reference: 'https://github.com/sfxcode/{{value}}' },
  { $formkit: 'formOutputReference', name: 'externalValue', label: 'External Link with custom title', title: 'Show on GitHub', reference: 'https://github.com/sfxcode/{{valueNameNotImportant}}' },
  { $formkit: 'formOutputReference', name: 'internalLink', label: 'Internal Link', internal: true, reference: '/outputs/{{value}}' },
  { $formkit: 'formOutputReference', name: 'internalLink', label: 'Internal Link with custom title', internal: true, title: 'Show: {{value}}', reference: '/outputs/{{value}}' },
]
const data = { externalId: 42, externalValue: 'formkit-openvue', internalLink: 'outputLink' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| reference    | string    | Reference URL or path |
| title        | string    | Link title |
| internal     | boolean   | Use internal router link |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See FormOutputReference source for all props |

See [FormOutputReference source](https://github.com/sfxcode/formkit-openvue/tree/main/src/components/FormOutputReference.vue) for more details.
