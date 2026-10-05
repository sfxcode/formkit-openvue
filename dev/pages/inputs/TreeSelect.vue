<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'placeholder, options'

const options = ref([
  {
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'oi oi-fw oi-inbox',
    children: [
      {
        key: '0-0',
        label: 'Work',
        data: 'Work Folder',
        icon: 'oi oi-fw oi-cog',
        children: [
          { key: '0-0-0', label: 'Expenses.doc', icon: 'oi oi-fw oi-file', data: 'Expenses Document' },
          { key: '0-0-1', label: 'Resume.doc', icon: 'oi oi-fw oi-file', data: 'Resume Document' },
        ],
      },
      {
        key: '0-1',
        label: 'Home',
        data: 'Home Folder',
        icon: 'oi oi-fw oi-home',
        children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'oi oi-fw oi-file', data: 'Invoices for this month' }],
      },
    ],
  },
  {
    key: '1',
    label: 'Events',
    data: 'Events Folder',
    icon: 'oi oi-fw oi-calendar',
    children: [
      { key: '1-0', label: 'Meeting', icon: 'oi oi-fw oi-calendar-plus', data: 'Meeting' },
      { key: '1-1', label: 'Product Launch', icon: 'oi oi-fw oi-calendar-plus', data: 'Product Launch' },
      { key: '1-2', label: 'Report Review', icon: 'oi oi-fw oi-calendar-plus', data: 'Report Review' },
    ],
  },
])

const schema
  = [
    {
      $formkit: 'formTreeSelect',
      name: 'treeSelectValue',
      label: 'Tree Select',
      selectionMode: 'multiple',
      options,
      placeholder: 'Make your selection',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="TreeSelect" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>
