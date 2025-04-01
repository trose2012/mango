<template>
  <div>
    <h1 class="text-4xl font-bold text-white">Contact Me</h1>
    <form class="mt-6 space-y-4">
      <div>
        <label for="name" class="block text-gray-300">Name</label>
        <input
          id="name"
          type="text"
          class="w-full p-2 rounded bg-zinc-800 text-white"
        />
      </div>
      <div>
        <label for="email" class="block text-gray-300">Email</label>
        <input
          id="email"
          type="email"
          class="w-full p-2 rounded bg-zinc-800 text-white"
        />
      </div>
      <div>
        <label for="message" class="block text-gray-300">Message</label>
        <textarea
          id="message"
          rows="4"
          class="w-full p-2 rounded bg-zinc-800 text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  </div>
</template>
