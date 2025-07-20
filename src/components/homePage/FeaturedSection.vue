<template>
  <SectionHeading description="Premium Lighting Solutions" title="Top Picks This Month" />
 
  <div class="w-full h-full py-10 md:py-20 relative  flex">
    <Swiper
      :modules="[Autoplay]"
      :space-between="30"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :breakpoints="{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      navigation
      class="w-4/5 drop-shadow-2xl "
    >
      <SwiperSlide v-for="(light, index) in lights" :key="index">
        <CarCards
          :id="light.id"
          :name="light.name"
          :brand="light.brand"
          :price="light.price"
          :image="light.image"
        />
      </SwiperSlide>
    </Swiper>
  </div>
   
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import CarCards from '../cards/CarCards.vue';
import SectionHeading from '../composables/SectionHeading.vue';
import { lights } from '../../data/carsData';
</script>

<style>
/* Optional: Adjust swiper navigation or slide spacing here */
</style>



<!-- <template>
   <SectionHeading description="Premium Lighting Solutions" title="Top Picks This Month"/>

   <div>
      <swiper
         :modules="[Autoplay]"
         :space-between="30"
         navigation
         loop

         :autoplay="{ delay: 3000, disableOnInteraction: false}"
         :breakpoints="{
            640: {slidesPerView: 2},
            1024: {sliderPerView: 3}
         }"
      >
          <wiper-slider v-for="(light, index) in lights" :key="index">
               <CarCards :id="light.id" :name="light.name" :brand="light.brand" :price="light.price" :image="light.image"/>
          </wiper-slider>
      </swiper>
   </div>

    
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/swiper-bundle.css"
import {Autoplay } from 'swiper/modules'
import "swiper/css/autoplay"


import CarCards from '../cards/CarCards.vue';
import SectionHeading from '../composables/SectionHeading.vue';
import {lights} from "../../data/carsData"



</script>

<style>

</style> -->