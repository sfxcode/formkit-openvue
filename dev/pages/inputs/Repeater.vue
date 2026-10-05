<script setup lang='ts'>
const formAttributes = 'N/A'
const customAttributes = 'insertButtonLabel, insertButtonClass, insertButtonSize, alwaysDisplayInsertButton, newItem, listClass, listItemClass, groupClass, hideButtonGroup, hideMoveButtons, buttonGroupClass, buttonGroupItemClass, buttonSize, displayCloneButton, displayAddButton, displayDeleteButton, displayDragHandle, dragHandleClass, dragHandleIconClass'

function createDefaultValue(): object {
  return { name: '', damage: '' }
}

const schema
  = [
    {
      $formkit: 'formInputText',
      label: 'Character Name',
      name: 'characterName',
      outerClass: 'col-12 mb-2',
      validation: 'required',
    },
    {
      $formkit: 'formRepeater',
      name: 'attacks',
      label: 'Attacks List',
      help: 'Add, clone, move, and delete attacks using the buttons',
      listClass: 'grid gap-2',
      listItemClass: 'flex gap-2',
      buttonGroupClass: 'buttonGroupClass mt-6 flex gap-1',
      buttonGroupItemClass: 'buttonGroupItemClass',
      hideButtonGroup: false,
      hideMoveButtons: false,
      displayCloneButton: true,
      displayAddButton: true,
      displayDeleteButton: true,
      draggable: true,
      displayDragHandle: true,
      insertButtonLabel: 'Add Attack',
      insertButtonClass: 'mb-2',
      insertButtonSize: '',
      buttonSize: '',
      alwaysDisplayInsertButton: true,
      newItem: createDefaultValue(),
      children: [
        {
          $formkit: 'formInputText',
          label: 'Name',
          name: 'name',
          outerClass: 'col-span-5',
          validation: 'required',
        },
        {
          $formkit: 'formInputText',
          label: 'Damage',
          name: 'damage',
          outerClass: 'col-span-3 col-start-6',
        },
      ],
    },
    {
      $formkit: 'formRepeater',
      name: 'inventory',
      label: 'Inventory (Minimal Buttons but large)',
      help: 'Repeater with only add and delete buttons',
      listClass: 'grid gap-2',
      listItemClass: 'flex gap-2',
      buttonGroupClass: 'mt-4 flex gap-1',
      buttonSize: 'large',
      hideButtonGroup: false,
      hideMoveButtons: true,
      displayCloneButton: false,
      displayAddButton: false,
      displayDeleteButton: true,
      insertButtonLabel: 'Add Item',
      insertButtonClass: 'mb-2',
      alwaysDisplayInsertButton: true,
      newItem: { item: '', quantity: 1 },
      children: [
        {
          $formkit: 'formInputText',
          label: 'Item',
          name: 'item',
          outerClass: 'col-span-8',
        },
        {
          $formkit: 'formInputNumber',
          label: 'Quantity',
          name: 'quantity',
          outerClass: 'col-span-4',
        },
      ],
    },
  ]

const data = {
  characterName: 'Fighter',
  attacks: [
    { name: 'Sword', damage: '2D6' },
    { name: 'Dagger', damage: '1D6' },
    { name: 'Spear', damage: '1D6+2' },
  ],
  inventory: [
    { item: 'Health Potion', quantity: 3 },
    { item: 'Rope', quantity: 1 },
  ],
}
</script>

<template>
  <div class="">
    <OpenVueInput
      header="FormRepeater" :schema="schema" :data="data"
      :form-attributes="formAttributes" :custom-attributes="customAttributes"
    />
  </div>
</template>

<style lang='scss' scoped>

</style>
