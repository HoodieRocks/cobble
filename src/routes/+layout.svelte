<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>COBBLE | Home</title>
</svelte:head>

<Navbar />
<main class="bg-stone-900 min-h-screen min-w-full" id="main-content">
	<slot />
</main>
