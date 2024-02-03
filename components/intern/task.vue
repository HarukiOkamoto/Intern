<script setup lang="ts">
import { Mock, PathView } from '@/types/mock';

const route = useRoute();
const { id } = route.params;

const data = Mock[id];
const path = PathView;
</script>

<template>
  <div class="Content">
    <h1 class="Content_title">{{ data.BigTitle }}</h1>
    <h4 class="Content_intro">{{ data.intro }}</h4>
    <hr class="Content_hr" />

    <div
      v-for="content in data.contents"
      :key="content.ContentId"
      class="services"
    >
      <div class="services_header">
        <h2 class="services_bigTitle">{{ content.ContentTitle }}</h2>
        <NuxtLink
          class="services_link"
          :to="'/curatios/' + path[content.ContentId]"
          >more view</NuxtLink
        >
      </div>
      <h4 class="services_description">{{ content.ContentIntro }}</h4>
      <!-- サービスここから -->
      <div class="services_block">
        <div
          v-for="service in content.services"
          :key="service.ServiceId"
        >
          <div class="services_item">
            <div class="services_inner">
              <img
                class="services_img"
                src="@/assets/img/image.png"
                alt=""
              />
              <div class="services_blockText">
                <p class="services_intro">{{ service.ServiceIntro }}</p>
                <p class="services_star">{{ service.ServiceStar }}</p>
                <p class="services_price">{{ service.ServicePrice }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Content {
  width: 1040px;
  margin: 0 auto;
  font-family: メイリオ, Meiryo, verdana, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka,
    'ＭＳ\Ｐゴシック', 'MS PGothic', Sans-Serif;
  &_title {
    font-size: 28px;
  }
  &_intro {
    font-size: 19px;
    margin-top: 12px;
  }
  &_hr {
    margin: 40px 0;
  }
}

.services {
  margin-bottom: 32px;
  &_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  &_bigTitie {
    font-size: 20px;
  }
  &_link {
    font-size: 14px;
  }
  &_description {
    font-size: 19px;
    margin-bottom: 12px;
  }
  // ここから5つならべるやつ
  &_block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 250px;
    max-width: 1040px;
  }
  &_inner {
    border: 1px solid #e7eaeb;
  }
  &_item {
    position: relative;
    transition: opacity 0.2s;
    margin: 0 16px 0 0;
    width: 195px;
    &:last-child {
      margin-right: 0; // 最後のアイテムだけ右側の margin を 0 にする
    }
  }
  &_img {
    min-height: 160px;
    height: 160px;
    width: 100%;
    object-fit: contain;
    background-color: #000;
  }
  &_blockText {
    padding: 8px;
  }
  &_intro {
    height: 38px;
    font-size: 13px;
    overflow: hidden;
  }
}
</style>
