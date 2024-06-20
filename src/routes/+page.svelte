<script>
	import anime from "animejs";
	import { Github } from "lucide-svelte";
	import { Globe } from "lucide-svelte";
  import { onMount } from "svelte";

  onMount(() => {
    document.querySelectorAll(".split-letter").forEach((el) => {
      el.innerHTML = el.innerHTML
        .split("")
        .map(
          (letter, i) =>
            `<span class="letter">${letter}</span>`
        )
        .join("");
    })

    anime.timeline({loop: false})
    .add({
      targets: '.letter',
      scale: [2,1],
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 700,
      delay: (_, i) => 75 * (i+1)
    })
    .add({
      targets: '.waving-hand',
      rotate: ["12deg","0deg","12deg","0deg"],
      easing: "easeOutExpo",
      duration: 700
    })
  })
</script>

<section class="bg-lime-700 px-4 sm:px-8 md:px-16 py-32 shadow-lg shadow-lime-900 mb-32">
  <h1 class="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[15rem] font-bold leading-none w-min"><span class="split-letter anime-word">Hello</span><p class="waving-hand inline-block align-top letter origin-bottom-right">👋</p>, it's Cobblestone!</h1>
  <p class="text-2xl md:text-3xl lg:text-4xl pt-8 text-opacity-70 text-neutral-200">I bet you've never seen a rock program! Fortunately for you, I exist.</p>
</section>

<section class="px-4 sm:px-8 md:px-16">
  <h2 class="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">Programming</h2>
  <p class="text-neutral-200 text-opacity-70 my-4 lg:text-2xl md:text-xl sm:text-lg text-base">I'm a programmer. I write code. I love it.</p>

  <div class="flex my-4">
    <a href="https://github.com/HoodieRocks"><Github color="white" /></a>
  </div>

  <p class="text-white lg:text-xl md:text-lg sm:text-md text-sm">I'm an aspiring full stack developer. Currently learning about backend technologies such as Postgres, Go, and Rust. I'm knowledgable in frontend technologies such as Svelte and JS.</p>
  <p class="text-white lg:text-xl md:text-lg sm:text-md text-sm">I'm also a huge fan of the open source community. If I can find a way I can contribute, I'd love to.</p>
</section>

<section class="px-4 sm:px-8 md:px-16 mt-32">
  <h2 class="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">Hobbyist</h2>
  <p class="text-neutral-200 text-opacity-70 my-4 lg:text-2xl md:text-xl sm:text-lg text-base">I have a lot of hobbies.</p>

  <div class="flex my-4">
    <a href="https://github.com/Simbotics"><Github color="white" /></a>
    <a href="https://simbotics.org"><Globe color="white" /></a>
  </div>

  <p class="text-white lg:text-xl md:text-lg sm:text-md text-sm">I'm quite the hobbyist. I play trumpet, listen to music, and play video games. I'm part of a robotics group and love to build and program said robots.</p>
  <p class="text-white lg:text-xl md:text-lg sm:text-md text-sm">Of course, until I am hired, I program for fun and as a hobby.</p>
</section>

<section class="px-4 sm:px-8 md:px-16 py-32">
  <h2 class="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">"Knowledge Enthusiast"</h2>
  <p class="text-neutral-200 text-opacity-70 my-4 lg:text-2xl md:text-xl sm:text-lg text-base">I'd like to thank AI for this title.</p>

  <p class="text-white lg:text-xl md:text-lg sm:text-md text-sm">I love learning new things and am always looking for new ways to improve.</p>
  <p class="text-white lg:text-xl md:text-lg sm:text-md text-sm">My current learn list goes as follows:</p>

  <ul class="text-white lg:text-xl md:text-lg sm:text-md text-sm list-disc ml-8 mt-4">
    <li>Networking (social and computer)</li>
    <li>DSA</li>
    <li>Performance Optimization</li>
    <li>How people play Cities: Skylines 2 and not have horrible traffic</li>
  </ul>
  <p class="text-white lg:text-lg md:text-base sm:text-sm text-xs mt-4 text-opacity-50">(The last one is honestly just a me problem)</p>
</section>
