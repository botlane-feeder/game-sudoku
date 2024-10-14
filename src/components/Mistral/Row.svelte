<!-- Row.svelte -->
<script>
  import Square from "./Square.svelte";

  export let squares = [];
</script>

<style>
  /* Ajoute tes styles ici */
</style>

<template>
  <div class="row">
    {#each squares as square, index}
      <Square value={square.value} editable={square.editable} />
    {/each}
  </div>
</template>
