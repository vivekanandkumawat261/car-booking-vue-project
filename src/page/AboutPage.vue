<template>
   <BgContainer
     title="About"
     bgImage="about.png"
     :links="[
        {text: 'Home', to: '/'},
        {text: 'About Us', to:'/about'},
     ]"
   />
   <AboutUs/>
   <CallToAction/>
   <TestimonySection/>
   <StatisticsSection/>
</template>

<script setup>
import BgContainer from '../components/composables/BgContainer.vue';
import AboutUs from '../components/homePage/AboutUs.vue';
import CallToAction from '../components/homePage/CallToAction.vue';
import StatisticsSection from '../components/homePage/StatisticsSection.vue';
import TestimonySection from '../components/homePage/TestimonySection.vue';

 
</script>

<style>

</style>