# FormDatePicker

A FormKit wrapper for OpenVue's DatePicker component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/datepicker)

## Usage
```vue
<FormKit type="formDatePicker" v-model="date" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formDatePicker', id: 'basic', name: 'basic', label: 'Basic', placeholder: 'MM/DD/YYYY', validation: 'required' },
  { $formkit: 'formDatePicker', name: 'styled', label: 'Styled', style: { background: 'gray' }, class: 'customClass', showIcon: true },
  { $formkit: 'formDatePicker', name: 'icon', label: 'Custom Icon', dateFormat: 'yy-mm', showIcon: true, icon: 'oi oi-question' },
  { $formkit: 'formDatePicker', name: 'range', label: 'Date Range', selectionMode: 'range', manualInput: false },
  { $formkit: 'formDatePicker', name: 'multiple', label: 'Multiple Dates', selectionMode: 'multiple', manualInput: false },
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
| dateFormat   | string    | Date format |
| placeholder  | string    | Placeholder text |
| selectionMode| string    | Selection mode (single, range, multiple) |
| inline       | boolean   | Inline display |
| icon         | string    | Custom icon |
| showIcon     | boolean   | Show calendar icon |
| manualInput  | boolean   | Allow manual input |
| ...          | ...       | See OpenVue docs for all props |

See [OpenVue DatePicker docs](https://openvue.dev/datepicker) for more details.
