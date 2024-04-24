<script>
	import { beforeNavigate } from "$app/navigation";
	import EightBall from "$lib/components/EightBall.svelte";
	import { onMount } from "svelte";

  /** @type {HTMLAudioElement} */
  let audio

  onMount(() => {
    audio = new Audio("dramatic.mp3")
    audio.play()
  })

  beforeNavigate(() => {
    audio.pause()
  })
</script>

<main class="flex w-full h-screen items-center justify-center">
  <div class="animate-eight">
    <EightBall/>
  </div>
</main>
