# FormOutputLink

A FormKit wrapper for OpenVue's OutputLink component.

[Live Example on Website](https://formkit-openvue.netlify.app/outputs/outputlink)

## Usage
```vue
<FormKit type="formOutputLink" v-model="link" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formOutputLink', name: 'link1', label: 'External Link' },
  { $formkit: 'formOutputLink', name: 'link2', label: 'Ensure protocol and use custom title', title: 'Click me' },
]
const data = { link1: 'https://github.com/sfxcode', link2: 'sfxcode.github.io/formkit-openvue' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| title        | string    | Link title |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See FormOutputLink source for all props |

See [FormOutputLink source](https://github.com/sfxcode/formkit-openvue/tree/main/src/components/FormOutputLink.vue) for more details.
