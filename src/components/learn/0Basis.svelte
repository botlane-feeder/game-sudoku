<script lang="ts">
  let name: string = "Scarlett";
  let url: string = "https://media1.tenor.com/m/N7OTXDpOnPAAAAAd/scarlett-scarlett-johansson.gif";

  let option:number = 0;
  let arrayContent: { name: string; url: string }[] =[
    {name:"Scarlett", url:"https://media1.tenor.com/m/N7OTXDpOnPAAAAAd/scarlett-scarlett-johansson.gif"},
    {name:"The Rock", url:"https://media1.tenor.com/m/XYFkyIFjyAAAAAAd/rock-dance-rock-meme.gif"}
  ]
  name = arrayContent[option]["name"];
  url = arrayContent[option]["url"];

</script>


<h1>Hello {name}!</h1>
<div class="container">
  <img src={url} alt="{name} is dancing">
  <div class="text">This is {name} dancing because you rock with Svelte !</div>
</div>

<style>
  .container{
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 20px;
    margin-left: 50px;
    width: auto; /* Ajuster la largeur de l'image si nécessaire */
    height: auto; /* Ajuster la hauteur de l'image si nécessaire */
  }
  div.text {
    /* Styles pour la div, par exemple : */
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
  }
</style>