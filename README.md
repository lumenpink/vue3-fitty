# Vue3 Fitty

Fitty text wrapper for Vue 3

This is a fork/update to Vue 3 and TypeScript of the [vue-fitty](https://github.com/schlunsen/vue-fitty) package from [Rasmus Schlünsen](https://github.com/schlunsen)

[![npm (scoped with tag)](https://img.shields.io/npm/v/vue3-fitty/latest.svg?style=flat-square)](https://npmjs.com/package/vue3-fitty)
[![npm](https://img.shields.io/npm/dt/vue3-fitty.svg?style=flat-square)](https://npmjs.com/package/vue3-fitty)
[![Dependencies](https://david-dm.org/lohn/vue3-fitty/status.svg?style=flat-square)](https://david-dm.org/schlunsen/vue-fitty)
![ts](https://flat.badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

## Usage

```
<template>
    <div>
        <!-- Wrap your component with Fitty -->
        <fitty :options="options">

              <h1>FITTED TEXT HERE</h1>

        </fitty>
    </div>
</template>
import Fitty from 'vue3-fitty'
import MyAwesomeComponent from 'my/aweseome/path'

// Install plugin
Vue.use(Fitty)

export default {
  data: () => ({
      options: {
        minSize: 11,
        maxSize: 120,
      }
  }),
  components: {
    MyAwesomeComponent
  }
  ...
}

```
