<template>
  <div
    class="fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out"
    :class="{ 'w-72': expanded, 'w-12': !expanded }"
  >
    <div
      class="bg-zinc-900 rounded-full shadow-lg p-2 m-0 relative overflow-hidden transition-all duration-500"
      :class="{ 'pl-12 pr-4 py-3': expanded }"
    >
      <div
        v-if="expanded"
        class="absolute left-0 m-0 top-1/2 transform -translate-y-1/2 w-10 h-10 overflow-hidden transition-all duration-500"
      >
        <NuxtImg
          :src="`/music/${currentSong.src.replace('.mp3', '.png')}`"
          :alt="currentSong.title"
          class="w-full h-full object-cover rounded-full shadow-md spin"
        ></NuxtImg>
      </div>

      <button
        v-if="!expanded"
        @click="firstPlay"
        class="w-8 h-8 flex items-center justify-center text-white rounded-full hover:text-green-400 transition-colors p-0 m-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div v-if="expanded" class="flex items-center justify-between">
        <div class="flex-1 min-w-0 overflow-hidden m-0 p-0">
          <div class="overflow-hidden whitespace-nowrap">
            <div class="text-white text-sm truncate">
              {{ currentSong.title }}
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-2 ml-2">
          <button
            v-if="playing"
            @click="play"
            class="text-white hover:text-green-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button
            v-else
            @click="play"
            class="text-white hover:text-green-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button
            @click="skip"
            class="text-white hover:text-green-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.06Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <audio
      ref="player"
      :src="`/music/${currentSong.src}`"
      @ended="skip"
      volume="0.3"
      @canplaythrough="canPlay = true"
    ></audio>
  </div>
</template>

<script setup>
const songs = [
  { title: "fauxx - enby", src: "music1.mp3" },
  { title: "snuffles - too late", src: "music2.mp3" },
  { title: "phimtown & fauxx - spinnin round my head", src: "music3.mp3" },
  { title: "blackwinterwells - IRIS", src: "music4.mp3" },
  { title: "{ELSEIF} & Aural Alliance - HEAL", src: "music5.mp3" },
  { title: "fauxx & deers - downtown dreams", src: "music6.mp3" },
  { title: "Frizk & Tanger - tiny windows", src: "music7.mp3" },
  { title: "Fly To The Night - Wreck", src: "music8.mp3" },
  { title: "do not resurrect - Philosophy of a Knife", src: "music9.mp3" },
  { title: "meganeko - Moonflowers", src: "music10.mp3" },
  { title: "Vansire - Metamodernity", src: "music11.mp3" },
  { title: "молчат дома - судно (Борис Рыжий)", src: "music12.mp3" },
  { title: "Galibri & Mavik - Федерико Феллини", src: "music13.mp3" },
  { title: "Never Get Used To People - Life Letters", src: "music14.mp3" },
  { title: "Swaige - GET SILLY!!", src: "music15.mp3" },
  { title: "juno - hero", src: "music16.mp3" },
  { title: "Motorama - Alps", src: "music17.mp3" },
  { title: "Lime Garden - Distant", src: "music18.mp3" },
  { title: "Timebomb Zone - The Prodigy", src: "music19.mp3" },
  { title: "Ugovhb, EF - WTF 2 (sped up)", src: "music20.mp3" },
  { title: "DJ TWI$T II - Where U From?", src: "music21.mp3" },
  { title: "Frizk - Oh Yeah?", src: "music22.mp3" },
  { title: "GASPXR - RETRY!", src: "music23.mp3" },
  { title: "Powernerd - Dark Triads", src: "music24.mp3" },
  { title: "Marzuku - Valley of Fools", src: "music25.mp3" },
  { title: "KSLV Noh - OVERRIDE", src: "music26.mp3" },
];

const expanded = ref(false);
const playing = ref(false);
const player = ref(null);
const canPlay = ref(false);
const current = ref(0); // ssr
const currentSong = computed(() => songs[current.value]);

onMounted(() => {
  current.value = Math.floor(Math.random() * songs.length);
  player.value.load();
  player.value.volume = 0.3;
});

const play = async () => {
  if (!canPlay.value) {
  }
  if (playing.value) {
    player.value.pause();
    playing.value = false;
    expanded.value = false;
  } else {
    try {
      await player.value.play();
      playing.value = true;
    } catch (err) {
      console.error(err);
      playing.value = false; // kill
    }
  }
};

const firstPlay = async () => {
  expanded.value = true;
  await nextTick(); // wait for next
  if (!canPlay.value) {
    skip(); // fuck you we move on
    const waitForAudioReady = new Promise((resolve) => {
      const onCanPlayThrough = () => {
        canPlay.value = true;
        player.value.removeEventListener("canplaythrough", onCanPlayThrough);
        resolve();
      };
      player.value.addEventListener("canplaythrough", onCanPlayThrough);
    });
    await waitForAudioReady;
  }

  try {
    await player.value.play();
    playing.value = true;
  } catch (err) {
    console.error(err);
    playing.value = false;
    expanded.value = false;
  }
};

const skip = () => {
  setTimeout(() => {
    player.value.play();
  }, 50);
  current.value = (current.value + 1) % songs.length;
  nextTick(() => {
    if (playing.value && canPlay.value) {
      player.value.play().catch((err) => {
        console.error(err);
      });
    }
  });
};

onBeforeUnmount(() => {
  if (player.value) {
    player.value.pause();
    player.value.src = "";
  }
});
</script>

<style scoped>
@keyframes a {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spin {
  animation: a 10s linear infinite;
}
</style>
