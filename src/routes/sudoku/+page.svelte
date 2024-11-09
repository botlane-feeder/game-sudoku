<script lang="ts">
    import Sudoku from "../../components/sudoku/Sudoku.svelte";
    export let data

</script>

<h1>Bienvenu au Sudoku</h1>

<Sudoku bind:squareArray={data["sudoku"]}/>