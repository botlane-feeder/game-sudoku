<script lang="ts">
  
  export let value:number;
  export let editable: boolean = false;

  function handleInput(event: InputEvent) {
    const inputValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 9) {
      value = inputValue;
    }
  }

  function preventScroll(event: InputEvent) {
    event.preventDefault();
  }

</script>

<input
  type="number"
  value={value}
  min=1
  max=9
  readonly={!editable}
  on:change={handleInput}
  on:wheel={preventScroll}
/>


<style>
  /* global.css */
  input[type="number"] {
  width: 3rem;
  height: 3rem;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  background: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  input[type="number"]:focus {
  outline: none;
  border-color: #333;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  /* global.css */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  input[type="number"] {
  -moz-appearance: textfield;
  }


</style>