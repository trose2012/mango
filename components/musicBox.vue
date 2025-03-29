<template>
  <div
    class="fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out"
    :class="{ 'w-72': expanded, 'w-12': !expanded }"
  >
    <div
      class="bg-zinc-900 rounded-full shadow-lg p-2 m-0 relative overflow-hidden transition-all duration-500"
      :class="{ 'pl-12 pr-4 py-3': expanded }"
    >
      <!-- Album Cover -->
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

      <!-- Play/Pause Button for collapsed state -->
      <button
        v-if="!expanded"
        @click="toggleExpandAndPlay"
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

      <!-- Music controls for expanded state -->
      <div v-if="expanded" class="flex items-center justify-between">
        <div class="flex-1 min-w-0 overflow-hidden m-0 p-0">
          <div class="overflow-hidden whitespace-nowrap">
            <div class="text-white text-sm truncate">
              {{ currentSong.title }}
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center space-x-2 ml-2">
          <!-- Pause Button -->
          <button
            v-if="isPlaying"
            @click="togglePlay"
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

          <!-- Play Button -->
          <button
            v-else
            @click="togglePlay"
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

          <!-- Next Button -->
          <button
            @click="playNext"
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
      ref="audioPlayer"
      :src="`/music/${currentSong.src}`"
      @ended="playNext"
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
];

const expanded = ref(false);
const isPlaying = ref(false);
const audioPlayer = ref(null);
const canPlay = ref(false);

const currentIndex = ref(0); // fix ssr error
const currentSong = computed(() => songs[currentIndex.value]);
onMounted(() => {
  currentIndex.value = Math.floor(Math.random() * songs.length);
  audioPlayer.value.load();
  audioPlayer.value.volume = 0.3;
  console.log("currentSong", currentSong.value);
  console.log("audioPlayer", audioPlayer.value);
  console.log("canPlay", canPlay.value);
});

const togglePlay = async () => {
  console.log("togglePlay");
  if (!canPlay.value) {
    console.log("audio not ready???");
  }
  if (isPlaying.value) {
    console.log("pause");
    audioPlayer.value.pause();
    isPlaying.value = false;
    expanded.value = false;
  } else {
    console.log("play");
    try {
      await audioPlayer.value.play();
      isPlaying.value = true;
    } catch (err) {
      console.error("Error playing audio:", err);
      isPlaying.value = false; // kill
    }
  }
  console.log("isPlaying", isPlaying.value);
};

const toggleExpandAndPlay = async () => {
  console.log("toggleExpandAndPlay");
  expanded.value = true;
  await nextTick(); // wait for next
  if (!canPlay.value) {
    console.log("audio not ready???");
    playNext(); // fuck you we move on
    const waitForAudioReady = new Promise((resolve) => {
      const onCanPlayThrough = () => {
        canPlay.value = true;
        audioPlayer.value.removeEventListener(
          "canplaythrough",
          onCanPlayThrough
        );
        resolve();
      };
      audioPlayer.value.addEventListener("canplaythrough", onCanPlayThrough);
    });
    await waitForAudioReady;
  }

  try {
    console.log("play");
    await audioPlayer.value.play();
    isPlaying.value = true;
  } catch (err) {
    console.error(err);
    isPlaying.value = false;
    expanded.value = false;
  }
};

const playNext = () => {
  console.log("playing next");
  // make sure we play the audio if not playing already
  setTimeout(() => {
    audioPlayer.value.play();
  }, 50);
  currentIndex.value = (currentIndex.value + 1) % songs.length;
  nextTick(() => {
    if (isPlaying.value && canPlay.value) {
      audioPlayer.value.play().catch((err) => {
        console.error(err);
      });
    }
  });
};

onBeforeUnmount(() => {
  if (audioPlayer.value) {
    console.log("unmounting");
    audioPlayer.value.pause();
    audioPlayer.value.src = "";
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
