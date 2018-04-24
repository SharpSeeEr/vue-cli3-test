import Vue from 'vue'

export function createRange (length) {
  return [...Array(length).keys()]
}

const ignore = [
  'beforeCreate',
  'beforeDestroy',
  'render',
  'staticRenderFns',
  '_Ctor',
  '__file',
  '__esModule'
]

export function registerComponents (imported) {
  for (let item in imported) {
    if (ignore.indexOf(item) > -1) continue
    Vue.component(item, imported[item])
  }
}