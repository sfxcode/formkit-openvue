<script setup lang='ts'>
const formAttributes = 'dateFormat, showIcon, icon, .... (see documentation)'

const schema
  = [
    {
      $formkit: 'formDatePicker',
      id: 'basic',
      name: 'basic',
      label: 'Basic',
      placeholder: 'MM/DD/YYYY',
      validation: 'required',
    },
    {
      $formkit: 'formDatePicker',
      name: 'styled',
      label: 'Styled',
      style: { background: 'gray' },
      class: 'customClass',
      showIcon: true,
    },
    {
      $formkit: 'formDatePicker',
      name: 'icon',
      label: 'Custom Icon',
      dateFormat: 'yy-mm-dd',
      showIcon: true,
      icon: 'oi oi-question',
    },
    {
      $formkit: 'formDatePicker',
      name: 'range',
      label: 'Date Range - Manual Input Disabled',
      selectionMode: 'range',
      manualInput: false,
    },
    {
      $formkit: 'formDatePicker',
      name: 'multiple',
      label: 'Multiple Dates - Manual Input Disabled',
      selectionMode: 'multiple',
      manualInput: false,
    },

  ]

const data = {}
</script>

<template>
  <div>
    <OpenVueInput
      header="FormDatePicker" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
