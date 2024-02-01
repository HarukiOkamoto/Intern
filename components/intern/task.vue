<template>
  <div class="ContentArea">
    <div class="ContentHead">
      <h1>{{ data.BigTitle }}</h1>
      <h4>{{ data.intro }}</h4>
    </div>
    <div
      class="ContentSericeArea"
      v-for="content in data.contents"
      :key="content.ContentId"
    >
      <div class="contentHead">
        <h2>{{ content.ContentTitle }}</h2>
        <NuxtLink :to="generateURL(content.ContentId)">Link</NuxtLink>
        <h4>{{ content.ContentIntro }}</h4>
      </div>
      <div
        v-for="service in content.services"
        :key="service.ServiceId"
      >
        <p>{{ service.ServiceTitle }}</p>
        <p>{{ service.ServiceIntro }}</p>
        <p>{{ service.ServiceStar }}</p>
        <p>{{ service.ServicePrice }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mock } from '@/types/mock';

const route = useRoute();
const { id } = route.params;
const key = String(id);
const data = Mock[key];

const generateURL = (contentId: number) => {
  let dynamicURL = '';
  switch (contentId) {
    case 1:
      dynamicURL = 'https://test?id=500';
      break;
    case 2:
      dynamicURL = 'https://test?id=750';
      break;
    default:
      console.error('Unsupported ContentId');
  }
  return dynamicURL;
};
</script>
