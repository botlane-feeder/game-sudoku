<script lang="ts">
  export let count:number = 0;
  function increment(){
    count += 1;
  }
  let arrayToScour:string[] = ["red","blue","green","orange","yellow","grey"];
</script>

<button on:click={increment}>You juste clicked {count} {count > 1 ? "times" : "time"}</button>

{#if count > 10}
<div>It's a lot</div>
{/if}

<ul>
  {#each ["a","b","c","d","e","f"] as i, j}
  <li>{j+1+ " - "+i}</li>
  {/each}
</ul>
<ul>
  {#each arrayToScour as i, j}
  <li>{j+1+ " - "+i}</li>
  {/each}
</ul>