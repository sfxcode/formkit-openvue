<script setup lang="ts">
import { FormKitDataEdit, useFormKitSchema } from 'my-library'
import { useMessages } from '../../composables/messages'

const { addElement } = useFormKitSchema()
const { t } = useI18n()
const horizontal = ref(false)
const indentCheckboxes = ref(false)
const showReset = ref(false)

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Every hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

const schema = reactive(
  [
    addElement('h2', ['Register ', '$email']),
    addElement('h3', 'Header Text H3'),
    {
      $formkit: 'formInputText',
      name: 'email',
      label: 'Email',
      help: 'This will be used for your account.',
      validation: 'required|email',
      iconPrefix: 'oi oi-book',
      iconSuffix: 'oi oi-bullseye',
    },
    {
      $formkit: 'formTextarea',
      name: 'myText',
      label: 'Text',
      validation: '',
      rows: '3',
    },
    {
      $formkit: 'formDatePicker',
      name: 'date',
      label: 'Date',
    },
    {
      $formkit: 'formOutputLink',
      name: 'field',
      value: 'https://www.google.de',
      label: 'Output Link',
      iconSuffix: 'oi oi-check',
      suffix: 'This is the suffix',
      prefix: 'This is the prefix',
      iconPrefix: 'oi oi-trash',
    },
    addElement('h3', 'Password demo'),
    {
      $formkit: 'formPassword',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password.',
      validation: 'required|length:5,16',
      feedback: true,
      outerClass: 'col-6',
    },
    {
      $formkit: 'formPassword',
      name: 'password_confirm',
      label: 'Confirm password',
      help: 'Enter your new password again.',
      validation: 'required|confirm',
      validationLabel: 'password confirmation',
      outerClass: 'col-6',
    },
    addElement('h3', 'Conditional Demo'),
    {
      $formkit: 'formCheckbox',
      name: 'eu_citizen',
      id: 'eu',
      suffix: 'Are you a european citizen?',
      outerClass: 'col-6',
    },
    {
      $formkit: 'formSelect',
      if: '$get(eu).value', // 👀 Oooo, conditionals!
      name: 'cookie_notice',
      label: 'Cookie notice frequency',
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'How often should we display a cookie notice?',
      outerClass: 'col-6',
    },
  ],
)

const data = ref({ date: new Date(), text: 'Lorem Ipsum' })

const { showSuccessMessage } = useMessages()
async function submitHandler(data: any) {
  showSuccessMessage(`Form Submitted ${data?.email}`, 'Form submitted successfully')
}
</script>

<template>
  <OpenVueData header="FormKitDataEdit Demo">
    <div class="flex gap-2 mb-4">
      <div>Show Reset Button</div>
      <Checkbox v-model="showReset" binary />
      <div>Horizontal</div>
      <Checkbox v-model="horizontal" binary />
      <div v-if="horizontal">
        Indent Checkboxes
      </div>
      <Checkbox v-if="horizontal" v-model="indentCheckboxes" binary />
    </div>
    <FormKitDataEdit
      id="FormKitDataEditId"
      v-model="data"
      :debug-data="true"
      :debug-schema="true"
      :form-class="(horizontal ? ' form-horizontal' : '') + (indentCheckboxes ? ' form-horizontal-checkbox-indent ' : '')"
      :schema="schema"
      :show-reset="showReset"
      :submit-label="t('save')"
      @data-saved="submitHandler"
      @on-reset="() => { console.log('Form Reset') }"
    />
  </OpenVueData>
</template>
