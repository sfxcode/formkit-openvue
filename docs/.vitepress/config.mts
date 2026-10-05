import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'FormKit-OpenVue',
  description: 'FormKit OpenVue Integration',
  base: '/formkit-openvue/',
  themeConfig: {
    footer: {
      message: 'FormKit OpenVue Module',
      copyright: 'Copyright © 2024 SFXCode',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sfxcode/formkit-openvue' },
    ],
    editLink: {
      pattern: 'https://github.com/sfxcode/formkit-openvue/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    search: {
      provider: 'local',
    },
    sidebar: {
      '/guide/': sidebarGuide(),
      '/advanced/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  vite: {
    plugins: [
      Unocss({
        configFile: './docs/uno.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Advanced', link: '/advanced/', activeMatch: '/advanced/' },
    { text: 'Components', link: '/component/', activeMatch: '/component/' },
    {
      text: 'Playground',
      link: 'https://formkit-openvue.netlify.app',
    },
    {
      text: 'External Docs',
      items: [
        {
          text: 'OpenVue',
          link: 'https://openvue.dev/',
        },
        {
          text: 'Formkit',
          link: 'https://formkit.com',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sfxcode/formkit-openvue/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is this?', link: '/guide/' },
        { text: 'Getting started', link: '/guide/getting-started' },
      ],
    },
    {
      text: 'Guide',
      collapsible: true,
      items: [
        { text: 'Usage', link: '/guide/usage' },
        { text: 'Input Components', link: '/guide/inputs' },
        { text: 'Output Components', link: '/guide/outputs' },
        { text: 'Form Components', link: '/guide/form' },
        { text: 'Input Options', link: '/guide/options' },
        { text: 'Styling', link: '/guide/styling' },
        { text: 'Prefix / Suffix', link: '/guide/prefix' },
        { text: 'Examples', link: '/guide/examples' },
      ],
    },
    {
      text: 'Advanced',
      collapsible: true,
      items: [
        { text: 'Composables', link: '/advanced/composables' },
        { text: 'Nuxt', link: '/advanced/nuxt' },
        { text: 'Schema', link: '/advanced/schema' },
        { text: 'Plugins', link: '/advanced/plugins' },
        { text: 'I18n', link: '/advanced/i18n' },
      ],
    },
    ...sidebarComponent(),
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
      ],
    },
  ]
}

function sidebarComponent() {
  return [
    {
      text: 'Input Components',
      collapsible: true,
      items: [
        { text: 'FormAutoComplete', link: '/component/FormAutoComplete' },
        { text: 'FormCascadeSelect', link: '/component/FormCascadeSelect' },
        { text: 'FormCheckbox', link: '/component/FormCheckbox' },
        { text: 'FormColorPicker', link: '/component/FormColorPicker' },
        { text: 'FormDatePicker', link: '/component/FormDatePicker' },
        { text: 'FormInputMask', link: '/component/FormInputMask' },
        { text: 'FormInputNumber', link: '/component/FormInputNumber' },
        { text: 'FormInputOtp', link: '/component/FormInputOtp' },
        { text: 'FormInputText', link: '/component/FormInputText' },
        { text: 'FormKnob', link: '/component/FormKnob' },
        { text: 'FormListbox', link: '/component/FormListbox' },
        { text: 'FormMultiSelect', link: '/component/FormMultiSelect' },
        { text: 'FormPassword', link: '/component/FormPassword' },
        { text: 'FormRadioButton', link: '/component/FormRadioButton' },
        { text: 'FormRating', link: '/component/FormRating' },
        { text: 'FormRepeater', link: '/component/FormRepeater' },
        { text: 'FormSelect', link: '/component/FormSelect' },
        { text: 'FormSelectButton', link: '/component/FormSelectButton' },
        { text: 'FormSlider', link: '/component/FormSlider' },
        { text: 'FormTextarea', link: '/component/FormTextarea' },
        { text: 'FormToggleButton', link: '/component/FormToggleButton' },
        { text: 'FormToggleSwitch', link: '/component/FormToggleSwitch' },
        { text: 'FormTreeSelect', link: '/component/FormTreeSelect' },
      ],
    },
    {
      text: 'Output Components',
      collapsible: true,
      items: [
        { text: 'FormOutputBoolean', link: '/component/FormOutputBoolean' },
        { text: 'FormOutputDate', link: '/component/FormOutputDate' },
        { text: 'FormOutputDuration', link: '/component/FormOutputDuration' },
        { text: 'FormOutputLink', link: '/component/FormOutputLink' },
        { text: 'FormOutputList', link: '/component/FormOutputList' },
        { text: 'FormOutputNumber', link: '/component/FormOutputNumber' },
        { text: 'FormOutputReference', link: '/component/FormOutputReference' },
        { text: 'FormOutputText', link: '/component/FormOutputText' },
      ],
    },
  ]
}
