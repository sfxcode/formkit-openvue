# FormToggleSwitch

A FormKit wrapper for OpenVue's ToggleSwitch component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/toggleswitch)

## Usage
```vue
<FormKit type="formToggleSwitch" v-model="value" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formToggleSwitch', id: 'basic', name: 'basic', label: 'Basic' },
  { $formkit: 'formToggleSwitch', name: 'eu_citizen', id: 'eu', suffix: 'Are you a european citizen: ' },
  { $formkit: 'formToggleSwitch', name: 'confirmation', id: 'confirm', prefix: 'Are you sure ?', wrapperClass: 'flex items-center' },
  { $formkit: 'formToggleSwitch', name: 'readonly', label: 'readonly', readonly: true },
  { $formkit: 'formToggleSwitch', name: 'custom', label: 'custom values', trueValue: 'A', falseValue: 'B' },
]
const data = { readonly: true }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| trueValue    | any       | Value for ON state |
| falseValue   | any       | Value for OFF state |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |

See [OpenVue ToggleSwitch docs](https://openvue.dev/toggleswitch) for more details.
