<script setup>
let cleanup = null;
onMounted(async () => {
  const a = await import("../assets/js/background.ts");

  if (a.default && typeof a.default === "function") {
    cleanup = a.default();
  } else if (a.init && typeof a.init === "function") {
    cleanup = a.init();
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
