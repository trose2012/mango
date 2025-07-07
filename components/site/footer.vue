<template>
  <footer
    ref="footer"
    class="fixed bottom-0 left-0 right-0 px-3 sm:px-4 md:px-6 transition-all duration-500 ease-in-out"
    :class="{
      'translate-y-full': !visible,
      'translate-y-[calc(100%-4rem)]': !expanded,
    }"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="bg-transparent backdrop-blur-[3px] border border-green-500/20 rounded-t-2xl transition-all duration-300"
      >
        <div
          class="h-16 flex items-center justify-center cursor-pointer"
          @click="toggle"
        >
          <div class="flex items-center gap-2 text-green-400">
            <Icon
              name="fa6-solid:chevron-up"
              class="h-6 w-6 transition-transform duration-500"
              :class="{ 'rotate-180': expanded }"
            />
            <span class="text-sm"
              >Click to {{ expanded ? "hide" : "show" }} more</span
            >
          </div>
        </div>

          <!-- fuggin links and shi-->
          <div class="text-center text-md text-gray-400 space-y-2 mb-4">
            <p class="flex items-center justify-center gap-4">
              <a
                href="https://github.com/trose2012/mango"
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-400 hover:underline flex items-center gap-1"
              >
                <Icon name="radix-icons:github-logo" size="1.25rem" />
                Source
              </a>
            </p>
            <p class="flex items-center justify-center gap-1">
              This website was originally made by 3kh0 — not me. You should check him out at 3kh0.net; he’s a great guy and a way better coder. I just made a few edits to this site.
            </p>
            <p class="flex items-center justify-center gap-1">
              Dedicated to the friends that have fallen and the ones that
              continue to fight.
            </p>
          </div>
        </div>
    </div>
  </footer>
</template>

<script setup>
const footer = ref(null);
const expanded = ref(false);
const visible = ref(false);
let lastScrollY = 0;

const toggle = () => {
  expanded.value = !expanded.value;
};

const scrolling = () => {
  const wy = window.scrollY;
  const wh = window.innerHeight;
  const dh = document.documentElement.scrollHeight;
  const dtob = dh - (wy + wh);
  const goingUp = wy < lastScrollY;
  const nearBottom = dtob < 250;

  if (nearBottom) {
    visible.value = true;
  } else if (goingUp && !nearBottom && wy < dh - wh - 100) {
    visible.value = false;
    expanded.value = false;
  }

  lastScrollY = wy;
};

const clickOut = (event) => {
  if (expanded.value && footer.value && !footer.value.contains(event.target)) {
    expanded.value = false;
  }
};

onMounted(() => {
  document.addEventListener("scroll", scrolling, { passive: true });
  document.addEventListener("click", clickOut);
  scrolling();
});

onUnmounted(() => {
  document.removeEventListener("scroll", scrolling);
  document.removeEventListener("click", clickOut);
});
</script>

<style scoped>
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

img.hover\:scale-110 {
  transform-origin: center;
  will-change: transform;
}
</style>
