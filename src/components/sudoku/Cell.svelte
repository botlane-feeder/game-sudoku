<!-- Composant Cell, uniquement d'affichage -->
<script lang="ts">
  export let value:number=-1;
  export let duplicates:boolean=true;
  export let editable:boolean=true;
  $: displayValue = editable ? (value >= 1 && value <= 9 ? value : '') : value;
</script>

<input
  name=""
  id=""
  type="number"
  class="{duplicates?'red-border':'black-border'}"
  bind:value={displayValue}
  on:change
  on:click={(event)=>{event.target.select()}}
/>

<style>
  input{
    width: 3rem;
    height: 3rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    background: #fff;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    border: 1px solid #ccc;
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .red-border{
    border: 1px solid red;
  }
  .black-border{
    border: 1px solid #ccc;
  }
</style>