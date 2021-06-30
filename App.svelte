<script>
  import ShouldInject from "./ShouldInject.svelte";
  import ShouldNotInject from "./ShouldNotInject.svelte";
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<ShouldInject />
  <ShouldNotInject />
</main>
