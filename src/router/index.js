import Vue from 'vue'
import qs from 'qs'
import $preview from 'vue2-preview'
Vue.use($preview);
require('promise.prototype.finally').shim();

let baseURL = '';
if(process.env.NODE_ENV === 'production'){
  baseURL = '/h5-web'
}

const router = [
  {
    name: 'CustomerInsideDetail',
    url: baseURL + '/page/customerSideDetail/index.html',
  },
  {
    name: 'cancelAllot',
    url: baseURL + '/page/cancelAllot/index.html',
  },
  {
    name: 'stockDetail',
    url: baseURL+ "/page/stockDetail/index.html",
  },
  {
    name: 'subscribeDetail',
    url: baseURL+ "/page/matSubscribeDetail/index.html",
  }


];

Vue.prototype.$router = {

  push(item){
    for (var i=0;i<router.length;i++){
      if(item.name == router[i].name){
        let newParams = qs.stringify(item.params);
        //console.log(newParams);
        //window.location.href = router[i].url + '?' + newParams
        let openUrl = router[i].url + '?' + newParams;
        window.open(openUrl);
      }
    }
  },
  params : location.search.substring(0)
};


export default router;





