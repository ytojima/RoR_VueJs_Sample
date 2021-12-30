// Vueをインポート
import Vue from 'vue'
// VueRouterをインポート
import Router from 'vue-router'
// Vueで使用を宣言
Vue.use(Router)

// ページテンプレート
import top from '../templates/index'

// ルーティングを記述
const router =  new Router({
    // HTML5 History モード
    // ref : https://router.vuejs.org/ja/guide/essentials/history-mode.html
    mode: 'history',
    routes: [
        // ルートパスを記述
        {path: '/', name: 'top', component: top},
    ]
})

// routerをmain.jsに戻す
export default router