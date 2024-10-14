<script lang="ts">
  let fibonacciValue0:number = 0;
  let fibonacciValue1:number = 1;
  $: fibonacciValue = fibonacciValue0+fibonacciValue1;

  function increment(){
    fibonacciValue0=fibonacciValue1;
    fibonacciValue1=fibonacciValue;
  }
  let fullname:string="";
  $: lastName = fullname.split(' ')[1]!==undefined?fullname.split(' ')[1]:"";
  $: firstName = fullname.split(' ')[0];
</script>

<button on:click={increment}>Fibonacci value is {fibonacciValue}</button>

<label for="fullname">Enter your full name</label>
<input id="fullname" type="text" bind:value={fullname}/>
<span>Your name is {lastName.toUpperCase()} {firstName}</span>