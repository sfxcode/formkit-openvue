import type { FormKitExtendableSchemaRoot, FormKitNode } from '@formkit/core'

export function addFormAsteriskPlugin(node: FormKitNode): void {
  if (!/^form[A-Z]/.test(node.props.type) || node.props.type.startsWith('formOutput'))
    return

  node.on('created', () => {
    if (node.props.definition?.schema) {
      const schemaFn = node.props.definition?.schema as FormKitExtendableSchemaRoot
      node.props.definition!.schema = (sectionsSchema = {}) => {
        sectionsSchema.label = {
          children: ['$label', {
            $el: 'span',
            if: '$state.required',
            attrs: {
              class: 'p-formkit-asterisk',
            },
            children: ['*'],
          }],
        }

        return schemaFn(sectionsSchema)
      }
    }
  })
}

export function addLabelPlugin(node: FormKitNode): void {
  if (!/^form[A-Z]/.test(node.props.type))
    return

  node.on('created', () => {
    if (node.props.definition?.schema) {
      const schemaFn = node.props.definition?.schema as FormKitExtendableSchemaRoot
      node.props.definition!.schema = (sectionsSchema = {}) => {
        sectionsSchema.label = {
          children: [{
            $el: 'span',
            attrs: {
              title: '$help',
              class: 'p-formkit-label',
            },
            children: ['$label'],
          }, {
            $el: 'span',
            if: '$state.required',
            attrs: {
              class: 'p-formkit-required',
              title: '$help',
            },
            children: ['*'],
          }],
        }
        sectionsSchema.help = {
          children: [],
        }

        return schemaFn(sectionsSchema)
      }
    }
  })
}
