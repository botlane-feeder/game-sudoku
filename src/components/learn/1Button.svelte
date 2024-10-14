<script lang="ts">
  export let count:number = 0;
  function increment(){
    count += 1;
  }
</script>

<button on:click={increment}>You juste clicked {count} {count > 1 ? "times" : "time"}</button>