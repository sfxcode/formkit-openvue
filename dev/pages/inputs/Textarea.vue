<script setup lang='ts'>
const formAttributes = 'placeholder, rows'
const schema
  = [
    {
      $formkit: 'formTextarea',
      id: 'basic',
      name: 'name',
      placeholder: 'Basic',
      label: 'Basic',
      help: 'Required.',
      validation: 'required',
    },
    {
      $formkit: 'formTextarea',
      name: 'name',
      label: '5 Rows',
      rows: 5,
      autoResize: true,
    },
    {
      $formkit: 'formTextarea',
      name: 'name',
      placeholder: 'Styled',
      style: { background: 'gray' },
      class: 'customClass',
    },
    {
      $formkit: 'formTextarea',
      name: 'name',
      placeholder: 'Read Only',
      readonly: true,
    },

  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormTextarea" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
