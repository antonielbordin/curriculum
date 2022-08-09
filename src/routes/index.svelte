<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  onMount(() => {
    
  });

  function downloadPDF() {  
    let el = document.createElement("a");
        el.setAttribute("href", "curriculum-official.pdf");
        el.setAttribute("target", "_blank");    
        el.click();
  }

</script>
 
 <!-- <a href="{base}/about">About</a> -->
<main id="main">
  <header id="header">
    <h1>Antoniel Bordin</h1>
    <h2>Information systems analyst & web developer</h2>
  </header>

  <section id="content">
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
          Formado em Sistemas de Informação pela UFMS e licencia 
          em Matemática pela FAEL. Atualmente como Full Stack 
          Web (PHP, MySQL, Oracle, HTML, CSS, Js, Svelte, VueJS, 
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
        <a href="https://antonielbordin.github.io/curriculum/curriculum-official.pdf" target="_blank" class="btn">Baixar Versão PDF</a>
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

    <article class="content">

        <section class="content-header">
          <h1> EXPERIÊNCIAS  </h1>
          <span class="triangle"></span>
        </section>
    
        <section class="box">
          <div class="box-period">
            <span class="mark one"></span>
            <p class="cTextBold">2020 <span class="cTextNoBold">/</span> Atual</p>
          </div>
          <div class="box-corp">
            <p class="cTextBold">NINFA INDUSTRIA DE ALIMENTOS</p>
            <p>Analista de TI</p>
          </div>
          <div class="box-activity">
            <p>Desenvolvimento web, desenvolvimento mobile, suporte em
            sistemas web, mobile e demais tecnologias (Full Stack Web)</p>
          </div>
        </section>
        
        <section class="box">
          <div class="box-period">
            <span class="mark two"></span>
            <p class="cTextBold">2019 <span class="cTextNoBold">/</span> 2020</p>
          </div>
          <div class="box-corp">
            <p class="cTextBold">DIGITALDOC</p>
            <p>Programador</p>
          </div>
          <div class="box-activity">
            <p>Desenvolvimento web, Api Rest de back-end em C#, Integração
            com banco de dados SQL Server e GraphQ na manipulação de
            dados font-end</p>
          </div>
        </section>
        
        <section class="box">
          <div class="box-period">
            <span class="mark three"></span>
            <p class="cTextBold">2018 <span class="cTextNoBold">/</span> 2019</p>
          </div>
          <div class="box-corp">
            <p class="cTextBold">NINFA INDUSTRIA DE ALIMENTOS</p>
            <p>Assistente de TI</p>
          </div>
          <div class="box-activity">
            Desenvolvimento web, suporte a usuários quanto a sistemas
            e demais tecnologias, além de manutenção de computadores
            e redes em geral
          </div>
        </section>
        
        <section class="box">
          <div class="box-period">
            <span class="mark four"></span>
            <p class="cTextBold">2017 <span class="cTextNoBold">/</span> 2018</p>
          </div>
          <div class="box-corp">
            <p class="cTextBold">RECEITA FEDERAL</p>
            <p>Estagiário em desenvolvimento web</p>
          </div>
          <div class="box-activity">
            <p>Levantamento de requisitos, análise e desenvolvimento
            de sistemas web, manutenção de sistemas web</p>
          </div>
        </section>
    
        <section class="box">
          <div class="box-period">
            <span class="mark five"></span>
            <p class="cTextBold">2013 <span class="cTextNoBold">/</span> Atual</p>
          </div>
          <div class="box-corp">
            <p class="cTextBold">STILOS DESIGN NETWORK</p>
            <p>CEO e Full Stack Web</p>
          </div>
          <div class="box-activity">
            <p>Gerenciamento comercial, análise e desenvolvimento
            de sistemas voltados para web</p>
          </div>
        </section>
    
        <section class="content-header">
          <h1> EDUCAÇÃO </h1>
          <span class="triangle"></span>
        </section>            
    
        <section class="box">
          <div class="box-period">
            <span class="mark six"></span>
            <p class="cTextBold">2019 <span class="cTextNoBold"> / </span> 2020</p>
          </div>       
          <div class="box-corp">
            <p>Licenciatura em Matemática
            FAEL (Faculdade Educacional da Lapa)</p>
          </div>
        </section>
    
        <section class="box">
          <div class="box-period">
            <span class="mark seven"></span>
            <p class="cTextBold">2013 <span class="cTextNoBold"> / </span> 2017</p>
          </div>       
          <div class="box-corp">
            <p>Bacharelado em Sistemas de Informação
            UFMS (Universidade Federal de Mato Grosso do Sul)</p>
          </div>
        </section>
    
        <section class="content-header">
          <h1> HABILIDADES PESSOAIS </h1>
          <span class="triangle"></span>
        </section> 
           
        <section class="box noBorderBox">
          <section class="box-skill">
            <div class="skill"> <p class="cTextBold">PHP</p> </div>       
            <div class="level">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle noColor"></span>
            </div>
          </section>    
          <section class="box-skill">
            <div class="skill"><p>MYSQL</p></div>       
            <div class="level">
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle noColor"></span>
            </div>
          </section>
        </section>

        <section class="box noBorderBox">          
          <section class="box-skill">
            <div class="skill"> <p>JAVASCRIPT</p> </div>       
            <div class="level">
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle noColor"></span>
            </div>
          </section>
      
          <section class="box-skill">
            <div class="skill"> <p>HTML</p> </div>       
            <div class="level">
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
            </div>
          </section>
        </section>

        <section class="box noBorderBox">
          <section class="box-skill">
            <div class="skill"> <p>JAVA</p> </div>       
            <div class="level">
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle noColor"></span>
              <span class="circle noColor"></span>
            </div>
          </section>
      
          <section class="box-skill">
            <div class="skill"> <p>CSS</p> </div>       
            <div class="level">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            </div>
          </section>
        </section>

        <section class="box noBorderBox">
          <section class="box-skill">
            <div class="skill"> <p>C, C++ e C#</p> </div>       
            <div class="level">
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle noColor"></span>
              <span class="circle noColor"></span>
            </div>
          </section>          
      
          <section class="box-skill">
            <div class="skill"><p>VUE e SVELTE</p></div>       
            <div class="level">
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle"></span>
              <span class="circle noColor"></span>
            </div>
          </section>
        </section>
    
    </article>

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

    #header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 200px;
      background: #f7f7f7 url("bg-header.png") no-repeat center;
    }

    #header h1 {
      font-size: 48px;
      letter-spacing: 10px;
      text-transform: uppercase;
      color: #545454;
      margin-bottom: 5px;
      margin-left: 8px;
      text-align: center;
    }

    #header h2 {
      font-size: 24px;
      text-transform: uppercase;
      color: #f2f2f2;
      background: #069;
      padding: 5px 8px;
      text-align: center;
      margin-top:10px;
    }

    #content {
      display: flex;
      flex-direction: column;
      width: 100%; 
    }

    #content .sidebar {
      width: 90%;
      min-height: 100%; 
      margin: 20px 0;
      border: none;
      position: relative;
    }
    
    #content .sidebar .triangle {
      width: 0; 
      height: 0; 
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 25px solid #f7f7f7; 
      position: absolute;
      top: -20px;
      left: 48%;  
    }

    #content .sidebar .thumb {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 30px 0;
    }    
    
    #content .sidebar .action {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 60px;
    }

    #content .sidebar .action .btn {
      padding: 12px 16px;      
      color: #069;
      border: 1px solid #069;
      border-radius: 5px;
      cursor: pointer;
    }

    #content .sidebar .action .btn:hover {      
      color: #f2f2f2;
      background-color: #069;
      -webkit-transition: background-color .4s ease-in;
      -moz-transition: background-color .4s ease-in;
      -o-transition: background-color .4s ease-in;
      -ms-transition: background-color .4s ease-in;
      transition: background-color .4s ease-in;
    }

    #content .sidebar .perfil,
    #content .sidebar .contact {
      padding: 20px;
      text-align: center;
    }     

    #content .sidebar .address {
      display: flex;
      flex-direction: row;
      width: 90%;
      padding: 8px 0px;
      text-align: center;
      font-size: 18px;    
    }

    #content .sidebar .perfil h1, 
    #content .sidebar .contact h1 {
      font-size: 24px;     
      text-transform: uppercase;
      color: #069;
      margin: 5px 0;      
    }

    #content .sidebar .perfil p {
      margin: 10px 0px 50px 0px;
      font-size: 18px;
      color:#555;
    }

    #content .sidebar .contact p {
      margin: 10px 0;
      font-size: 18px; 
      color:#444;
      text-align: left;
    }

    #content .sidebar .address p {
      font-size: 18px; 
      color:#444;
    }

    #content .sidebar .address .lc {
      margin: 11px;
    }

    #content .content {
      width: 90%;      
      padding: 20px;  
      margin-left: 5px; 
    }

    #content .content .content-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      min-height: 60px;
      margin: 25px 0;
    }

    #content .content .content-header h1 {
      font-size: 24px; 
      font-weight: bold;
      letter-spacing: 1px; 
      color: #069;
      margin-right: 10px;
    }

    #content .content .content-header .triangle {
      width: 0; 
      height: 0; 
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-top: 14px solid #949396; 
    }

    #content .content .box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      padding-bottom: 20px;
      border-left-width: 3px;
      border-left-style: solid;
      border-left-color: #069;
    }

    #content .content .box .box-period {
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-items: center;
      width: 40%;
      height: 60px;
      position: relative;
    }
    
    #content .content .box .box-corp {
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-items: center;
      width: 60%;
      height: 60px;
    }

    #content .content .box .box-corp p {
      text-align: center;
      margin: 2px 0;
    }

    #content .content .box .box-activity {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 60px;
      padding: 20px;
      font-size: 20px;
      color: #545454;     
    }

    #content .content .box .box-skill {
      display: flex;
      flex-direction: row;       
      align-items: center;
      width: 100%; 
      height: 60px;
    }

    #content .content .box .box-skill .skill {
      width: 150px;
      padding: 0 20px; 
      font-size: 22px; 
      font-weight: bold; 
    }

    .mark {
      width: 12px;
      height: 12px;
      border-radius: 50%; 
      float: left;
      border: 2px solid #069;
      background-color: #fff;
      position: absolute;
      left: -9px;       
    }

    .one,
    .six {
      top: 0px;
    }

    .two,
    .three,
    .four,
    .five,
    .seven  {
      top: 19px;
    }
  
    .cTextBold {
      font-weight: bold;
    }
    .cTextNoBold {
      font-weight: normal;
    }

    .circle {   
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 5px;
      float: left;
      background-color: #069;
    }

    .noBorderBox {
      border: none !important;
    }

    .noColor {
      background-color: #949396;
    }


    /* Breakpoint for mobile landscape and desktops minors*/
    @media screen and (min-width: 800px) {
      #content {
        flex-direction: row;
      }
      #content .sidebar {
        width: 50%;
        border: 2px solid #c9c9c9;
        border-top: none;
        border-bottom: none;
        border-left: none;
      }
      #content .sidebar .triangle {
        left: 42%; 
      }
      #content .sidebar .contact {
        position: absolute;
        bottom: 80px; 
      }
      #content .sidebar .address {
        position: absolute;
        bottom: 5px;       
      }
      #content .content {
        width: 50%;
        padding: 25px; 
        margin-left: 10px;
      }
      #content .content .content-header h1 {
        font-size: 26px;
      }
    }

    /* Breakpoint for desktops */
    @media screen and (min-width: 1024px) {
      #content .sidebar {
        width: 35%;
      }
      #content .content {
        width: 65%;
      }
      #content .content .box .box-period {
        width: 30%;
      }
      #content .content .box .box-corp {
        width: 70%;
      }
      #content .content .box .box-corp p {
        text-align: center;
        margin: 0;  
      }
      #content .content .box .box-skill {
        width: 50%;
      }
      #content .content .box .box-skill .skill {
        width: 150px;
        padding: 0; 
        font-size: 22px; 
        font-weight: bold;
      }
    }

    /* Breakpoint for desktops major */
    @media screen and (min-width: 1200px) {
      #content .sidebar {
        width: 26%;
      }
      #content .content {
        width: 60%; 
        margin-left: 20px;
      }
      #content .content .content-header {
        width: 95%;
        margin-left: 2%;
      }
      #content .content .box {
        width: 95%;
        margin-left: 2%;
      }
      #content .content .box .box-skill .skill {
        width: 180px;
      }
    }
</style> 