<script setup lang='ts'>
const schema
  = [
    {
      $formkit: 'formInputText',
      name: 'name',
      label: 'Styling by class',
      help: 'Required.',
      validation: 'required',
      class: 'stylingSampleClass',
    },
    {
      $formkit: 'formInputText',
      name: 'name2',
      label: 'Styling by class',
      help: 'Required.',
      validation: 'required',
      style: { color: 'gray', fontWeight: 700 },
    },

  ]

const data = { name: 'Some Text in Green', name2: 'Some bold Text in Gray' }
</script>

<template>
  <div class="">
    <OpenVueInput
      header="Styling" :schema="schema" :data="data"
    >
      <div class="pb-8">
        <span>Use Custom classes for better styling. <br>To be specific you can use use the parent div class: p-formkit.
          <br>
          Direct styling by the style attribute.
          <br>
          In this demo elements with the p-formkit class use the parent width.
        </span>
      </div>
    </OpenVueInput>
  </div>
</template>

<style lang='scss'>
.p-formkit {
  .stylingSampleClass {
    color: green;
  }
}
</style>
