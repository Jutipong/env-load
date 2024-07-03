<script setup lang="ts">
import { useEnv } from './loadEnv';

const env = useEnv();
</script>

<template>
  <div>
    <pre>{{env}}</pre>
  </div>
</template>