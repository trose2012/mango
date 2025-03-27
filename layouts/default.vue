<template>
  <div>
    <div
      v-if="a"
      class="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center o duration-500"
      :class="{ 'opacity-0': b, 'opacity-0 hidden': !a }"
    >
      <!--eslint-disable-next-line vue/html-self-closing-->
      <img
        src="~/assets/media/sock.gif"
        alt="Loading..."
        class="w-32 h-32 object-contain"
      />
      <p class="text-white mt-4 text-xl p">
        {{ rm }}
      </p>
    </div>
    <slot />
    <StarBackground />
    <MusicBox />
  </div>
</template>

<script setup>
const a = ref(true);
const b = ref(false);
const m = [
  "Stealing your information...",
  "Hacking into the mainframe...",
  "Laundering money...",
  "Making up a random excuse...",
  "Centering a div...",
];
const rm = ref(m[0]);
onMounted(() => {
  const i = setInterval(() => {
    const ri = Math.floor(Math.random() * m.length);
    rm.value = m[ri];
  }, 1000);

  const c = new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  const d = new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
    } else {
      window.addEventListener("load", resolve);
    }
  });
  Promise.all([c, d]).then(() => {
    b.value = true;
    clearInterval(i);

    setTimeout(() => {
      a.value = false;
    }, 500);
  });
});
</script>
<style scoped>
.o {
  transition: opacity 0.5s ease-in-out;
}

.p {
  animation: p 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes p {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}
</style>
