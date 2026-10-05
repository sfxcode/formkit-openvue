# FormKit - OpenVue

OpenVue based [FormKit Inputs](https://sfxcode.github.io/formkit-openvue/guide/inputs.html) for using [FormKit](https://formkit.com/) with the [OpenVue](https://github.com/openvi-foundation/openvue) UI Framework (`openvue`).

Main focus of this project is to provide configuration based forms with validation.

In addition, you can use the same pattern for **data output** from **schema** using [FormOutputs](https://sfxcode.github.io/formkit-openvue/guide/outputs.html).

## OpenVue Versions

Actual OpenVue Version of the main branch is *1.0.0.*

This package replaces the former PrimeVue based `@sfxcode/formkit-primevue`. It uses the open source [OpenVue](https://github.com/openvi-foundation/openvue) components (`openvue`, `@openvue/themes`, `@openvue/openicons`) instead of PrimeVue.

## Migration from PrimeVue

Migrating from `@sfxcode/formkit-primevue` to `@sfxcode/formkit-openvue`:

1. Replace the package and the UI framework

   ```bash
   pnpm remove @sfxcode/formkit-primevue primevue @primeuix/themes primeicons
   pnpm add @sfxcode/formkit-openvue openvue @openvue/themes @openvue/openicons
   ```

2. Update the imports (including `/components`, `/composables` and the scss file)

   ```typescript
   // before
   import { primeInputs, primeOutputs } from '@sfxcode/formkit-primevue'
   // after
   import { formInputs, formOutputs } from '@sfxcode/formkit-openvue'
   ```

3. Rename the input and output types in your schemas: the `prime` prefix is now `form`

   | PrimeVue                      | OpenVue                      |
   |-------------------------------|------------------------------|
   | `type: 'primeInputText'`      | `type: 'formInputText'`      |
   | `type: 'primeSelect'`         | `type: 'formSelect'`         |
   | `type: 'primeOutputText'`     | `type: 'formOutputText'`     |
   | `primeInputs`, `primeOutputs` | `formInputs`, `formOutputs`  |
   | `usePrimeInputs()`            | `useFormInputs()`            |
   | `PrimeInputText` (component)  | `FormInputText` (component)  |

   A search and replace of `prime` followed by an uppercase letter (`prime[A-Z]` -> `form`, `Prime[A-Z]` -> `Form`) covers most of it.

4. Replace PrimeVue with OpenVue in your app setup: use the `openvue` components, themes and `@openvue/openicons` (instead of PrimeIcons) and register them as you did with PrimeVue.

5. Update custom CSS: selectors like `[data-type="primeCheckbox"]` become `[data-type="formCheckbox"]`.

Also rename the `primeAttributes` prop to `formAttributes` (`prime-attributes` to `form-attributes` in templates). Rename the i18n keys `formkit.prime.true` / `formkit.prime.false` to `formkit.form.true` / `formkit.form.false`. Not changed: the `p-formkit` wrapper class. The stylesheet is now `formkit-openvue.scss` (update imports of `dist/sass/formkit-primevue.scss`).

## Build

[![CI](https://github.com/sfxcode/formkit-openvue/actions/workflows/deploy.yml/badge.svg)](https://github.com/sfxcode/formkit-openvue/actions/workflows/deploy.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6142cb73-02e0-4b2a-9ca3-25496f59ba9b/deploy-status)](https://app.netlify.com/sites/formkit-openvue/deploys)

## Docs

[Docs](https://sfxcode.github.io/formkit-openvue/)

[Demo/Playground](https://formkit-openvue.netlify.app/)

## Usage

### Configuration

Add *formkit.config.ts*

```typescript
import { defaultConfig, plugin } from '@formkit/vue'
import { formInputs } from '@sfxcode/formkit-openvue'

app.use(plugin, defaultConfig({
  locales: { de, en },
  // Define the active locale
  locale: 'en',
  inputs: formInputs, 
}))
```

or if using also the output part

```typescript
import { defaultConfig, plugin } from '@formkit/vue'
import { formInputs, formOutputs } from '@sfxcode/formkit-openvue'

app.use(plugin, defaultConfig({
  locales: { de, en },
  // Define the active locale
  locale: 'en',
    inputs: { ...formInputs, ...formOutputs },
}))
```

Important: output elements depends on vue-i18n to style numbers, dates, ...

### Nuxt

[FormKit-PrimeVue-Nuxt](https://github.com/sfxcode/formkit-primevue-nuxt) module available.

Features:

- add OpenVue Nuxt Module
- add FormKit Nuxt Module
- add i18n Nuxt Module
- Default Configuration for FormKit (with OpenVue components) is provided (can be disabled if needed)
- AutoImport of OpenVue Form Components
- OpenIcons are loaded by Default
- FormKit Styling of this package is loaded by default
- AutoImport of Composables
- AutoImport of Components

## Limitations

Prefixing of the OpenVue component names is not supported.

### Schema Helper Functions

[useFormKitSchema](https://github.com/sfxcode/formkit-openvue/blob/main/src/composables/useFormKitSchema.ts) provide functions to simplify the usage of elements, components, lists, ...

[useInputEditorSchema](https://github.com/sfxcode/formkit-openvue/blob/main/src/composables/useInputEditorSchema.ts) provide functions for a component schema generation builder

### Basic Styling

Basic styling is provided with the [formkit-openvue.scss](https://github.com/sfxcode/formkit-openvue/blob/main/src/sass/formkit-openvue.scss) file or the corresponding css file in the package.

Features:

- Width of all text and dropdown elements is set to 100%
- Error Color by variable (--formkit-error-color)
- Some margins, font sizes ...

You can use it or take it as base for your own styling.

### Extended Styling

- Styling outerClas, innerClass .... is provided by FormKit
- All inputs, outputs are wrapped in a div with a **p-formkit** class
- Most of the OpenVue Input Components have access to class / styles attributes
- PT and PTOptions are available (pass-through API of OpenVue components)
- [Styling](https://formkit-openvue.netlify.app/styling/base) and [PT](https://formkit-openvue.netlify.app/styling/passThrough) demo available
- [Grid](https://formkit-openvue.netlify.app/styling/grid) Demo of the provided grid styling (col-[1-12])

### Samples

Some samples for common tasks are available

- [Repeater](https://formkit-openvue.netlify.app/samples/repeater) Use Repeater composable for using repeating values in your schema
- [Input Editor](https://formkit-openvue.netlify.app/samples/inputEditor) Edit FormKit schema on the based on a provided composable
- [Form Editor](https://formkit-openvue.netlify.app/samples/formEditor) Basic demo as starter to create Forms visually

## Showcases

[Demo Application](https://formkit-openvue.netlify.app/)

[Nuxt 3 OpenVue Starter](https://github.com/sfxcode/nuxt3-primevue-starter) and [Vite OpenVue Starter](https://github.com/sfxcode/vite-primevue-starter) with Formkit support available (OpenVue based).

## Supported Inputs for OpenVue

- AutoComplete
- CascadeSelect
- Checkbox
- ColorPicker
- DatePicker
- Editor (HTML Editor - if you register the editor component, make sure to import quill)
- InputMask
- InputNumber
- InputOtp
- InputText
- Knob
- Listbox
- MultiSelect
- Password
- RadioButton
- Rating
- Repeater (not an OpenVue component, but provided as helper for repeating groups of inputs)
- Select
- SelectButton
- Slider
- Textarea
- ToggleButton
- ToggleSwitch
- TreeSelect

![](formkit-primevue.png)
