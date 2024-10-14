<!-- App.svelte -->
<div class="container">
    <nav class="navbar">
      <div class="logo">Logo</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/sudoku">Sudoku</a></li>
      </ul>
    </nav>
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
  


<style>
    /* global.css */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: #333;
    }
    
    .container {
      max-width: 1400px;
      margin: auto;
      overflow: hidden;
      padding: 0 2rem;
    }
    
    .navbar {
      background: #333;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-links {
      list-style: none;
      display: flex;
    }
    
    .nav-links li {
      padding: 0 1rem;
    }
    
    .nav-links a {
      color: #fff;
      padding: 0.5rem 0;
    }
    
    .nav-links a:hover {
      background: #555;
    }
    
    .main-content {
      padding: 2rem 0;
    }
</style>
