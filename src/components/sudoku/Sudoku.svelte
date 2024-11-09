<script lang="ts">
  import Square from "./Square.svelte";
  import {getDuplicatesNumber} from './utils.ts';

  export let squareArray:number[][];

  let succeed:boolean = false;

  function handleDuplicates(){
    verifyRows();
    verifyColumns();
  }
  function verifyRows(){
    let rowList:number[][]=getRowsFromSquares();
    let checkRow:number[][]=[];
    for (let index = 0; index < rowList.length; index++) {
      checkRow.push( getDuplicatesNumber(rowList[index]) );
    }

    // console.log(checkRow);
  }
  function verifyColumns(){

  }

  // Contrôle et valide le sudoku en entier
  function checkSudoku():boolean{
    let succeed:boolean=true;
    // Vérifie que toutes les cellules contiennent un nombre entre 1 et 9
    succeed = succeed && isValuesGood(); // console.log("Are values Good : "+isValuesGood());
    // Vérifie tous les carrés
    succeed = succeed && isSquaresGood(); // console.log("Are squares Good : "+isSquaresGood());
    // Vérifie toutes les lignes
    succeed = succeed && isRowsGood(); // console.log("Are rows Good : "+isRowsGood());
    // Vérifie toutes les colonnes
    succeed = succeed && isColumnsGood(); // console.log("Are colums Good : "+isColumnsGood());
    return succeed;
  }
  function isValuesGood():boolean{
    let allGood:boolean=true;
    for (let x = 0; x < 9; x++) {
      for (let y = 0; y < 9; y++) {
        if( squareArray[x][y] > 9 || squareArray[x][y] < 1)
         allGood=false;
      }
    }
    return allGood;
  }
  function isSquaresGood():boolean{
    let allGood:boolean=true;
    for (let iSquare = 0; iSquare < 9; iSquare++) {
      if( getDuplicatesNumber(squareArray[iSquare]).length > 0 )
        allGood=false;
    }
    return allGood;
  }
  function isRowsGood():boolean{
    let allGood:boolean=true;
    let rows:number[][] = getRowsFromSquares();
    for (let iRow = 0; iRow < 9; iRow++) {
      if( getDuplicatesNumber(rows[iRow]).length > 0 )
        allGood=false;
    }
    return allGood;
  }
  function isColumnsGood():boolean{
    let allGood:boolean=true;
    let columns:number[][] = getColumnsFromSquares();
    for (let iColumn = 0; iColumn < 9; iColumn++) {
      if( getDuplicatesNumber(columns[iColumn]).length > 0 )
        allGood=false;
    }
    return allGood;
  }
  /** Retourne un tableau par ligne
   */
  function getRowsFromSquares():number[][]{
    let rows:number[][] = [];
    // 0.0,0.1,0.2, 1.0,1.1,1.2, ...
    // 0.3,0.4,0.5, 1.3,1.4,1.5, ...
    // 0.6,0.7,0.8, 1.6,1.7,1.8, ...
  
    // 3.0,3.1,3.2, 4.0,4.1,4.2, ...
    // 3.3,3.4,3.5, 4.3,4.4,4.5, ...
    // 3.6,3.7,3.8, 4.6,4.7,4.8, ...
    let initX = 0;
    let initY = 0;

    for (let squareCounter = 0; squareCounter < 3; squareCounter++) {
      for (let rowCounter = 0; rowCounter < 3; rowCounter++) {
        let oneRow:number[]=[];
        for (let x = initX+0; x < initX+3; x++) {
          for (let y = initY+0; y < initY+3; y++) {
            oneRow.push( squareArray[x][y] );
          }
        }
        rows.push( oneRow );
        initY+=3;
        // console.log(oneRow);
      }
      initX+=3;
      initY=0;
    }
    // console.log(rowList);
    return rows;
  }
  /** Retourne un tableau par colonne
   */
  function getColumnsFromSquares():number[][]{
    let columns:number[][] = [];
    // 0.0,0.3,0.6, 3.0,3.3,3.3, 6.0,6.3,6.6
    // 0.1,0.4,0.7, 3.1,3.4,3.7, 6.1,6.4,6.7
    // 0.2,0.5,0.8, 3.2,3.5,3.8, 6.2,6.5,6.8
  
    // 1.0,1.3,1.6, 4.0,4.3,4.3, 7.0,7.3,7.6
    // 1.1,1.4,1.7, 4.1,4.4,4.7, 7.1,7.4,7.7
    // 1.2,1.5,1.8, 4.2,4.5,4.8, 7.2,7.5,7.8
    let initX = 0;
    let initY = 0;

    for (let squareCounter = 0; squareCounter < 3; squareCounter++) {
      for (let columnCounter = 0; columnCounter < 3; columnCounter++) {
        let oneColumn:number[]=[];
        for (let x = initX+0; x < initX+9; x+=3) {
          for (let y = initY+0; y < initY+9; y+=3) {
            oneColumn.push( squareArray[x][y] );
          }
        }
        columns.push( oneColumn );
        initY+=1;
        // console.log(oneColumn);
      }
      initX+=1;
      initY=0;
    }
    // console.log(columns);
    return columns;
  }
  
</script>

{#if succeed}
<div>BRAVO !</div>
{:else}
<div>Bonne chance ...</div>
{/if}

{#each Array(9) as value, index}
  <Square
    bind:cellsValue={squareArray[index]}
    on:cellChanged={()=>{
      // updateData();
      handleDuplicates();
      succeed = checkSudoku();
    }}
  />
  {#if (index+1)%3 == 0}
    <br>
  {/if}
{/each}
<!--
<-->

<style>

</style>