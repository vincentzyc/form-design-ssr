<template>
  <p>import type should be removed without side-effect</p>
  <p>{{msg}}</p>
</template>

<script setup lang="ts">
import type { Foo } from 'dep-import-type/deep'

const msg: Foo = {
  haha: "hahahahaha"
}
</script>
