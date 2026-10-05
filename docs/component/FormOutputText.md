# FormOutputText

A FormKit wrapper for OpenVue's OutputText component.

[Live Example on Website](https://formkit-openvue.netlify.app/outputs/outputtext)

## Usage
```vue
<FormKit type="formOutputText" v-model="text" />
```

### Object-based Example
```vue
<script setup>
function prefixClicked() {
  console.error('Prefix Icon Clicked')
}
function suffixClicked() {
  console.error('Suffix Icon Clicked')
}
const schema = [
  { $formkit: 'formOutputText', name: 'name', label: 'Basic' },
  { $formkit: 'formOutputText', name: 'toTranslate', isTranslationKey: true, label: 'Translated' },
  { $formkit: 'formOutputText', name: 'html', label: 'HTML as Text (Default)' },
  { $formkit: 'formOutputText', name: 'html', html: true, label: 'HTML Output (v-html)', help: 'Only use on trusted content or sanitize after input !' },
  { $formkit: 'formOutputText', id: 'icon', name: 'iconLeft', label: 'Icon Left', iconPrefix: 'oi oi-check', onIconPrefixClicked: prefixClicked },
  { $formkit: 'formOutputText', name: 'iconRight', label: 'Icon Right', iconSuffix: 'oi oi-check text-yellow-500', onIconSuffixClicked: suffixClicked },
]
const data = { name: 'Harry Potter', toTranslate: 'sample', iconLeft: 'Some Text ...', iconRight: 'Another Text ...', html: '<b style="color: gold">Bold Hello World</b>' }
</script>

<template>
  <FormKit :schema="schema" :data="data" />
</template>
```

## Props
| Name         | Type      | Description |
|--------------|-----------|-------------|
| html         | boolean   | Render as HTML (v-html) |
| isTranslationKey | boolean | Use i18n translation |
| iconPrefix   | string    | Icon for prefix |
| iconSuffix   | string    | Icon for suffix |
| prefix       | string    | Prefix text |
| suffix       | string    | Suffix text |
| ...          | ...       | See FormOutputText source for all props |

See [FormOutputText source](https://github.com/sfxcode/formkit-openvue/tree/main/src/components/FormOutputText.vue) for more details.
