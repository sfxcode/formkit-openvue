import type { Theme } from 'vitepress'
import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DisplayFormComponents from './components/DisplayFormComponents.vue'
import Todo from './components/Todo.vue'
import '@openvue/openicons/openicons.css'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('Todo', Todo)
    app.component('DisplayFormComponents', DisplayFormComponents)
  },
} satisfies Theme
