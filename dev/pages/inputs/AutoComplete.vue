<script setup lang='ts'>
const formAttributes = 'placeholder, multiple, typeahead, optionLabel, size, minLength, fluid'

const list = ['Hello', 'Hero', 'House', 'World']

function search(query: string) {
  return [...list.filter(i => i.toLowerCase().includes(query.toLowerCase())), query]
}

async function asyncSearch(query: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [...list.filter(i => i.toLowerCase().includes(query.toLowerCase())), query]
}

const userList = [
  { id: '1', name: 'Tom', value: '123' },
  { id: '2', name: 'Tim', value: '124' },
]

const schema
  = [
    {
      $formkit: 'formAutoComplete',
      id: 'basic',
      name: 'basic',
      complete: search,
      dropdown: true,
      label: 'Basic AutoComplete - Use [h]ello',
    },
    {
      $formkit: 'formAutoComplete',
      id: 'async',
      name: 'async',
      complete: asyncSearch,
      dropdown: true,
      label: 'Async AutoComplete - Use [he]llo',
      minLength: 2,
      placeholder: 'Type at least 2 characters',
      fluid: true,
    },
    {
      $formkit: 'formAutoComplete',
      id: 'basic',
      name: 'id',
      dropdown: true,
      label: 'Object AutoComplete - Use [t]om',
      options: userList,
      optionLabel: 'name',
    },
    {
      $formkit: 'formAutoComplete',
      id: 'chips',
      name: 'chips',
      multiple: true,
      typeahead: false,
      label: 'Chips Replacement',
    },
    {
      $formkit: 'formAutoComplete',
      id: 'chips2',
      name: 'chips2',
      multiple: true,
      typeahead: false,
      label: 'Chips - Paste separated values by comma or semicolon',
      separators: [',', ';'],
    },
  ]

const data = { id: { id: '1', name: 'Tom', value: '123' } }
</script>

<template>
  <div>
    <OpenVueInput
      header="AutoComplete" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
