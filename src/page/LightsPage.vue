<template>
  <BgContainer
    title="lights"
    bgImage="blog.png"
    :links="[
        { text: 'Home', to: '/'},
        { text: 'Lights', to: '/lights'},
    ]"
  />
    <div class="flex justify-center w-full my-20">
        <div class="grid grid-cols-1 md:grid-cols-3 w-4/5 gap-10">
            <CarCards
              v-for="(light, index) in lights"
              :key="index"
              :id="light.id"
              :name="light.name"
              :price="light.price"
              :image="light.image"
              :brand="light.brand"
            />
        </div>
    </div>
   
</template>

<script setup>
import CarCards from '../components/cards/CarCards.vue';
import BgContainer from '../components/composables/BgContainer.vue';
import { lights } from "../data/carsData"


</script>

<style>

</style>