<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.error?.message} | Datapack Hub</title>
</svelte:head>

<main
	id="main-content"
	class="flex h-screen w-full flex-col items-center justify-center px-4 sm:px-8 md:flex-row md:justify-start md:px-16 lg:px-24"
>
	<p
		class="mb-8 w-full text-center font-console text-8xl font-bold md:mb-0 md:w-1/2 md:text-9xl lg:text-[10rem] xl:text-[12rem] text-white animate-pulse"
	>
		{$page.status}
	</p>
	<div class="w-full md:w-1/2">
		<p
			class="mb-6 text-center font-console text-4xl font-bold md:text-left md:text-5xl lg:text-6xl xl:text-7xl text-white"
		>
			{$page.error?.message}
		</p>
		<p class="text-center text-lg md:text-left md:text-xl lg:text-2xl text-white/40">
			Something happened!
		</p>
	</div>
</main>
