import type { FormKitExtendableSchemaRoot, FormKitNode } from '@formkit/core'
import type { UserModule } from '@/types'
import { createAutoAnimatePlugin, createMultiStepPlugin } from '@formkit/addons'

import { de, en } from '@formkit/i18n'
import { defaultConfig, plugin } from '@formkit/vue'
import { formInputs, formOutputs } from 'my-library/definitions'
import { addFormAsteriskPlugin } from '../../src/plugins'
import '@formkit/addons/css/multistep'

export function addFormLabelPlugin(node: FormKitNode): void {
  if (!/^form[A-Z]/.test(node.props.type))
    return

  node.on('created', () => {
    if (node.props.definition?.schema) {
      const schemaFn = node.props.definition?.schema as FormKitExtendableSchemaRoot
      node.props.definition!.schema = (sectionsSchema = {}) => {
        sectionsSchema.label = {
          children: [
            {
              $cmp: 'OpenVueLabel',
              props: {
                label: '$label',
                help: '$help',
              },
            },
          ],
        }
        sectionsSchema.help = {
        }

        return schemaFn(sectionsSchema)
      }
    }
  })
}

export const install: UserModule = ({ app }) => {
  app.use(plugin, defaultConfig({
    locales: { de, en },
    // Define the active locale
    locale: 'en',
    inputs: { ...formInputs, ...formOutputs },
    plugins: [
      createAutoAnimatePlugin(
        {
          /* optional AutoAnimate config */
          // default:
          duration: 250,
          easing: 'ease-in-out',
        },
        {
          /* optional animation targets object */
          // default:
          global: ['outer', 'inner'],
          form: ['form'],
          formRepeater: ['input'],
        },
      ),
      addFormAsteriskPlugin,
      createMultiStepPlugin(),
    ],
  }))
}
