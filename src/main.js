import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueGtag from "vue-gtag";

const app = createApp(App)
app.config.productionTip = false;

createApp(App).use(VueGtag, {
    config: { id: "G-EZCE3LETTC" }
})

library.add(fas)


app.component('fa', FontAwesomeIcon)
app.use(Router)

app.mount('#app')
