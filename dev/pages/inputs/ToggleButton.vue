<script setup lang='ts'>
import OpenVueInput from '@/components/demo/OpenVueInput.vue'

const formAttributes = 'onLabel, offLabel, onIcon, offIcon'

const schema
  = [
    {
      $formkit: 'formToggleButton',
      label: 'ToggleButton',
      name: 'toggleButton',
    },
    {
      $formkit: 'formToggleButton',
      label: 'Second ToggleButton',
      name: 'toggleButtonRight',
      iconPos: 'right',
    },
    {
      $formkit: 'formToggleButton',
      label: 'Custom ToggleButton',
      name: 'toggleButtonCustom',
      iconPos: 'right',
      onIcon: 'oi oi-plus',
      offIcon: 'oi oi-minus',
      onLabel: 'plus',
      offLabel: 'minus',
    },
  ]

const data = { }
</script>

<template>
  <div>
    <OpenVueInput
      header="FormToggleButton" :schema="schema" :data="data"
      :form-attributes="formAttributes"
    />
  </div>
</template>
