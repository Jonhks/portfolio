import Vue from 'vue'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  M.Parallax.init(elems);
});







import App from './App.vue'
Vue.config.productionTip = false

// Vue.use(materialize)


new Vue({
  render: h => h(App),
}).$mount('#app')


