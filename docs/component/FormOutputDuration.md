# FormOutputDuration

A FormKit wrapper for OpenVue's OutputDuration component.

[Live Example on Website](https://formkit-openvue.netlify.app/outputs/outputduration)

## Usage
```vue
<FormKit type="formOutputDuration" v-model="duration" />
```

### Object-based Example
```vue
<script setup>
function prefixClicked() {
  console.error('Prefix Icon Clicked')
}
const schema = [
  { $formkit: 'formOutputDuration', name: 'duration1', label: 'Duration' },
  { $formkit: 'formOutputDuration', name: 'duration2', label: 'Another Duration' },
  { $formkit: 'formOutputDuration', name: 'duration3', label: 'Another Duration', iconPrefix: 'oi oi-check', onIconPrefixClicked: prefixClicked },
]
const data = { duration1: '142', duration2: '4h35m', duration3: '3:47' }
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
| ...          | ...       | See FormOutputDuration source for all props |

See [FormOutputDuration source](https://github.com/sfxcode/formkit-openvue/tree/main/src/components/FormOutputDuration.vue) for more details.
