<template>
  <meta
    http-equiv="onion-location"
    content="http://aqjeignx5ussinaa64hq3s2phleke6jmworiqe2tmlh4kctklyq6pjqd.onion"
  />
  <div>
    <noscript>
      <div
        class="fixed inset-0 bg-black z-51 flex flex-col justify-center items-center"
      >
        <img
          src="~/assets/media/cry.png"
          alt="No JS"
          class="w-32 h-32 object-contain"
        />
        <p class="text-red-500 text-xl text-center p-4 max-w-2xl font-semibold">
          Aww dang it! It seems like you have JavaScript disabled. Please enable
          it as I got a bunch of cool features that need it.
        </p>
        <p class="text-white text-xl text-center p-4 max-w-2xl">
          If you are looking for a more simple and secure experience, you can
          visit the
          <a
            class="underline"
            href="http://aqjeignx5ussinaa64hq3s2phleke6jmworiqe2tmlh4kctklyq6pjqd.onion"
            >hidden service version</a
          >
          instead.
        </p>
      </div>
    </noscript>
    <div
      class="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center o duration-500"
      :class="{ 'opacity-0': b, 'opacity-0 hidden': !a }"
    >
      <img
        src="~/assets/media/sock.gif"
        alt="Loading..."
        class="w-32 h-32 object-contain"
      />
      <p class="text-white mt-4 text-xl p">
        {{ rm }}
      </p>
    </div>
    <Header />

    <div class="flex flex-col items-center justify-center min-h-screen">
      <slot />
    </div>
    <StarBackground />
    <MusicBox />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
const a = ref(true);
const b = ref(false);
const m = [
  "Stealing your information...",
  "Hacking into the mainframe...",
  "Laundering money...",
  "Making up a random excuse...",
  "Centering a div...",
  "Working on updates 99%...",
  "Don't turn off your PC. This will take a while...",
  "Testing your patience...",
  "Adjusting the space-time continuum...",
  "Minting your dox to the blockchain...",
  "Pulling up to the function...",
  "Taking a mindfulness minute...",
  "You are number 28434714 in the queue...",
  "99 bottles of beer on the wall..",
  "One mississippi, two mississippi...",
  "Ensuring Gnomes are still short...",
  "Quiting vim...",
  "Adding more :3...",
  "Pressing ALT+F4...",
  "Mixing the coins...",
  "Fleeing to a third-world country...",
  "Running from the feds...",
  "Noticing the fake jays...",
  "Stealing the handle...",
  "You have been placed in a queue, awaiting forwarding to the platform...", // dread reference
  "Your estimated wait time is 600 minutes...",
  "Finding the meaning of life...",
  "Pushing this stupid rock up a hill...",
  "Spreading the woke mind virus...",
];
const rm = ref(m[0]);

onMounted(() => {
  a.value = true; // Show the loader only when JavaScript is enabled

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
  animation: p 0.7s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
