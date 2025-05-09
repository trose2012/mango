<template>
  <div class="text-white min-h-screen">
    <div class="max-w-6xl mx-auto px-4">
      <section
        id="intro"
        class="min-h-screen flex flex-col items-center justify-center py-16"
      >
        <div
          class="bg-transparent backdrop-blur-[3px] rounded-2xl border border-green-500/20 shadow-xl p-8 w-full transition-all duration-300 slide"
        >
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div
              class="text-center md:text-left flex flex-col justify-center h-full space-y-6 md:flex-1"
            >
              <h1
                class="text-5xl md:text-6xl font-bold text-green-400 [text-shadow:0_0_10px_rgba(34,197,94,0.8)]"
              >
                Hi, I am Chroma!
              </h1>
              <p
                class="text-xl leading-relaxed text-white max-w-xl mx-auto md:mx-0"
              >
                I am a 12 year old web developer, and hacker. I like to make
                cool things, help out others, and
                procrastinate.
              </p>
            </div>
            <div class="relative">
              <div
                class="absolute -inset-1 bg-green-500 rounded-full blur opacity-50"
              ></div>
              <img
                src="~/assets/media/splash.png"
                alt="echo profile picture"
                class="relative w-64 h-64 rounded-full border-5 border-green-500 border-opacity-30 object-cover"
              />
            </div>
          </div>
          <div class="mt-12 text-center">
            <button
              @click="downTwo"
              class="animate-bounce bg-white/5 hover:bg-white/10 rounded-full p-3 transition-all duration-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section id="skills" class="py-16">
        <div
          class="bg-transparent backdrop-blur-[3px] rounded-2xl border border-green-500/20 shadow-xl p-8 w-full transition-all duration-300"
        >
          <h1
            class="mb-8 text-4xl font-bold text-center text-green-400 [text-shadow:0_0_10px_rgba(34,197,94,0.8)]"
          >
            Things I Can Do
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
            >
              <h3
                class="text-xl font-semibold mb-3 text-green-400 flex items-center"
              >
                <img
                  src="/svg/front.svg"
                  alt="Front"
                  class="h-6 w-6 mr-2 flex-shrink-0"
                />
                <span>Frontend</span>
              </h3>
              <p class="text-white">
                I am a front-end software developer by trade, so I know my way
                around HTML, CSS, and JavaScript. I am also good with web
                tooling such as
                <a
                  href="https://vuejs.org/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Vue.js</a
                >,
                <a
                  href="https://tailwindcss.com/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >TailwindCSS</a
                >, and
                <a
                  href="https://nuxt.com/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Nuxt</a
                >.
              </p>
            </div>
            <div
              class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
            >
              <h3
                class="text-xl font-semibold mb-3 text-green-400 flex items-center"
              >
                <img
                  src="/svg/back.svg"
                  alt="Back"
                  class="h-6 w-6 mr-2 flex-shrink-0"
                />
                <span>Backend</span>
              </h3>
              <p class="text-white">
                Backend development is not my strong suit, but I still know how
                to use things like
                <a
                  href="https://nodejs.org"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >node.js</a
                >,
                <a
                  href="https://expressjs.com/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Express</a
                >,
                <a
                  href="https://supabase.com/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Supabase</a
                >,
                <a
                  href="https://mongodb.com/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >MongoDB</a
                >, and a few other lesser-known technologies.
              </p>
            </div>
            <div
              class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
            >
              <h3
                class="text-xl font-semibold mb-3 text-green-400 flex items-center"
              >
                <img
                  src="/svg/csgo.svg"
                  alt="CS:GO"
                  class="h-6 w-6 mr-2 flex-shrink-0"
                />
                <span>Counter-Strike</span>
              </h3>
              <p class="text-white">
                My favorite game by far. I sometimes mess with the source engine
                and
                <a
                  href="https://sourcemod.net/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >SourceMod</a
                >
                making mods and plugins for
                <a
                  href="https://steamdb.info/app/730/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Counter-Strike</a
                >. Most of these are just for fun, so don't expect them to be
                public any time soon.
              </p>
            </div>
            <div
              class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
            >
              <h3
                class="text-xl font-semibold mb-3 text-green-400 flex items-center"
              >
                <img
                  src="/svg/security.svg"
                  alt="Shield"
                  class="h-6 w-6 mr-2 flex-shrink-0"
                />
                <span>Sysadmin + Infosec</span>
              </h3>
              <p class="text-white">
                I also have experience with managing
                <a
                  href="https://status.3kh0.net/status/3kh0"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >a bunch of servers</a
                >
                and setting up things like
                <a
                  href="https://nginx.org/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >nginx</a
                >,
                <a
                  href="https://www.haproxy.org/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >HAProxy</a
                >
                and
                <a
                  href="https://squid-cache.org/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Squid</a
                >. Cybersecurity and exploit hunting are fields I am working on
                getting into. I have a reported a vulnerability to
                <a
                  href="https://www.coinbase.com"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Coinbase</a
                >
                with
                <a
                  href="https://hackerone.com/3kh0"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >HackerOne</a
                >.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" class="py-16">
        <div
          class="bg-transparent backdrop-blur-[3px] rounded-2xl border border-green-500/20 shadow-xl p-8 w-full transition-all duration-300"
        >
          <h1
            class="text-4xl font-bold mb-8 text-center text-green-400 [text-shadow:0_0_10px_rgba(34,197,94,0.8)]"
          >
            Other Cool Things
          </h1>
          <div
            class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 p-6 mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
          >
            <h3
              class="text-xl font-semibold mb-4 text-green-400 flex items-center"
            >
              <img
                src="/svg/heart.svg"
                alt="Heart"
                class="h-6 w-6 mr-2 flex-shrink-0"
              />
              <span>Giving back</span>
            </h3>
            <p class="text-white mb-4">
              I am fortunate to be able to do what I love, so I like to give
              back to groups that help others! I donate to several organizations
              that promote privacy, security, expression, and freedom. Some of
              these include:
            </p>
            <div class="flex flex-wrap gap-3 mb-4">
              <a
                href="https://signal.org"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Signal Foundation</a
              >
              <a
                href="https://www.accessnow.org/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >AccessNow</a
              >
              <a
                href="https://eff.org/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Electronic Frontier Foundation</a
              >
              <a
                href="https://torproject.org/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Tor Project</a
              >
              <a
                href="https://riseup.net/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Riseup</a
              >
              <a
                href="https://tails.net/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >TailsOS</a
              >
              <a
                href="https://ccs.getmonero.org/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Monero Project</a
              >
              <a
                href="https://www.amnesty.org/en/tech/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Amnesty International</a
              >
              <a
                href="https://fightforthefuture.org/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Fight for the Future</a
              >
              <a
                href="https://cdt.org/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Center for Democracy and Technology</a
              >
              <a
                href="https://hackclub.com/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >Hack Club</a
              >
              <a
                href="https://nothingtohide.nl/"
                class="inline-block px-3 py-1 bg-black/40 border border-green-500/20 rounded-full text-white text-sm transition-all duration-200 hover:bg-green-500/20 hover:no-underline"
                >N0TH1NG T0 H1D3</a
              >
            </div>
            <div
              class="bg-black/40 backdrop-blur-[3px] rounded-xl border border-green-500/15 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-black/50 hover:border-green-500/30"
            >
              <h3
                class="text-xl font-semibold mb-3 text-green-400 flex items-center"
              >
                <img
                  src="/svg/hc.svg"
                  alt="Hack Club"
                  class="h-6 w-6 mr-2 flex-shrink-0"
                />
                <span>Hack Clubber</span>
              </h3>
              <p class="text-white">
                I am proud to be a member of
                <a
                  href="https://hackclub.com/"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >Hack Club</a
                >, a global network of high school hackers and makers. I am
                happy to have met many amazing people and learned a lot from
                them and I have to thank them for the unintended levels of
                motivation they have given me. If you are on the Slack,
                <a
                  href="https://hackclub.slack.com/team/U08LX7762F7"
                  class="text-green-400 hover:underline transition-all duration-200"
                  >shoot me a message!</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>

      <IndexReviews />

      <section id="final" class="py-16 mb-60">
        <div
          class="bg-transparent backdrop-blur-[3px] rounded-2xl border border-green-500/20 shadow-xl p-8 w-full transition-all duration-300"
        >
          <h1
            class="text-4xl font-bold mb-8 text-center text-green-400 [text-shadow:0_0_10px_rgba(34,197,94,0.8)]"
          >
            Is That All?
          </h1>
          <p class="text-xl text-center text-white mb-12">
            Far from it! Check out the nav bar for some other cool links or use
            this fancy button below to see my other projects
          </p>
          <div class="flex justify-center">
            <NuxtLink
              to="/projects"
              class="relative inline-flex items-center px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:no-underline border-green-500/40 border-1 hover:border-green-500"
            >
              <span class="text-white">View My Projects</span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const downTwo = () => {
  const skills = document.getElementById("skills");
  if (skills) {
    skills.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  setTimeout(() => {
    document.querySelector(".slide").classList.add("slide-done");
  }, 10);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".bg-black\\/70, .bg-black\\/40")
    .forEach((card) => {
      observer.observe(card);
    });
});
</script>

<style scoped>
@keyframes a {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade {
  animation: a 0.6s ease forwards;
}

.slide {
  opacity: 0;
  transform: translateY(50px);
  will-change: transform, opacity;
}

.slide-done {
  opacity: 1;
  transform: translateY(0);
  transition:
    transform 0.8s ease-out,
    opacity 0.8s ease-out;
}

img[src^="/svg/"] {
  filter: brightness(0) saturate(100%) invert(64%) sepia(21%) saturate(4291%)
    hue-rotate(103deg) brightness(102%) contrast(96%);
}
</style>
