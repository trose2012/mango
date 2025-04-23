<template>
  <div class="text-white min-h-screen flex items-center justify-center">
    <div class="max-w-6xl w-full px-4">
      <div
        class="bg-transparent backdrop-blur-[3px] rounded-2xl border border-green-500/20 shadow-xl p-8 w-full transition-all duration-300"
      >
        <h1
          class="text-5xl md:text-6xl font-bold text-green-400 my-8 text-center [text-shadow:0_0_10px_rgba(34,197,94,0.8)]"
        >
          Not sure what happened there...
        </h1>
        <p class="text-xl text-center text-white mb-12 max-w-2xl mx-auto">
          I don't know what you were looking for, but it's not here. Maybe try
          <NuxtLink
            to="/"
            class="text-green-400 hover:text-green-500 transition-all duration-200"
            >going back to the homepage</NuxtLink
          >? You might find something interesting there!
        </p>
      </div>
    </div>
  </div>
</template>
