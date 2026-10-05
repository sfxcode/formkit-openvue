<script setup lang='ts'>
const formAttributes = 'placeholder, useGrouping, minFractionDigits, maxFractionDigits, locale, mode, currency, prefix, suffix, showButtons, buttonLayout, step'
const schema
  = [
    {
      $formkit: 'formInputNumber',
      name: 'firstNumber',
      label: 'Input Number',
      value: 1234,
      validation: 'max:10000',
      useGrouping: true,
      minFractionDigits: 2,
    },
    {
      $formkit: 'formInputNumber',
      name: 'secondNumber',
      label: 'Input Number',
      value: 999,
      validation: 'min:900',
      useGrouping: false,
      minFractionDigits: 0,
    },
    {
      $formkit: 'formInputNumber',
      name: 'fixedNumber',
      label: 'Input Number',
      value: 1234,
      class: 'customClass',
      style: { background: 'gray' },
      readonly: true,
    },
    // Case with Min Value
    {
      $formkit: 'formInputNumber',
      name: 'numberInputWithMinNumber',
      label: 'Number Input with Min Value',
      min: 10,
    },
    // Extensive case
    {
      $formkit: 'formInputNumber',
      name: 'customizedInputNumber',
      label: 'Customized Input Number',
      placeholder: 'Enter currency',
      useGrouping: true,
      minFractionDigits: 2,
      maxFractionDigits: 4, // Maximum four decimal places
      mode: 'currency', // Switch mode to currency
      currency: 'USD', // Currency in dollars
      locale: 'en-US', // Locale set to US
      showButtons: true, // Show increment/decrement buttons
      buttonLayout: 'horizontal', // Layout for the buttons
      step: 0.01, // Increment by 0.01
    },

  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormInputNumber" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
