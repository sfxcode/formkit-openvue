import type { FormKitBaseSlots, FormKitInputs } from '@formkit/inputs'
import type {
  AutoCompleteSlots,
  CascadeSelectSlots,
  CheckboxSlots,
  ColorPickerSlots,
  DatePickerSlots,
  InputMaskSlots,
  InputNumberSlots,
  InputOtpSlots,
  InputTextSlots,
  KnobSlots,
  ListboxSlots,
  MultiSelectSlots,
  PasswordSlots,
  RadioButtonSlots,
  RatingSlots,
  SelectButtonSlots,
  SelectSlots,
  SliderSlots,
  TextareaSlots,
  ToggleButtonSlots,
  ToggleSwitchSlots,
  TreeSelectSlots,
} from 'openvue'
import type { CascadeSelectProps } from 'openvue/cascadeselect'
import type { ListboxProps } from 'openvue/listbox'
import type { MultiSelectProps } from 'openvue/multiselect'
import type { SelectProps } from 'openvue/select'
import type { SelectButtonProps } from 'openvue/selectbutton'
import type { TreeSelectProps } from 'openvue/treeselect'
import { FormKitDataEdit, FormKitDataView } from './components'
import { useFormInputs, useFormKitRepeater, useFormKitSchema, useInputEditor, useInputEditorSchema } from './composables'
import { formInputs, formOutputs } from './definitions'

export {
  formInputs,
  FormKitDataEdit,
  FormKitDataView,
  formOutputs,
  useFormInputs,
  useFormKitRepeater,
  useFormKitSchema,
  useInputEditor,
  useInputEditorSchema,
}

/**
 * Keeps all slots from 1st argument, add any slots from 2nd type which do not collide with the 1st's names.
 */
type MergeSlots<A, B> = A & Omit<B, keyof A>

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    formAutoComplete: {
      type: 'formAutoComplete'
    }
    formInputText: {
      type: 'formInputText'
    }
    formInputNumber: {
      type: 'formInputNumber'
    }
    formInputMask: {
      type: 'formInputMask'
    }
    formPassword: {
      type: 'formPassword'
    }
    formCheckbox: {
      type: 'formCheckbox'
    }
    formToggleSwitch: {
      type: 'formToggleSwitch'
    }
    formTextarea: {
      type: 'formTextarea'
    }
    formSelect: {
      type: 'formSelect'
      options?: SelectProps['options']
    }
    formMultiSelect: {
      type: 'formMultiSelect'
      options?: MultiSelectProps['options']
    }
    formDatePicker: {
      type: 'formDatePicker'
    }
    formSlider: {
      type: 'formSlider'
    }
    formKnob: {
      type: 'formKnob'
    }
    formRating: {
      type: 'formRating'
    }
    formRadioButton: {
      type: 'formRadioButton'
    }
    formColorPicker: {
      type: 'formColorPicker'
    }
    formToggleButton: {
      type: 'formToggleButton'
    }
    formListbox: {
      type: 'formListbox'
      options?: ListboxProps['options']
    }
    formSelectButton: {
      type: 'formSelectButton'
      options?: SelectButtonProps['options']
    }
    formCascadeSelect: {
      type: 'formCascadeSelect'
      options?: CascadeSelectProps['options']
    }
    formTreeSelect: {
      type: 'formTreeSelect'
      options?: TreeSelectProps['options']
    }
    formInputOtp: {
      type: 'formInputOtp'
    }
    formOutputText: {
      type: 'formOutputText'
    }
    formOutputLink: {
      type: 'formOutputLink'
    }
    formOutputReference: {
      type: 'formOutputReference'
    }
    formOutputNumber: {
      type: 'formOutputNumber'
    }
    formOutputDate: {
      type: 'formOutputDate'
    }
    formOutputBoolean: {
      type: 'formOutputBoolean'
    }
    formOutputDuration: {
      type: 'formOutputDuration'
    }
    formOutputList: {
      type: 'formOutputList'
    }
  }

  interface FormKitInputSlots<Props extends FormKitInputs<Props>> {
    formAutoComplete: MergeSlots<FormKitBaseSlots<Props>, AutoCompleteSlots>
    formCascadeSelect: MergeSlots<FormKitBaseSlots<Props>, CascadeSelectSlots>
    formCheckbox: MergeSlots<FormKitBaseSlots<Props>, CheckboxSlots>
    formColorPicker: MergeSlots<FormKitBaseSlots<Props>, ColorPickerSlots>
    formDatePicker: MergeSlots<FormKitBaseSlots<Props>, DatePickerSlots>
    formInputMask: MergeSlots<FormKitBaseSlots<Props>, InputMaskSlots>
    formInputNumber: MergeSlots<FormKitBaseSlots<Props>, InputNumberSlots>
    formInputOtp: MergeSlots<FormKitBaseSlots<Props>, InputOtpSlots>
    formInputText: MergeSlots<FormKitBaseSlots<Props>, InputTextSlots>
    formKnob: MergeSlots<FormKitBaseSlots<Props>, KnobSlots>
    formListbox: MergeSlots<FormKitBaseSlots<Props>, ListboxSlots>
    formMultiSelect: MergeSlots<FormKitBaseSlots<Props>, MultiSelectSlots>
    formOutputBoolean: FormKitBaseSlots<Props>
    formOutputDate: FormKitBaseSlots<Props>
    formOutputDuration: FormKitBaseSlots<Props>
    formOutputLink: FormKitBaseSlots<Props>
    formOutputList: FormKitBaseSlots<Props>
    formOutputNumber: FormKitBaseSlots<Props>
    formOutputReference: FormKitBaseSlots<Props>
    formOutputText: FormKitBaseSlots<Props>
    formPassword: MergeSlots<FormKitBaseSlots<Props>, PasswordSlots>
    formRadioButton: MergeSlots<FormKitBaseSlots<Props>, RadioButtonSlots>
    formRating: MergeSlots<FormKitBaseSlots<Props>, RatingSlots>
    formSelect: MergeSlots<FormKitBaseSlots<Props>, SelectSlots>
    formSelectButton: MergeSlots<FormKitBaseSlots<Props>, SelectButtonSlots>
    formSlider: MergeSlots<FormKitBaseSlots<Props>, SliderSlots>
    formTextarea: MergeSlots<FormKitBaseSlots<Props>, TextareaSlots>
    formToggleButton: MergeSlots<FormKitBaseSlots<Props>, ToggleButtonSlots>
    formToggleSwitch: MergeSlots<FormKitBaseSlots<Props>, ToggleSwitchSlots>
    formTreeSelect: MergeSlots<FormKitBaseSlots<Props>, TreeSelectSlots>
  }
}
