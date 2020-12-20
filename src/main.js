import Vue from 'vue'
import { Button, Select, Option } from 'element-ui'
import App from "./App"

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
