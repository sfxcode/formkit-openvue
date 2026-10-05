<script setup lang='ts'>
const schema
  = [
    {
      $formkit: 'formInputText',
      name: 'name',
      label: 'Styling outer class',
      help: 'Required.',
      outerClass: 'stylingOuterClass',
    },
    {
      $formkit: 'formInputText',
      name: 'name2',
      label: 'Styling inner class',
      help: 'Required.',
      innerClass: 'stylingSampleClass',

    },

  ]

const data = { name: 'Some Label in Green', name2: 'Some Text in Green' }
</script>

<template>
  <div class="">
    <OpenVueInput
      header="Styling by FormKit Classes" :schema="schema" form-class="grid grid-cols-2 gap-4" :data="data"
    >
      <div class="pb-8" />
    </OpenVueInput>
  </div>
</template>

<style lang='scss'>
  .stylingOuterClass {
    color: yellowgreen;
  }
  .stylingSampleClass {
    input {
      color: green;
  }
}
</style>
