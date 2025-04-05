<script setup>
let cleanup = null;
onMounted(async () => {
  const bg = await import("../assets/js/background.ts");

  if (bg.default && typeof bg.default === "function") {
    cleanup = bg.default();
  } else if (bg.init && typeof bg.init === "function") {
    cleanup = bg.init();
  }
});

onBeforeUnmount(() => {
  cleanup();
  if (window) {
    window.removeEventListener("resize", window.onWindowResize);
    document.removeEventListener("mousemove", window.onDocumentMouseMove);
    document.removeEventListener("touchstart", window.onDocumentTouchStart);
    document.removeEventListener("touchmove", window.onDocumentTouchMove);
  }
});
</script>

<template>
  <div
    id="1y3g8bgy8103hdj"
    style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: black;
      pointer-events: none;
    "
  />
</template>
