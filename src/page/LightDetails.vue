<template>
    <BgContainer
      title="Light Detail"
      bgImage="details.png"
      :links="[
        { text: 'Home', to: '/'},
        { text: 'Lights', to: '/lights'},
      ]"

    />
    <div class="flex justify-center p-4 py-10 md:py-20" v-if="light">
        <div class="w-full md:w-4/5">
            <div class="text-center">
                <img v-if="light.image" :src="light.image" alt="image" class="w-full max-h-96 object-cover"/>
                <p class="text-sm md:text-lg text-gray-400 mt-2">{{ light.brand }}</p>
                <h1 class="text-xl md:text-3xl font-medium text-gray-700">{{ light.name }}</h1>
            </div>

            <div class="flex flex-wrap justify-between my-10">
                  <EventLight
                      v-for="(event, index) in events"
                      :key="index"
                      :event="event"            
                  />
            </div>

             <TabsNavigation 
               :lights="lights"
             />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import BgContainer from '../components/composables/BgContainer.vue';
import { lights } from '../data/carsData'
import { CaRss } from '@kalimahapps/vue-icons';
import { onMounted, ref } from 'vue';
import EventLight from "../components/carDetails/EventCard.vue"
import { events } from "../data/carDetails"
import TabsNavigation from '../components/carDetails/TabsNavigation.vue';


const route = useRoute()
const light = ref(null)

const getImage = (imageName) => {
    return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
}

onMounted(() => {
    const lightId = Number(route.params.id)
    light.value = lights.find((l) => l.id == lightId) || { value }
})

</script>

<style>

</style>