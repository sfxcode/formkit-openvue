<script setup lang='ts'>
const formAttributes = 'length, integerOnly, mask, variant'
const schema
  = [
    {
      $formkit: 'formInputOtp',
      name: 'firstInput',
      label: 'Input OTP',
      length: 6,
      integerOnly: true,
      mask: true,
      variant: 'outlined',
    },
    {
      $formkit: 'formInputOtp',
      name: 'secondInput',
      label: 'Input OTP',
      length: 3,
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
