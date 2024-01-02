<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>COBBLE</title>
  <meta name="description" content="I bet you've never seen a rock program! Fortunately for you, I exist. 🪨">
  <meta property="og:title" content="COBBLE" />
  <meta property="og:description" content="I bet you've never seen a rock program! Fortunately for you, I exist. 🪨" />
  <meta property="og:url" content="https://" />
</svelte:head>

<Navbar />
<main class="bg-stone-900 min-h-screen min-w-full" id="main-content">
	<slot />
</main>
