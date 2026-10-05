# FormTreeSelect

A FormKit wrapper for OpenVue's TreeSelect component.

[Live Example on Website](https://formkit-openvue.netlify.app/inputs/treeselect)

## Usage
```vue
<FormKit type="formTreeSelect" :options="options" v-model="selected" />
```

### Object-based Example
```vue
<script setup>
const options = [
  {
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'oi oi-fw pi-inbox',
    children: [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'oi oi-fw pi-cog',
        children: [
          { key: '0-0-0', label: 'Expenses.doc', icon: 'oi oi-fw pi-file', data: 'Expenses Document' },
          { key: '0-0-1', label: 'Resume.doc', icon: 'oi oi-fw pi-file', data: 'Resume Document' },
        ],
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'oi oi-fw pi-home',
        children: [
          { key: '0-1-0', label: 'Invoices.txt', icon: 'oi oi-fw pi-file', data: 'Invoices for this month' },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'Events',
    data: 'Events Folder',
    icon: 'oi oi-fw pi-calendar',
    children: [
      { key: '1-0', label: 'Meeting', icon: 'oi oi-fw pi-calendar-plus', data: 'Meeting' },
      { key: '1-1', label: 'Product Launch', icon: 'oi oi-fw pi-calendar-plus', data: 'Product Launch' },
      { key: '1-2', label: 'Report Review', icon: 'oi oi-fw pi-calendar-plus', data: 'Report Review' },
    ],
  },
]
const schema = [
  { $formkit: 'formTreeSelect', name: 'treeSelectValue', label: 'Tree Select', selectionMode: 'multiple', options, placeholder: 'Make your selection' },
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
| options      | array     | Tree options |
| placeholder  | string    | Placeholder text |
| selectionMode| string    | Selection mode (single, multiple) |
| pt           | object    | Pass-through options |
| ptOptions    | object    | Pass-through options |
| unstyled     | boolean   | Disable default styles |
| ...          | ...       | See OpenVue docs for all props |

See [OpenVue TreeSelect docs](https://openvue.dev/treeselect) for more details.
