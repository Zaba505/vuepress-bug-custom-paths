<template>
  <div>
    <ul>
      <li v-for="r in $router.getRoutes()"> {{r.path}} - isAlias: {{ !!r.aliasOf }} </li>
    </ul>

    <router-link :to="{ path: '/projects', force: true }">Projects</router-link> |
    <router-link to="/custom">Custom</router-link>

    <br>

    {{ $route.path }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  setup() {
    return {};
  }
})
</script>
