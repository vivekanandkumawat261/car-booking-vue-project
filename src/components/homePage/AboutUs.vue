<template>
  <section class="w-full bg-[#1b5392] text-white py-16 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      <!-- Image Section -->
      <div class="w-full md:w-[40%] flex justify-center">
        <img
          src="../../assets/images/citylight.png"
          alt="City Light showroom"
          class="w-full max-w-[32rem] h-auto object-cover rounded shadow-lg"
        />
      </div>

      <!-- Text Section -->
      <div class="w-full md:w-[60%] space-y-6">
        <h2 class="text-sm font-semibold uppercase tracking-wide">About Us</h2>
        <h1 class="text-2xl md:text-4xl font-semibold">Welcome to City Lights, Sikar</h1>

        <p class="text-base leading-relaxed">
          Discover premium lighting, electrical solutions, and  essentials at our flagship showroom on Bajaj Road.
        </p>
        <p class="text-base leading-relaxed">
          Experience the finest brands, expert guidance, and professional service—all under one roof.
        </p>

        <!-- Custom Button Component -->
        <ButtonComponent text="Explore Our Collection" />
      </div>
    </div>
  </section>
</template>


<!-- <template> -->

     <!-- <div class="relative w-full md:h-screen">
  <div class="sm:absolute bg-[#1b5392] w-full sm:w-2/3 md:h-[92%] top-0 right-0 pb-10">
    <div class="sm:absolute -inset-x-1/3 inset-y-20 mb-4 md:mb-0">  
            <img src="../../assets/images/citylight.png"
                 alt="" class="md:max-w-[32rem] h-auto object-cover"
            >
          </div>
    <div class="text-white px-4 sm:absolute right-1/3 sm:w-2/5 sm:transform sm:top-2/4 sm:-translate-y-2/3">
      <h2 class="text-sm font-semibold mb-4 uppercase tracking-wide">About Us</h2>
      <h1 class="text-2xl md:text-4xl font-semibold mb-4">Welcome to City Lights, Sikar</h1>

      <p class="text-base mb-6">
        Discover premium lighting, electrical solutions, and luxury car essentials at our flagship showroom on Bajaj Road.
      </p>
      <p class="text-base mb-6">
        Experience the finest brands, expert guidance, and professional service—all under one roof.
      </p>
      <ButtonComponent text="Explore Our Collection"/>
    </div>
  </div>
</div> -->


    <!-- <div class="relative w-full h-screen">
        <div class="sm:absolute bg-[#1b5392] w-full sm:w-2/3 md:h-[92%] top-0 right-0 pb-10">
          <div class="sm:absolute -inset-x-1/3 inset-y-20 mb-4 md:mb-0">  
            <img src="../../assets/images/citylight.png"
                 alt="" class="md:max-w-[32rem] h-auto object-cover"
            >
          </div>
          <div class="text-white px-4 sm:absolute right-1/5 sm:w-2/4 sm:transform sm:top-2/4 sm:-translate-y-2/3">
              <h2 class="text-sm font-semibold mb-4 uppercase tracking-wide">About Us</h2>
              <h1 class="text-2xl md:text-4xl font-semibold mb-4">Welcome to Carbook</h1>

              <p class="text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non quas nesciunt eos itaque nostrum corrupti ullam omnis unde sequi.</p>
              <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos tenetur numquam dolore, veniam quia? Neque suscipit saepe minus amet!</p>
               <ButtonComponent text="Search Vehicle"/>
          </div>
        </div>
    </div> -->
  <!-- <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      
      <div class="w-full md:w-1/2">
        <img
          src="../../assets/images/1.png"
          alt="City Light showroom or lighting setup"
          class="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

       
      <div class="w-full md:w-1/2 space-y-6">
        <h2 class="text-4xl font-bold text-gray-800">
          About <span class="text-amber-500">City Light</span>
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          At <strong>City Light</strong>, we believe lighting isn't just about illumination —
          it’s about inspiration. From elegant chandeliers to smart LED solutions, we offer
          carefully curated designs that blend innovation, sustainability, and style.
        </p>
        <p class="text-gray-600 text-lg leading-relaxed">
          With over a decade of experience, our products have brightened thousands of homes,
          hotels, and workspaces across India. We're proud to bring beauty and energy efficiency
          together under one roof.
        </p>
        <button class="mt-4 px-6 py-3 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition">
          Explore Products
        </button>
      </div>
    </div>
  </section> -->
<!-- </template> -->


<script setup>
import ButtonComponent from '../composables/ButtonComponent.vue';
 
</script>

<style>

</style>