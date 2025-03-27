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
        <p class="text-red-500 text-xl text-center p-4">
          Ruh roh! I need JavaScript to run. If you don't want to enable it and
          are scared of technology, you can visit the
          <a
            class="underline"
            href="http://aqjeignx5ussinaa64hq3s2phleke6jmworiqe2tmlh4kctklyq6pjqd.onion"
            >onion site</a
          >
          instead.
        </p>
      </div>
    </noscript>

    <!-- Loader -->
    <div
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
