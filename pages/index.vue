<template>
  <div class="text-white min-h-screen">
    <!-- Main content container -->
    <div class="max-w-4xl mx-auto px-4">
      <!-- Hero Section - Full height -->
      <section
        id="intro"
        class="min-h-screen flex flex-col items-center justify-center py-16"
      >
        <div class="backdrop-card w-full">
          <div
            class="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div class="text-center md:text-left">
              <h1 class="text-5xl md:text-6xl font-bold text-green-400 mb-6">
                Hi, I am Echo!
              </h1>
              <p class="text-xl leading-relaxed text-white max-w-xl">
                I am a 16 year old software developer, hacker, furry,
                cybersecurity enthusiast, and privacy activist. I like to make
                cool things, help out others, obsess over privacy, and
                procrastinate.
              </p>
            </div>
            <div class="relative">
              <div
                class="absolute -inset-2 bg-green-500 rounded-full blur opacity-50"
              ></div>
              <NuxtImg
                src="https://wsrv.nl/?url=extra.3kh0.net/img/art/xmr_hoodie.png?bust&w=200&h=200&fit=cover&output=png"
                alt="Echo's Avatar"
                class="relative w-48 h-48 rounded-full border-5 border-green-500 border-opacity-30 object-cover"
              />
            </div>
          </div>
          <div class="mt-12 text-center">
            <button
              @click="scrollToSkills"
              class="animate-bounce bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 cursor-pointer"
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

      <!-- Skills Section - Normal flow -->
      <section id="skills" class="py-16">
        <div class="backdrop-card w-full">
          <h1 class="mb-8 text-4xl font-bold text-center text-green-400">
            Things I Can Do
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="skill-card">
              <h3 class="text-xl font-semibold mb-3 text-green-400">
                Frontend
              </h3>
              <p class="text-white">
                I am a front-end software developer by trade, so I know my way
                around HTML, CSS, and JavaScript. I am also good with web
                tooling such as
                <a
                  href="https://vuejs.org/"
                  class="text-green-400 hover:underline"
                  >Vue.js</a
                >,
                <a
                  href="https://tailwindcss.com/"
                  class="text-green-400 hover:underline"
                  >TailwindCSS</a
                >, and
                <a
                  href="https://nuxt.com/"
                  class="text-green-400 hover:underline"
                  >Nuxt</a
                >.
              </p>
            </div>
            <div class="skill-card">
              <h3 class="text-xl font-semibold mb-3 text-green-400">Backend</h3>
              <p class="text-white">
                Backend development is not my strong suit, but I still know how
                to use things like
                <a
                  href="https://nodejs.org"
                  class="text-green-400 hover:underline"
                  >node.js</a
                >,
                <a
                  href="https://expressjs.com/"
                  class="text-green-400 hover:underline"
                  >Express</a
                >,
                <a
                  href="https://supabase.com/"
                  class="text-green-400 hover:underline"
                  >Supabase</a
                >,
                <a
                  href="https://mongodb.com/"
                  class="text-green-400 hover:underline"
                  >MongoDB</a
                >, and a few other lesser-known technologies.
              </p>
            </div>
            <div class="skill-card">
              <h3 class="text-xl font-semibold mb-3 text-green-400">
                Counter-Strike
              </h3>
              <p class="text-white">
                My favorite game by far. I sometimes mess with the source engine
                and
                <a
                  href="https://sourcemod.net/"
                  class="text-green-400 hover:underline"
                  >SourceMod</a
                >
                making mods and plugins for
                <a
                  href="https://steamdb.info/app/730/"
                  class="text-green-400 hover:underline"
                  >Counter-Strike</a
                >. Most of these are just for fun, so don't expect them to be
                public any time soon.
              </p>
            </div>
            <div class="skill-card">
              <h3 class="text-xl font-semibold mb-3 text-green-400">
                Sysadmin + Infosec
              </h3>
              <p class="text-white">
                I also have experience with managing
                <a
                  href="https://status.3kh0.net/status/3kh0"
                  class="text-green-400 hover:underline"
                  >a bunch of servers</a
                >
                and setting up things like
                <a
                  href="https://nginx.org/"
                  class="text-green-400 hover:underline"
                  >nginx</a
                >,
                <a
                  href="https://www.haproxy.org/"
                  class="text-green-400 hover:underline"
                  >HAProxy</a
                >
                and
                <a
                  href="https://squid-cache.org/"
                  class="text-green-400 hover:underline"
                  >Squid</a
                >. Cybersecurity and exploit hunting are fields I am working on
                with one exploit report in
                <a
                  href="https://www.coinbase.com"
                  class="text-green-400 hover:underline"
                  >Coinbase</a
                >
                with
                <a
                  href="https://hackerone.com/3kh0"
                  class="text-green-400 hover:underline"
                  >HackerOne</a
                >.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Privacy Section - Normal flow -->
      <section id="privacy" class="py-16">
        <div class="backdrop-card w-full">
          <h1 class="text-4xl font-bold mb-8 text-center text-green-400">
            Other Cool Things
          </h1>
          <div class="inner-card mb-8">
            <h3 class="text-xl font-semibold mb-4 text-green-400">
              Giving back
            </h3>
            <p class="text-white mb-4">
              I am fortunate to be able to do what I love, so I like to give
              back to orginazations that help others. I donate to several
              organizations that promote privacy, security, and freedom. Some of
              these organizations include:
            </p>
            <div class="flex flex-wrap gap-3 mb-4">
              <a href="https://signal.org" class="badge-link"
                >Signal Foundation</a
              >
              <a href="https://www.accessnow.org/" class="badge-link"
                >AccessNow</a
              >
              <a href="https://eff.org/" class="badge-link"
                >Electronic Frontier Foundation</a
              >
              <a href="https://torproject.org/" class="badge-link"
                >Tor Project</a
              >
              <a href="https://riseup.net/" class="badge-link">Riseup</a>
              <a href="https://tails.net/" class="badge-link">TailsOS</a>
              <a href="https://ccs.getmonero.org/" class="badge-link"
                >Monero Project</a
              >
              <a href="https://www.amnesty.org/en/tech/" class="badge-link"
                >Amnesty International</a
              >
              <a href="https://fightforthefuture.org/" class="badge-link"
                >Fight for the Future</a
              >
            </div>
            <p class="text-white">
              I also run/sponsor several Tor and Monero nodes for the public and
              I donate to
              <a
                href="https://github.com/3kh0?tab=sponsoring"
                class="text-green-400 hover:underline"
                >developers that contribute valuable software to the world</a
              >!
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="inner-card h-full">
              <h3 class="text-xl font-semibold mb-3 text-green-400">
                Ooo fluffy!
              </h3>
              <p class="text-white">
                I also happen to be a furry! I know, how original. My fursona is
                a silly little fox boy with three tails. If you'd like to learn
                more and see art of him, check out my
                <a
                  href="https://extra.3kh0.net/fursona"
                  class="text-green-400 hover:underline"
                  >fursona page</a
                >!
              </p>
            </div>
            <div class="inner-card h-full">
              <h3 class="text-xl font-semibold mb-3 text-green-400">
                Writings
              </h3>
              <p class="text-white">
                I also have a blog where I post about random things that
                interest me. You can check it out at
                <a
                  href="https://blog.3kh0.net"
                  class="text-green-400 hover:underline"
                  >blog.3kh0.net</a
                >.
              </p>
            </div>
            <div class="inner-card h-full">
              <h3 class="text-xl font-semibold mb-3 text-green-400">
                P2P Trading
              </h3>
              <p class="text-white">
                Back when
                <a
                  class="text-green-400 hover:underline"
                  href="https://localmonero.co/"
                  >LocalMonero</a
                >
                was a thing, I used to trade Monero. I have since moved to
                <a
                  class="text-green-400 hover:underline"
                  href="https://localcoinswap.com/"
                  >LocalCoinSwap</a
                >
                and I pride myself in offering competitive rates and best in
                class service, as shown by
                <a
                  class="text-green-400 hover:underline"
                  href="https://localcoinswap.com/profile/3kh0_"
                  >my 5 star rating with over $24,000 traded.</a
                >
              </p>
            </div>
            <div class="inner-card h-full">
              <h3 class="text-xl font-semibold mb-3 text-green-400">
                Steam afficionado
              </h3>
              <p class="text-white">
                I also play other games besides Counter-Strike. I have a
                <a
                  href="https://steamcommunity.com/id/3kh0_/"
                  class="text-green-400 hover:underline"
                  >Steam account</a
                >
                with just shy of 800 games and enough hours to shatter reality.
                Then I have a
                <a
                  href="https://steamcommunity.com/id/haha-im-in-your-url-bar"
                  class="text-green-400 hover:underline"
                  >dedicated account</a
                >
                for Counter-Strike where I have clocked in many hours and hold
                <a
                  href="https://steamcommunity.com/id/haha-im-in-your-url-bar/inventory/#730"
                  class="text-green-400 hover:underline"
                  >about $2,359 USD worth of skins</a
                >
                at the time of writing
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Section - Normal flow -->
      <section id="final" class="py-16">
        <div class="backdrop-card w-full">
          <h1 class="text-4xl font-bold mb-8 text-center text-green-400">
            Is That All?
          </h1>
          <p class="text-xl text-center text-white mb-12">
            Far from it! Check out the nav bar for some other cool links or use
            this fancy button below to see my other projects
          </p>
          <div class="flex justify-center">
            <NuxtLink to="/projects" class="glow-button">
              <span class="text-white">View My Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Smooth scroll to skills section
const scrollToSkills = () => {
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: "smooth" });
  }
};

// Add a subtle parallax effect on scroll
onMounted(() => {
  // Optional: Add scroll animations for elements coming into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all section cards
  document
    .querySelectorAll(".backdrop-card, .skill-card, .inner-card")
    .forEach((card) => {
      observer.observe(card);
    });
});
</script>

<style scoped>
/* Base styles */
.backdrop-card {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  border-radius: 1rem;
  border: 1px solid rgba(22, 163, 74, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  border-radius: 0.75rem;
  border: 1px solid rgba(22, 163, 74, 0.15);
  padding: 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.5);
  border-color: rgba(22, 163, 74, 0.3);
}

.inner-card {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  border-radius: 0.75rem;
  border: 1px solid rgba(22, 163, 74, 0.15);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.inner-card:hover {
  background-color: rgba(0, 0, 0, 0.5);
  border-color: rgba(22, 163, 74, 0.3);
}

.badge-link {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(22, 163, 74, 0.2);
  border-radius: 9999px;
  color: white;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.badge-link:hover {
  background-color: rgba(22, 163, 74, 0.2);
  text-decoration: none;
}

.glow-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.glow-button::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #4ade80, #06b6d4);
  border-radius: 0.6rem;
  z-index: -1;
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.glow-button:hover {
  transform: translateY(-2px);
  text-decoration: none;
}

.glow-button:hover::before {
  opacity: 0.8;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

a {
  transition: all 0.2s ease;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Animation for elements coming into view */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}
</style>
