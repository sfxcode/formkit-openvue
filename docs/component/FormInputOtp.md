# FormInputOtp

A FormKit wrapper for OpenVue's InputOtp component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/inputotp)

## Usage
```vue
<FormKit type="formInputOtp" v-model="otp" length="6" />
```

### Object-based Example
```vue
<script setup>
const schema = [
  { $formkit: 'formInputOtp', name: 'firstInput', label: 'Input OTP', length: 6, integerOnly: true, mask: true, variant: 'outlined' },
  { $formkit: 'formInputOtp', name: 'secondInput', label: 'Input OTP', length: 3 },
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
| length       | number    | Number of OTP digits |
| integerOnly  | boolean   | Only allow integer input |
| mask         | boolean   | Mask input |
| variant      | string    | Visual variant |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| size         | string    | Input size |

See [OpenVue InputOtp docs](https://openvue.dev/inputotp) for more details.
