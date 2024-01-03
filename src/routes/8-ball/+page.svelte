<script>
	import EightBall from "$lib/components/EightBall.svelte";
	import { onMount } from "svelte";

  onMount(() => {
    const audio = new Audio("dramatic.mp3")
    audio.play()
  })
</script>

<main class="flex w-full h-screen items-center justify-center">
  <div class="animate-eight">
    <EightBall/>
  </div>
</main>
