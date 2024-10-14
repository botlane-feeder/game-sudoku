<!-- Square.svelte -->
<script lang="ts">
  import Cell from './Cell.svelte';

  export let cells: number[] = Array(9).fill(0);
  export let editableCells: boolean[] = Array(9).fill(false);

  function handleCellClick(index: number) {
      editableCells[index] = true;
  }
</script>

<div class="square">
  {#each cells as cell, index}
    <Cell value={cell} editable={editableCells[index]} on:click={() => handleCellClick(index)} />
    {#if (index + 1) % 3 === 0}
    <br />
    {/if}
  {/each}
</div>
