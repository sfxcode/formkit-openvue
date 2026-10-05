# FormRating

A FormKit wrapper for OpenVue's Rating component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/rating)

## Usage
```vue
<FormKit type="formRating" v-model="rating" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formRating', label: 'Select Rating', name: 'rating' },
  { $formkit: 'formRating', label: 'Select Rating', name: 'ratingDisabled', value: 3, disabled: true },
  { $formkit: 'formRating', label: 'Select Rating', name: 'ratingCancel', value: 7, stars: 10, cancel: true },
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
| stars        | number    | Number of stars |
| cancel       | boolean   | Show cancel icon |
| onIcon       | string    | Icon for selected star |
| offIcon      | string    | Icon for unselected star |
| cancelIcon   | string    | Icon for cancel |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |

See [OpenVue Rating docs](https://openvue.dev/rating) for more details.
