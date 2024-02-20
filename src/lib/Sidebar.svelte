<script> </script>
 
<aside class="sidebar"> 
  <span class="triangle"></span> 
  <div class="thumb">
    <img src="1553380239037.jpeg" alt="Perfil Antoniel Bordin" title="Perfil Antoniel Bordin" />  
  </div>
  <section class="perfil">       
    <h1>PERFIL</h1>
    <p>
      Empreendedor apaixonado por tecnologia e desenvolvimento
      de sistemas e soluções voltadas para a web.
    </p>
    <p> 
      Formado em Sistemas de Informação pela UFMS e licenciado 
      em Matemática pela FAEL. Atualmente como Full Stack 
      Web (PHP, MySQL, Oracle, HTML, CSS, JS, Svelte, VueJS, 
      entre outras tecnologias).
    </p>

    <h1>OBJETIVO</h1>
    <p>Busco novos desafios profissionais, tendo o desenvolvimento 
      de minhas soft skills e a geração de resultado como objetivo 
      primordial, viabilizando sempre entregas mais acertivas as quais 
      certamente contribuirão para o crescimento profissional e da 
      organização como um todo.
    </p>
  </section>
  <section class="action">
    <a href="https://antonielbordin.github.io/curriculum/oficial.pdf" target="_blank" class="btn">Baixar Versão PDF</a>
  </section>
  <section class="contact">
    <h1>CONTATO</h1>
    <p><img src="phone.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> 45 9 9902-9353</p>
    <p><img src="mail.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> antonielbordin@hotmail.com</p>
    <p><img src="linkedin.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> antonielbordin</p>
  </section>
  <section class="address">
    <img src="address.png" class="lc" alt="Telefone Pessoal" title="Telefone Pessoal" width="20px" height="20px"/>
    <p> Av. Lagoa Vermelha, 1206 <br> Nazaré - Medianeira/PR</p>
  </section>
</aside>

<style>
    .sidebar {
      width: 90%;
      min-height: 100%; 
      margin: 20px 0;
      border: none;
      position: relative;
    }
    
    .sidebar .triangle {
      width: 0; 
      height: 0; 
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 25px solid #f7f7f7; 
      position: absolute;
      top: -20px;
      left: 48%;  
    }

    .sidebar .thumb {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 30px 0;
    }    
    
    .sidebar .action {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 60px;
    }

    .sidebar .action .btn {
      padding: 12px 16px;      
      color: #069;
      border: 1px solid #069;
      border-radius: 5px;
      cursor: pointer;
    }

    .sidebar .action .btn:hover {      
      color: #f2f2f2;
      background-color: #069;
      -webkit-transition: background-color .4s ease-in;
      -moz-transition: background-color .4s ease-in;
      -o-transition: background-color .4s ease-in;
      -ms-transition: background-color .4s ease-in;
      transition: background-color .4s ease-in;
    }

    .sidebar .perfil,
    .sidebar .contact {
      padding: 20px;
      text-align: center;
    }     

    .sidebar .address {
      display: flex;
      flex-direction: row;
      width: 90%;
      padding: 8px 0px;
      text-align: center;
      font-size: 18px;    
    }

    .sidebar .perfil h1, 
    .sidebar .contact h1 {
      font-size: 24px;     
      text-transform: uppercase;
      color: #069;
      margin: 5px 0;      
    }

    .sidebar .perfil p {
      margin: 10px 0px 50px 0px;
      font-size: 18px;
      line-height: 1.5;
      color:#555;
    }

    .sidebar .contact p {
      margin: 10px 0;
      font-size: 18px; 
      color:#444;
      text-align: left;
    }

    .sidebar .address p {
      font-size: 18px; 
      color:#444;
    }

    .sidebar .address .lc {
      margin: 11px;
    }
   
   /* Breakpoint for mobile landscape and desktops minors*/
   @media screen and (min-width: 800px) {
      .sidebar {
        width: 50%;
        border: 2px solid #c9c9c9;
        border-top: none;
        border-bottom: none;
        border-left: none;
      }
      .sidebar .triangle {
        left: 42%; 
      }
      .sidebar .contact {
        position: absolute;
        bottom: 80px; 
      }
      .sidebar .address {
        position: absolute;
        bottom: 5px;       
      }      
    }

    /* Breakpoint for desktops */
    @media screen and (min-width: 1024px) {
      .sidebar {
        width: 35%;
      }      
    }

    /* Breakpoint for desktops major */
    @media screen and (min-width: 1200px) {
      .sidebar {
        width: 26%;
      }
    }
</style>
