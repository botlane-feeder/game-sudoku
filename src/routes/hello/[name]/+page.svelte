<script lang="ts">
    import type { PageData } from './$types';
	
	export let data: PageData;
    export let name: String;

    console.log(data);
    name = data.name;
</script>

<h1>Hello {name.toUpperCase()}</h1>

