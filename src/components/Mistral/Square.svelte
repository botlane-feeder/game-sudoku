<!-- Square.svelte -->
<script lang="ts">
    import { createEventDispatcher } from "svelte";
  
    export let value: number;
    export let editable: boolean;
  
    const dispatch = createEventDispatcher();
  
    const dispatchInput = (event: InputEvent) => {
      const inputValue = parseInt((event.target as HTMLInputElement).value, 10);
      const validInput = inputValue >= 1 && inputValue <= 9;
  
      if (validInput) {
        dispatch("input", {
          value: inputValue,
        });
      }
    };
  </script>
  
  <style>
    /* Ajoute tes styles ici */
  </style>
  
  <template>
    <input
      type="number"
      {value}
      min="1"
      max="9"
      on:input={dispatchInput}
      class:editable={editable}
    />
  </template>
  