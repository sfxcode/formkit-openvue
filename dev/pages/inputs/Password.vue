<script setup lang='ts'>
const formAttributes = 'placeholder, feedback, mediumRegex, strongRegex, promptLabel, weakLabel, mediumLabel, strongLabel, toggleMask'
const schema
  = [
    {
      $formkit: 'formPassword',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password',
      feedback: true,
    },
    {
      $formkit: 'formPassword',
      name: 'password_confirm',
      label: 'Confirm password',
      help: 'Enter your new password again.',
      validation: 'required|confirm',
      toggleMask: true,
      validationLabel: 'password confirmation',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormPassword" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
