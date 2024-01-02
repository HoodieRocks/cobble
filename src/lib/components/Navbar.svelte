<script>
	import { randomLetter } from '$lib/utils/letters';
	import { onMount } from 'svelte';

	/** @type {HTMLAnchorElement}*/
	let nameInstance;
	let interval = 0;

	onMount(() => {
		// Get the text content from the paragraph
		const paragraph = nameInstance.textContent;

		// Split the text into an array of letters
		const letters = paragraph?.split('');

		// Create separate tags for each letter
		const letterTags = letters?.map((letter, i) => `<span id="logo-l-${i}">${letter}</span>`);

		// Join the tags together and set as HTML content in a new container
		nameInstance.innerHTML = letterTags?.join('') || 'This will never happen';
	});

	function nameHoverHandler() {
		const children = [...nameInstance.children];

		interval = setInterval(() => {
			children.forEach((e) => {
				e.textContent = randomLetter();
			});
		}, 10);
	}

	// TODO text animation
	function nameBlurHandler() {
		const children = [...nameInstance.children];
		const logoText = 'COBBLE';
		children.forEach((e, i) => {
			e.textContent = logoText.charAt(i);
		});
		clearInterval(interval);
	}
</script>

<header>
	<a
		href="#main-content"
		class="text-white p-2 rounded-full fixed border-b-4 border-violet-900 bg-violet-600 left-1/2 -translate-x-1/2 -top-16 focus:top-8 transition-all"
	>
		Jump to Content!
	</a>
	<nav class="flex items-center justify-around p-2 fixed w-full text-white">
		<a
			id="nav_logo"
			href="/"
			bind:this={nameInstance}
			class="text-2xl font-bold font-mono"
			on:focus={nameHoverHandler}
			on:mouseenter={nameHoverHandler}
			on:click={nameBlurHandler}
			on:blur={nameBlurHandler}
			on:mouseleave={nameBlurHandler}>COBBLE</a
		>
		<a href="/#about">About</a>
		<a href="/#things">Things</a>
		<a href="/info">Info</a>
	</nav>
</header>
