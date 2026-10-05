<script setup lang='ts'>
const formAttributes = 'placeholder, mask, slotChar, autoClear, unmask'
const schema
  = [
    {
      $formkit: 'formInputMask',
      name: 'myInputMask',
      label: 'Input Mask',
      validation: 'required',
      validationVisibility: 'live',
      mask: '99-999999',
      placeholder: '##-######',
    },
    {
      $formkit: 'formInputMask',
      name: 'custom',
      label: 'Input Mask',
      mask: '(999) 999-9999',
      iconPrefix: 'oi oi-check',
      iconSuffix: 'oi oi-check',
    },
    {
      $formkit: 'formInputMask',
      name: 'phone',
      label: 'Phone',
      mask: '+1 (999) 999-9999',
      placeholder: '+1 (###) ###-####',
      validation: 'required',
      validationVisibility: 'live',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormInputMask" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
