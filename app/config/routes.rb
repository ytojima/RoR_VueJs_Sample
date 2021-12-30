Rails.application.routes.draw do
  # トップページとして、すべてのVue Routerのページを集約する
  root 'homes#index'

  #
  # APIを記述する場合は、こちらに記述
  #

  # これより上に記述されたルーティングがなければ、
  # すべてのパスをhomes#indexを受け取る
  get '*path', to: 'homes#index'
end
