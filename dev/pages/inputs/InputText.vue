<script setup lang='ts'>
const formAttributes = 'placeholder'
const customAttributes = 'iconPrefix, iconSuffix'

const schema
  = [
    {
      $formkit: 'formInputText',
      name: 'name',
      label: 'Basic',
      validation: 'required',
      help: 'Some Help Text',
    },
    {
      $formkit: 'formInputText',
      name: 'telephone',
      placeholder: 'telephone',
      help: 'Input Type: tel',
      label: 'Telephone',
      inputType: 'tel',
    },
    {
      $formkit: 'formInputText',
      id: 'icon',
      name: 'iconLeft',
      label: 'Icon Left',
      help: '',
      placeholder: 'icon',
      iconPrefix: 'oi oi-check',
    },
    {
      $formkit: 'formInputText',
      name: 'iconRight',
      label: 'Icon Right (Disabled) - smize: small',
      help: 'Right Icon Demo',
      iconSuffix: 'oi oi-check',
      disabled: true,
      size: 'small',
    },

  ]

const data = { name: 'Harry Potter', iconLeft: 'Some Text ...', iconRight: 'Another Text ...' }
</script>

<template>
  <div class="">
    <OpenVueInput
      header="FormInputText" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
