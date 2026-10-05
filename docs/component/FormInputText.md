# FormInputText

A FormKit wrapper for OpenVue's InputText component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/inputtext)

## Usage
```vue
<FormKit type="formInputText" v-model="text" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formInputText', name: 'name', label: 'Basic', validation: 'required', help: 'Some Help Text' },
  { $formkit: 'formInputText', name: 'telephone', placeholder: 'telephone', help: 'Input Type: tel', label: 'Telephone', inputType: 'tel' },
  { $formkit: 'formInputText', id: 'icon', name: 'iconLeft', label: 'Icon Left', placeholder: 'icon', iconPrefix: 'oi oi-check' },
  { $formkit: 'formInputText', name: 'iconRight', label: 'Icon Right (Disabled) - smize: small', help: 'Right Icon Demo', iconSuffix: 'oi oi-check', disabled: true, size: 'small' },
]
const data = { name: 'Harry Potter', iconLeft: 'Some Text ...', iconRight: 'Another Text ...' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| size         | string    | Input size |
| inputType    | string    | Input type (e.g. text, tel) |
| placeholder  | string    | Placeholder text |

See [OpenVue InputText docs](https://openvue.dev/inputtext) for more details.
