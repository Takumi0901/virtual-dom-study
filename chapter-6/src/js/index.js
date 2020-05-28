import h from './createElement'
import { App } from './app'

const state = {
  accounts: [
    {
      id: 1,
      name: 'リオネル・メッシ',
      team: 'FCバルセロナ',
      description:
        'アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード (wikipedia)',
      isFollow: false
    },
    {
      id: 2,
      name: 'クリスティアーノ・ロナウド',
      team: 'Juventus',
      description:
        'ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード (wikipedia)',
      isFollow: true
    },
    {
      id: 3,
      name: 'ネイマール',
      team: 'パリサンジェルマン',
      description:
        'ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード (wikipedia)',
      isFollow: false
    }
  ]
}

const actions = {
  follow(state, id) {
    const accounts = state.accounts.map((f) => {
      if (f.id === id) {
        return { ...f, isFollow: !f.isFollow }
      } else {
        return f
      }
    })

    return { ...state, accounts }
  }
}

const accountItem = (account, action, state) => {
  return h('div', {
    attrs: {},
    children: [
      h('div', {
        attrs: {
          class: 'account__summary'
        },
        children: [
          h('div', {
            attrs: {},
            children: [
              h('p', {
                attrs: {
                  class: 'account__name'
                },
                children: [account.name]
              }),
              h('p', {
                attrs: {
                  class: 'account__team'
                },
                children: [account.team]
              })
            ]
          }),
          h('div', {
            attrs: {},
            children: [
              h('button', {
                attrs: {
                  type: 'button',
                  class: `followBtn ${account.isFollow ? 'isFollow' : ''}`,
                  onclick: () => {
                    action.follow(state, account.id)
                  }
                },
                children: [account.isFollow ? 'フォロー中' : 'フォローする']
              })
            ]
          })
        ]
      }),
      h('p', {
        attrs: {
          class: 'account__description'
        },
        children: [account.description]
      })
    ]
  })
}

const view = (state, action) =>
  h('ul', {
    attrs: {
      class: 'accountList'
    },
    children: state.accounts.map((e) => {
      return h('li', {
        attrs: {
          class: 'accountList__item'
        },
        children: [accountItem(e, action, state)]
      })
    })
  })

new App({
  el: '#app',
  view,
  state,
  actions
})