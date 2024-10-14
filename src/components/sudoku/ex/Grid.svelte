<!-- Grid.svelte -->
<script lang="ts">
  import Square from './Square.svelte';

  let squares: number[][] = Array(9).fill(0).map(() => Array(9).fill(0));
  let editableSquares: boolean[][] = Array(9).fill(0).map(() => Array(9).fill(false));

  function handleSquareClick(row: number, col: number) {
    editableSquares[row][col] = true;
  }
</script>

<div class="grid">
  {#each squares as square, row}
    <Square cells={square} editableCells={editableSquares[row]} on:click={(index) => handleSquareClick(row, index)} />
    {#if (row + 1) % 3 === 0}
      <br />
    {/if}
  {/each}
</div>
