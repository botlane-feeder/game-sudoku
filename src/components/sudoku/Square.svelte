<script lang="ts">
  import Cell from "./Cell.svelte";
  import { createEventDispatcher } from 'svelte';
  import {getDuplicatesNumber} from './utils.ts';

  const dispatch = createEventDispatcher();

  let cells:[] = [];
  export let cellsValue:number[]=[2,3,4,-1,6,9,7,1];
  let cellDuplicates:boolean[]=Array(9);
  let cellEditables:boolean[]=[true,true,true,true,true,true,true,true,true];

  function handleCellChange(i:number, event: Event){
    let newCellsValue:number = event.target.value == "" ? -1:event.target.valueAsNumber;
    cellsValue[i]=newCellsValue;
  }
  //Gère les nombres doublons
  function handleDuplicates(){
    //Récupère les doublons
    let duplicates:number[] = getDuplicatesNumber(cellsValue);
    //Reconnais et modifie les doublons
    for (let i = 0; i < cellDuplicates.length; i++) {
      cellDuplicates[i]=duplicates.includes(i);
    }
  }
  //Initialise les données des doublons
  handleDuplicates();
</script>

<div class="square">
  {#each Array(9) as value, i}
    <Cell
    bind:value={cellsValue[i]}
    bind:duplicates={cellDuplicates[i]}
    bind:editable={cellEditables[i]}
    on:change
    on:change={ (event)=>{
      handleCellChange(i, event);
      handleDuplicates();
      dispatch("cellChanged");
    }}
    />
    {#if ((i+1)%3===0) }
    <br>
    {/if}
  {/each}
</div>

<style>
.square{
  display:inline-block;
  margin: 5px;
}
</style>