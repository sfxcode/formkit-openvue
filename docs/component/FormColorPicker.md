# FormColorPicker

A FormKit wrapper for OpenVue's ColorPicker component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/colorpicker)

## Usage
```vue
<FormKit type="formColorPicker" v-model="color" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formColorPicker', label: 'Select Color', name: 'color' },
  { $formkit: 'formColorPicker', name: 'styled', label: 'Styled + Disabled', style: { background: 'gray' }, class: 'customClass', disabled: true },
  { $formkit: 'formColorPicker', name: 'inline', label: 'Inline - Format RGB', inline: true, format: 'rgb' },
]
const data = {}
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| defaultColor | string    | Default color |
| inline       | boolean   | Inline display |
| format       | string    | Color format |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |

See [OpenVue ColorPicker docs](https://openvue.dev/colorpicker) for more details.
