<script setup lang='ts'>
const pt_content = {
  root: { style: 'font-weight: 600;color: green;' },
}

const pt_content_style_class = {
  root: { class: '!text-red-500' },
}

const schema
  = [
    {
      $formkit: 'formInputText',
      name: 'name',
      label: 'PassThrough with style',
      pt: pt_content,
    },
    {
      $formkit: 'formInputText',
      name: 'name2',
      label: 'PassThrough with tailwind like style class',
      pt: pt_content_style_class,
    },
  ]

const data = { name: 'Some Text in Green', name2: 'Some Text in Red' }
</script>

<template>
  <div class="">
    <OpenVueInput
      header="Pass Through" :schema="schema" :data="data"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
