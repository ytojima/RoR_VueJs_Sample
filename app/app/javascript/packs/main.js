// Vueをインポート
import Vue from 'vue'
// ベースとなるテンプレートをインポート
import App from '../app.vue'
// ルーティングを指定しているスクリプトファイル
import router from '../router/index.js'

/*
    Vueに関連するものをインポートする場合は、以下に記述していきます
 */

// DOMの操作
document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        // ルーティングを読み込み
        router,
        // ベーステンプレートにレンダリングを指示
        render: h => h(App)
    }).$mount()
    // body以下に上記のレンダリング情報を展開
    document.body.appendChild(app.$el)
})