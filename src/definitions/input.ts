import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'

import FormAutoComplete from '../components/FormAutoComplete.vue'
import FormCascadeSelect from '../components/FormCascadeSelect.vue'
import FormCheckbox from '../components/FormCheckbox.vue'
import FormColorPicker from '../components/FormColorPicker.vue'
import FormDatePicker from '../components/FormDatePicker.vue'
import FormInputMask from '../components/FormInputMask.vue'
import FormInputNumber from '../components/FormInputNumber.vue'
import FormInputOtp from '../components/FormInputOtp.vue'
import FormInputText from '../components/FormInputText.vue'
import FormKnob from '../components/FormKnob.vue'
import FormListbox from '../components/FormListbox.vue'
import FormMultiSelect from '../components/FormMultiSelect.vue'
import FormPassword from '../components/FormPassword.vue'
import FormRadioButton from '../components/FormRadioButton.vue'
import FormRating from '../components/FormRating.vue'
import FormSelect from '../components/FormSelect.vue'
import FormSelectButton from '../components/FormSelectButton.vue'
import FormSlider from '../components/FormSlider.vue'
import FormTextarea from '../components/FormTextarea.vue'
import FormToggleButton from '../components/FormToggleButton.vue'
import FormToggleSwitch from '../components/FormToggleSwitch.vue'
import FormTreeSelect from '../components/FormTreeSelect.vue'

export const formAutoCompleteDefinition: FormKitTypeDefinition = createInput(FormAutoComplete, {
  props: ['pt', 'ptOptions', 'unstyled', 'Select', 'multiple', 'typeahead', 'optionLabel', 'options', 'size', 'minLength', 'placeholder', 'fluid', 'separators'],
  family: 'FormInput',
})
export const formInputTextDefinition: FormKitTypeDefinition = createInput(FormInputText, {
  props: ['pt', 'ptOptions', 'unstyled', 'placeholder', 'iconPrefix', 'iconSuffix', 'size', 'inputType'],
  family: 'FormInput',
})

export const formInputNumberDefinition: FormKitTypeDefinition = createInput(FormInputNumber, {
  props: ['useGrouping', 'min', 'max', 'minFractionDigits', 'maxFractionDigits', 'locale', 'mode', 'currency', 'prefix', 'suffix', 'showButtons', 'buttonLayout', 'step', 'pt', 'ptOptions', 'unstyled', 'placeholder', 'size'],
  family: 'FormInput',
})

export const formInputMaskDefinition: FormKitTypeDefinition = createInput(FormInputMask, {
  props: ['mask', 'slotChar', 'autoClear', 'unmask', 'pt', 'ptOptions', 'unstyled', 'invalid', 'variant', 'iconPrefix', 'iconSuffix', 'size'],
  family: 'FormInput',
})

export const formPasswordDefinition: FormKitTypeDefinition = createInput(FormPassword, {
  props: ['mediumRegex', 'strongRegex', 'promptLabel', 'weakLabel', 'mediumLabel', 'strongLabel', 'hideIcon', 'showIcon', 'pt', 'ptOptions', 'unstyled', 'placeholder', 'feedback', 'toggleMask', 'size'],
  family: 'FormInput',
})

export const formTextareaDefinition: FormKitTypeDefinition = createInput(FormTextarea, {
  props: ['pt', 'ptOptions', 'unstyled', 'autoResize', 'rows', 'placeholder', 'size'],
  family: 'FormInput',
})

export const formCheckboxDefinition: FormKitTypeDefinition = createInput(FormCheckbox, {
  props: ['binary', 'trueValue', 'falseValue', 'pt', 'ptOptions', 'unstyled', 'indeterminate', 'variant', 'prefix', 'suffix', 'size'],
  family: 'FormInput',
})

export const formToggleSwitchDefinition: FormKitTypeDefinition = createInput(FormToggleSwitch, {
  props: ['trueValue', 'falseValue', 'pt', 'ptOptions', 'unstyled', 'prefix', 'suffix'],
  family: 'FormInput',
})

export const formInputOtpDefinition: FormKitTypeDefinition = createInput(FormInputOtp, {
  props: ['length', 'variant', 'mask', 'integerOnly', 'pt', 'ptOptions', 'unstyled', 'size'],
  family: 'FormInput',
})

export const formSelectDefinition: FormKitTypeDefinition = createInput(FormSelect, {
  props: ['options', 'optionLabel', 'optionValue', 'optionDisabled', 'optionGroupLabel', 'optionGroupChildren', 'scrollHeight', 'filter', 'filterPlaceholder', 'filterLocale', 'filterMatchMode', 'filterFields', 'filterInputProps', 'editable', 'placeholder', 'dataKey', 'showClear', 'panelStyle', 'panelClass', 'panelProps', 'appendTo', 'resetFilterOnHide', 'virtualScrollerOptions', 'autoOptionFocus', 'selectOnFocus', 'filterMessage', 'selectionMessage', 'emptySelectionMessage', 'emptyFilterMessage', 'emptyMessage', 'pt', 'ptOptions', 'unstyled', 'size'],
  family: 'FormInput',
})

export const formMultiSelectDefinition: FormKitTypeDefinition = createInput(FormMultiSelect, {
  props: ['options', 'optionLabel', 'optionValue', 'optionDisabled', 'optionGroupLabel', 'optionGroupChildren', 'scrollHeight', 'inputProps', 'closeButtonProps', 'dataKey', 'filter', 'filterPlaceholder', 'filterLocale', 'filterMatchMode', 'filterFields', 'appendTo', 'display', 'maxSelectedLabels', 'selectedItemsLabel', 'selectionLimit', 'showToggleAll', 'loading', 'selectAll', 'resetFilterOnHide', 'virtualScrollerOptions', 'autoOptionFocus', 'autoFilterFocus', 'filterMessage', 'selectionMessage', 'emptySelectionMessage', 'emptyFilterMessage', 'emptyMessage', 'pt', 'placeholder', 'ptOptions', 'unstyled', 'size'],
  family: 'FormInput',
})

export const formListboxDefinition: FormKitTypeDefinition = createInput(FormListbox, {
  props: ['pt', 'ptOptions', 'unstyled', 'options', 'optionLabel', 'optionValue', 'multiple', 'filter', 'filterIcon', 'filterPlaceholder', 'filterLocale', 'filterMatchMode', 'autoOptionFocus', 'selectOnFocus', 'optionDisabled', 'optionGroupLabel', 'optionGroupChildren', 'dataKey', 'metaKeySelection', 'virtualScrollerOptions', 'displayMode', 'transferLeftHeaderText', 'transferRightHeaderText', 'transferHeaderClass', 'transferAll', 'transferButtonSeverity', 'transferContainerClass', 'transferListContainerClass', 'transferButtonClass', 'transferDragDrop'],
  family: 'FormInput',
})

export const formDatePickerDefinition: FormKitTypeDefinition = createInput(FormDatePicker, {
  props: ['dateFormat', 'placeholder', 'selectionMode', 'inline', 'icon', 'showOtherMonths', 'selectOtherMonths', 'showIcon', 'previousIcon', 'nextIcon', 'incrementIcon', 'decrementIcon', 'numberOfMonths', 'responsiveOptions', 'view', 'touchUI', 'minDate', 'maxDate', 'disabledDates', 'disabledDays', 'maxDateCount', 'showOnFocus', 'autoZIndex', 'baseZIndex', 'showButtonBar', 'showTime', 'timeOnly', 'shortYearCutoff', 'hourFormat', 'stepHour', 'stepMinute', 'stepSecond', 'showSeconds', 'hideOnDateTimeSelect', 'hideOnRangeSelection', 'timeSeparator', 'showWeek', 'manualInput', 'appendTo', 'panelStyle', 'panelClass', 'pt', 'ptOptions', 'unstyled', 'size', 'updateModelType'],
  family: 'FormInput',
})

export const formSliderDefinition: FormKitTypeDefinition = createInput(FormSlider, {
  props: ['pt', 'ptOptions', 'unstyled', 'min', 'max', 'step', 'range', 'orientation'],
  family: 'FormInput',
})

export const formRatingDefinition: FormKitTypeDefinition = createInput(FormRating, {
  props: ['unstyled', 'stars', 'cancel', 'onIcon', 'offIcon', 'cancelIcon', 'ptOptions', 'pt'],
  family: 'FormInput',
})
export const formRadioButtonDefinition: FormKitTypeDefinition = createInput(FormRadioButton, {
  props: ['pt', 'ptOptions', 'unstyled', 'options', 'optionsClass', 'optionClass', 'size'],
  family: 'FormInput',
})

export const formKnobDefinition: FormKitTypeDefinition = createInput(FormKnob, {
  props: ['pt', 'ptOptions', 'unstyled', 'min', 'max', 'step', 'size', 'strokeWidth', 'showValue', 'valueColor', 'rangeColor', 'textColor', 'valueTemplate'],
  family: 'FormInput',
})

export const formColorPickerDefinition: FormKitTypeDefinition = createInput(FormColorPicker, {
  props: ['defaultColor', 'inline', 'format', 'pt', 'ptOptions', 'unstyled'],
  family: 'FormInput',
})

export const formToggleButtonDefinition: FormKitTypeDefinition = createInput(FormToggleButton, {
  props: ['pt', 'ptOptions', 'unstyled', 'onLabel', 'offLabel', 'onIcon', 'offIcon', 'iconPos', 'size'],
  family: 'FormInput',
})

export const formSelectButtonDefinition: FormKitTypeDefinition = createInput(FormSelectButton, {
  props: ['pt', 'ptOptions', 'unstyled', 'optionLabel', 'optionValue', 'optionDisabled', 'multiple', 'unselectable', 'dataKey', 'options', 'size'],
  family: 'FormInput',
})

export const formCascadeSelectDefinition: FormKitTypeDefinition = createInput(FormCascadeSelect, {
  props: ['options', 'optionLabel', 'optionValue', 'optionGroupLabel', 'optionGroupChildren', 'placeholder', 'pt', 'ptOptions', 'unstyled', 'size'],
  family: 'FormInput',
})

export const formTreeSelectDefinition: FormKitTypeDefinition = createInput(FormTreeSelect, {
  props: ['options', 'placeholder', 'selectionMode', 'pt', 'ptOptions', 'unstyled', 'emptyMessage', 'display', 'metaKeySelection', 'appendTo', 'scrollHeight', 'panelClass', 'variant', 'size'],
  family: 'FormInput',
})
