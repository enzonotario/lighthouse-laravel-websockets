import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { apollo } from './apollo';

Vue.config.productionTip = false;
Vue.mixin({ methods: { route: window.route } });
Vue.use(InertiaApp);
Vue.use(VueApollo);

let app = document.getElementById('app');

new Vue({
  apolloProvider: apollo,
  render: h =>
    h(InertiaApp, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
      },
    }),
}).$mount(app);
