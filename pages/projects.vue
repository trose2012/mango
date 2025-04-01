<template>
  <div>
    <h1 class="text-4xl font-bold text-white">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-zinc-800 p-4 rounded-lg shadow-md"
      >
        <h2 class="text-xl font-semibold text-white">{{ project.name }}</h2>
        <p class="text-gray-300 mt-2">{{ project.description }}</p>
        <NuxtLink
          :to="project.link"
          class="text-green-400 hover:underline mt-4 block"
        >
          View Project
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Description of project 1",
    link: "/project-1",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description of project 2",
    link: "/project-2",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description of project 3",
    link: "/project-3",
  },
];
</script>
