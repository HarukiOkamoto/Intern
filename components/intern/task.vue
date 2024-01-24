<template>
  <div class="ContentArea">
    <div class="ContentHead">
      <h1>{{ Mock[key].BigTitle }}</h1>
      <h4>{{ Mock[key].intro }}</h4>
    </div>
    <div class="ContentSericeArea" v-for="(content, index) in Mock[key].contents" :key="index">
      <div class="contentHead">
        <h2>{{ content.ContentTitle }}</h2>
        <h4>{{ content.ContentIntro }}</h4>
      </div>
      <div v-for="(service, index) in content.services" :key="index">
        <p>{{ service.ServiceTitle }}</p>
        <p>{{ service.ServiceIntro }}</p>
        <p>{{ service.ServiceStar }}</p>
        <p>{{ service.ServicePrice }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mock } from '@/types/mock.ts';

const route = useRoute();
const { id } = route.params;
const key = String(id);
</script>
