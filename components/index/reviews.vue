<template>
  <section id="reviews" class="py-16">
    <div
      class="bg-transparent backdrop-blur-[3px] rounded-2xl border border-green-500/20 shadow-xl p-8 w-full transition-all duration-300"
    >
      <h1
        class="text-4xl font-bold mb-8 text-center text-green-400 [text-shadow:0_0_10px_rgba(34,197,94,0.8)]"
      >
        What People Say About Me
      </h1>
      <p class="text-center text-lg mb-8">
        Here is what some of my friends and clients have to say about me.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
        >
          <div class="flex items-center mb-4">
            <img
              :src="review.pfp"
              :alt="review.name"
              class="h-10 w-10 rounded-full border-2 border-green-500 mr-4"
            />
            <h3 class="text-lg font-semibold text-green-400">
              {{ review.name }}
            </h3>
          </div>
          <p class="text-white">{{ review.msg }}</p>
        </div>
      </div>
      <p class="text-center text-md mt-8">
        Needless to say, I have worked with a lot of people and have made a lot
        of friends. I am always open to working with new people, so feel free to
        reach out to me if you want to work on a project together or just want
        to chat!
      </p>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: "RJTHEBOSS on LocalCoinSwap",
    pfp: "/img/lcs_default.png",
    msg: "Such an honest guy. He really trust people and have a lot patience really glad to find him to trade",
  },
  {
    name: "Firepup Sixfifty",
    pfp: "/img/firepup.png",
    msg: "3kh0's cool tbh :3 Like they're genuinely nice to talk to and hang out with, highly recommend just yapping to them sometime :3",
  },
  {
    name: "shokz",
    pfp: "/img/shokz.png",
    msg: "He is an awesome exchanger with low fees and fast to work with, thank you so much!",
  },
  {
    name: "Franz",
    pfp: "/img/franz.png",
    msg: "There are very few people that you can trust fully in life, and he is definitely on the list as a business partner and a friend <3",
  },
  {
    name: "Deployer",
    pfp: "/img/deployer.png",
    msg: "Echo is such a cool guy! He’s incredibly caring, he even donated a dollar to me! :3 He’s super helpful and truly seems like an amazing developer. The projects he creates always work so well, and I'm constantly impressed by how bug-free they are!",
  },
  {
    name: "Suya",
    pfp: "/img/suya.png",
    msg: "A \"slightly\" privacy obsessed gay furry nerd. That doesn\'t narrow it down whatsoever, but it does mean he\'s cool (which is is indeed :3)",
  },
];
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
