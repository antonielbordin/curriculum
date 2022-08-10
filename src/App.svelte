<script>
  import Header from './lib/Header.svelte'
  import Sidebar from './lib/Sidebar.svelte'
  import Content from './lib/Content.svelte'
</script>

<main id="main">
  <Header />
  <section id="content">
    <Sidebar />
    <Content />
  </section>
</main>

<style>  
    #main {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh !important;
      background: #fff;
    }
    
    #content {
      display: flex;
      flex-direction: column;
      width: 100%; 
    }

    /* Breakpoint for mobile landscape and desktops minors*/
    @media screen and (min-width: 800px) {
      #content {
        flex-direction: row;
      }      
    }
</style>
