import type { FormKitTypeDefinition } from '@formkit/core'
import { createInput } from '@formkit/vue'
import FormOutputBoolean from '../components/FormOutputBoolean.vue'
import FormOutputDate from '../components/FormOutputDate.vue'
import FormOutputDuration from '../components/FormOutputDuration.vue'
import FormOutputLink from '../components/FormOutputLink.vue'
import FormOutputList from '../components/FormOutputList.vue'
import FormOutputNumber from '../components/FormOutputNumber.vue'
import FormOutputReference from '../components/FormOutputReference.vue'
import FormOutputText from '../components/FormOutputText.vue'

export const formOutputTextDefinition: FormKitTypeDefinition = createInput(FormOutputText, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'isTranslationKey',
    'html',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
    'convertValue',
    'maxLength',
  ],
})

export const formOutputDateDefinition: FormKitTypeDefinition = createInput(FormOutputDate, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
})

export const formOutputNumberDefinition: FormKitTypeDefinition = createInput(FormOutputNumber, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
  family: 'FormOutput',
})

export const formOutputLinkDefinition: FormKitTypeDefinition = createInput(FormOutputLink, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'title',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
  family: 'FormOutput',
})

export const formOutputReferenceDefinition: FormKitTypeDefinition = createInput(
  FormOutputReference,
  {
    props: [
      'prefix',
      'suffix',
      'iconPrefix',
      'iconSuffix',
      'reference',
      'internal',
      'linkComponentName',
      'title',
      'onIconPrefixClicked',
      'onIconSuffixClicked',
      'iconPrefixTooltip',
      'iconSuffixTooltip',
    ],
    family: 'FormOutput',
  },
)

export const formOutputBooleanDefinition: FormKitTypeDefinition = createInput(FormOutputBoolean, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'trueValue',
    'falseValue',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
  ],
  family: 'FormOutput',
})

export const formOutputDurationDefinition: FormKitTypeDefinition = createInput(
  FormOutputDuration,
  {
    props: [
      'prefix',
      'suffix',
      'iconPrefix',
      'iconSuffix',
      'onIconPrefixClicked',
      'onIconSuffixClicked',
      'iconPrefixTooltip',
      'iconSuffixTooltip',
    ],
    family: 'FormOutput',
  },
)

export const formOutputListDefinition: FormKitTypeDefinition = createInput(FormOutputList, {
  props: [
    'prefix',
    'suffix',
    'iconPrefix',
    'iconSuffix',
    'divider',
    'itemClass',
    'dividerClass',
    'listStyle',
    'onIconPrefixClicked',
    'onIconSuffixClicked',
    'iconPrefixTooltip',
    'iconSuffixTooltip',
    'optionLabel',
    'options',
    'optionValue',
    'convertValue',
  ],
  family: 'FormOutput',
})
