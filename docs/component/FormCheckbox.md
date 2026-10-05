# FormCheckbox

A FormKit wrapper for OpenVue's Checkbox component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/checkbox)

## Usage
```vue
<FormKit type="formCheckbox" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formCheckbox', id: 'basic', name: 'basic', label: 'Basic' },
  { $formkit: 'formCheckbox', id: 'eu', prefix: 'Are you a european citizen: ' },
  { $formkit: 'formCheckbox', id: 'taxes', suffix: 'Taxes includes ' },
  { $formkit: 'formCheckbox', name: 'readonly', label: 'readonly', readonly: true },
  { $formkit: 'formCheckbox', name: 'indeterminate', label: 'indeterminate', indeterminate: true },
  { $formkit: 'formCheckbox', name: 'custom', label: 'custom values', trueValue: 'A', falseValue: 'B' },
]
const data = { readonly: true }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
// ...existing code...
See [OpenVue Checkbox docs](https://openvue.dev/checkbox) for more details.
