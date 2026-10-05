# FormOutputDate

A FormKit wrapper for OpenVue's OutputDate component.

[Live Example on Website](https://formkit-openvue.netlify.app/outputs/outputdate)

## Usage
```vue
<FormKit type="formOutputDate" v-model="date" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formOutputDate', name: 'date1', label: 'Basic' },
  { $formkit: 'formOutputDate', id: 'date2', name: 'date2', label: 'Icon Left', iconPrefix: 'oi oi-check' },
  { $formkit: 'formOutputDate', name: 'date3', label: 'Icon Right', help: 'Right Icon Demo', iconSuffix: 'oi oi-check text-yellow-500' },
]
const data = { date1: new Date(), date2: new Date(), date3: new Date() }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See FormOutputDate source for all props |

See [FormOutputDate source](https://github.com/sfxcode/formkit-openvue/tree/main/src/components/FormOutputDate.vue) for more details.
