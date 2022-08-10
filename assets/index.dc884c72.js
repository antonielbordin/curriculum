const N=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerpolicy&&(t.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?t.credentials="include":l.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(l){if(l.ep)return;l.ep=!0;const t=c(l);fetch(l.href,t)}};N();function v(){}function I(e){return e()}function A(){return Object.create(null)}function q(e){e.forEach(I)}function P(e){return typeof e=="function"}function $(e,s){return e!=e?s==s:e!==s||e&&typeof e=="object"||typeof e=="function"}function C(e){return Object.keys(e).length===0}function O(e,s,c){e.insertBefore(s,c||null)}function w(e){e.parentNode.removeChild(e)}function F(e){return document.createElement(e)}function B(e,s,c){c==null?e.removeAttribute(s):e.getAttribute(s)!==c&&e.setAttribute(s,c)}function D(e){return Array.from(e.childNodes)}let x;function p(e){x=e}const m=[],S=[],k=[],E=[],M=Promise.resolve();let h=!1;function R(){h||(h=!0,M.then(L))}function b(e){k.push(e)}const f=new Set;let d=0;function L(){const e=x;do{for(;d<m.length;){const s=m[d];d++,p(s),V(s.$$)}for(p(null),m.length=0,d=0;S.length;)S.pop()();for(let s=0;s<k.length;s+=1){const c=k[s];f.has(c)||(f.add(c),c())}k.length=0}while(m.length);for(;E.length;)E.pop()();h=!1,f.clear(),p(e)}function V(e){if(e.fragment!==null){e.update(),q(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(b)}}const U=new Set;function j(e,s){e&&e.i&&(U.delete(e),e.i(s))}function H(e,s,c,a){const{fragment:l,on_mount:t,on_destroy:n,after_update:u}=e.$$;l&&l.m(s,c),a||b(()=>{const r=t.map(I).filter(P);n?n.push(...r):q(r),e.$$.on_mount=[]}),u.forEach(b)}function G(e,s){const c=e.$$;c.fragment!==null&&(q(c.on_destroy),c.fragment&&c.fragment.d(s),c.on_destroy=c.fragment=null,c.ctx=[])}function J(e,s){e.$$.dirty[0]===-1&&(m.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function Q(e,s,c,a,l,t,n,u=[-1]){const r=x;p(e);const o=e.$$={fragment:null,ctx:null,props:t,update:v,not_equal:l,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(r?r.$$.context:[])),callbacks:A(),dirty:u,skip_bound:!1,root:s.target||r.$$.root};n&&n(o.root);let g=!1;if(o.ctx=c?c(e,s.props||{},(i,_,...T)=>{const y=T.length?T[0]:_;return o.ctx&&l(o.ctx[i],o.ctx[i]=y)&&(!o.skip_bound&&o.bound[i]&&o.bound[i](y),g&&J(e,i)),_}):[],o.update(),g=!0,q(o.before_update),o.fragment=a?a(o.ctx):!1,s.target){if(s.hydrate){const i=D(s.target);o.fragment&&o.fragment.l(i),i.forEach(w)}else o.fragment&&o.fragment.c();s.intro&&j(e.$$.fragment),H(e,s.target,s.anchor,s.customElement),L()}p(r)}class W{$destroy(){G(this,1),this.$destroy=v}$on(s,c){const a=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return a.push(c),()=>{const l=a.indexOf(c);l!==-1&&a.splice(l,1)}}$set(s){this.$$set&&!C(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}}function z(e){let s;return{c(){s=F("main"),s.innerHTML=`<header id="header" class="svelte-mcokq6"><h1 class="svelte-mcokq6">Antoniel Bordin</h1> 
    <h2 class="svelte-mcokq6">Information systems analyst &amp; web developer</h2></header> 

  <section id="content" class="svelte-mcokq6"><aside class="sidebar svelte-mcokq6"><span class="triangle svelte-mcokq6"></span>  
      <div class="thumb svelte-mcokq6"><img src="1553380239037.jpeg" alt="Perfil Antoniel Bordin" title="Perfil Antoniel Bordin"/></div> 
      <section class="perfil svelte-mcokq6"><h1 class="svelte-mcokq6">PERFIL</h1> 
        <p class="svelte-mcokq6">Empreendedor apaixonado por tecnologia e desenvolvimento
          de sistemas e solu\xE7\xF5es voltadas para a web.</p> 
        <p class="svelte-mcokq6">Formado em Sistemas de Informa\xE7\xE3o pela UFMS e licencia 
          em Matem\xE1tica pela FAEL. Atualmente como Full Stack 
          Web (PHP, MySQL, Oracle, HTML, CSS, Js, Svelte, VueJS, 
          entre outras tecnologias).</p> 
  
        <h1 class="svelte-mcokq6">OBJETIVO</h1> 
        <p class="svelte-mcokq6">Busco novos desafios profissionais, tendo o desenvolvimento 
          de minhas soft skills e a gera\xE7\xE3o de resultado como objetivo 
          primordial, viabilizando sempre entregas mais acertivas as quais 
          certamente contribuir\xE3o para o crescimento profissional e da 
          organiza\xE7\xE3o como um todo.</p></section> 
      <section class="action svelte-mcokq6"><a href="https://antonielbordin.github.io/curriculum/official.pdf" target="_blank" class="btn svelte-mcokq6">Baixar Vers\xE3o PDF</a></section> 
      <section class="contact svelte-mcokq6"><h1 class="svelte-mcokq6">CONTATO</h1> 
        <p class="svelte-mcokq6"><img src="phone.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> 45 9 9902-9353</p> 
        <p class="svelte-mcokq6"><img src="mail.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> antonielbordin@hotmail.com</p> 
        <p class="svelte-mcokq6"><img src="linkedin.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> antonielbordin</p></section> 
      <section class="address svelte-mcokq6"><img src="address.png" class="lc svelte-mcokq6" alt="Telefone Pessoal" title="Telefone Pessoal" width="20px" height="20px"/> 
        <p class="svelte-mcokq6">Av. Lagoa Vermelha, 1206 <br/> Nazar\xE9 - Medianeira/PR</p></section></aside> 

    <article class="content svelte-mcokq6"><section class="content-header svelte-mcokq6"><h1 class="svelte-mcokq6">EXPERI\xCANCIAS</h1> 
          <span class="triangle svelte-mcokq6"></span></section> 
    
        <section class="box svelte-mcokq6"><div class="box-period svelte-mcokq6"><span class="mark one svelte-mcokq6"></span> 
            <p class="cTextBold svelte-mcokq6">2020 <span class="cTextNoBold svelte-mcokq6">/</span> Atual</p></div> 
          <div class="box-corp svelte-mcokq6"><p class="cTextBold svelte-mcokq6">NINFA INDUSTRIA DE ALIMENTOS</p> 
            <p class="svelte-mcokq6">Analista de TI</p></div> 
          <div class="box-activity svelte-mcokq6"><p class="svelte-mcokq6">Desenvolvimento web, desenvolvimento mobile, suporte em
            sistemas web, mobile e demais tecnologias (Full Stack Web)</p></div></section> 
        
        <section class="box svelte-mcokq6"><div class="box-period svelte-mcokq6"><span class="mark two svelte-mcokq6"></span> 
            <p class="cTextBold svelte-mcokq6">2019 <span class="cTextNoBold svelte-mcokq6">/</span> 2020</p></div> 
          <div class="box-corp svelte-mcokq6"><p class="cTextBold svelte-mcokq6">DIGITALDOC</p> 
            <p class="svelte-mcokq6">Programador</p></div> 
          <div class="box-activity svelte-mcokq6"><p class="svelte-mcokq6">Desenvolvimento web, Api Rest de back-end em C#, Integra\xE7\xE3o
            com banco de dados SQL Server e GraphQ na manipula\xE7\xE3o de
            dados font-end</p></div></section> 
        
        <section class="box svelte-mcokq6"><div class="box-period svelte-mcokq6"><span class="mark three svelte-mcokq6"></span> 
            <p class="cTextBold svelte-mcokq6">2018 <span class="cTextNoBold svelte-mcokq6">/</span> 2019</p></div> 
          <div class="box-corp svelte-mcokq6"><p class="cTextBold svelte-mcokq6">NINFA INDUSTRIA DE ALIMENTOS</p> 
            <p class="svelte-mcokq6">Assistente de TI</p></div> 
          <div class="box-activity svelte-mcokq6">Desenvolvimento web, suporte a usu\xE1rios quanto a sistemas
            e demais tecnologias, al\xE9m de manuten\xE7\xE3o de computadores
            e redes em geral</div></section> 
        
        <section class="box svelte-mcokq6"><div class="box-period svelte-mcokq6"><span class="mark four svelte-mcokq6"></span> 
            <p class="cTextBold svelte-mcokq6">2017 <span class="cTextNoBold svelte-mcokq6">/</span> 2018</p></div> 
          <div class="box-corp svelte-mcokq6"><p class="cTextBold svelte-mcokq6">RECEITA FEDERAL</p> 
            <p class="svelte-mcokq6">Estagi\xE1rio em desenvolvimento web</p></div> 
          <div class="box-activity svelte-mcokq6"><p class="svelte-mcokq6">Levantamento de requisitos, an\xE1lise e desenvolvimento
            de sistemas web, manuten\xE7\xE3o de sistemas web</p></div></section> 
    
        <section class="box svelte-mcokq6"><div class="box-period svelte-mcokq6"><span class="mark five svelte-mcokq6"></span> 
            <p class="cTextBold svelte-mcokq6">2013 <span class="cTextNoBold svelte-mcokq6">/</span> Atual</p></div> 
          <div class="box-corp svelte-mcokq6"><p class="cTextBold svelte-mcokq6">STILOS DESIGN NETWORK</p> 
            <p class="svelte-mcokq6">CEO e Full Stack Web</p></div> 
          <div class="box-activity svelte-mcokq6"><p class="svelte-mcokq6">Gerenciamento comercial, an\xE1lise e desenvolvimento
            de sistemas voltados para web</p></div></section> 
    
        <section class="content-header svelte-mcokq6"><h1 class="svelte-mcokq6">EDUCA\xC7\xC3O</h1> 
          <span class="triangle svelte-mcokq6"></span></section>             
    
        <section class="box svelte-mcokq6"><div class="box-period svelte-mcokq6"><span class="mark six svelte-mcokq6"></span> 
            <p class="cTextBold svelte-mcokq6">2019 <span class="cTextNoBold svelte-mcokq6">/</span> 2020</p></div>        
          <div class="box-corp svelte-mcokq6"><p class="svelte-mcokq6">Licenciatura em Matem\xE1tica
            FAEL (Faculdade Educacional da Lapa)</p></div></section> 
    
        <section class="box svelte-mcokq6"><div class="box-period svelte-mcokq6"><span class="mark seven svelte-mcokq6"></span> 
            <p class="cTextBold svelte-mcokq6">2013 <span class="cTextNoBold svelte-mcokq6">/</span> 2017</p></div>        
          <div class="box-corp svelte-mcokq6"><p class="svelte-mcokq6">Bacharelado em Sistemas de Informa\xE7\xE3o
            UFMS (Universidade Federal de Mato Grosso do Sul)</p></div></section> 
    
        <section class="content-header svelte-mcokq6"><h1 class="svelte-mcokq6">HABILIDADES PESSOAIS</h1> 
          <span class="triangle svelte-mcokq6"></span></section>  
           
        <section class="box noBorderBox svelte-mcokq6"><section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="cTextBold svelte-mcokq6">PHP</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
            <span class="circle svelte-mcokq6"></span> 
            <span class="circle svelte-mcokq6"></span> 
            <span class="circle svelte-mcokq6"></span> 
            <span class="circle noColor svelte-mcokq6"></span></div></section>     
          <section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="svelte-mcokq6">MYSQL</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle noColor svelte-mcokq6"></span></div></section></section> 

        <section class="box noBorderBox svelte-mcokq6"><section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="svelte-mcokq6">JAVASCRIPT</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle noColor svelte-mcokq6"></span></div></section> 
      
          <section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="svelte-mcokq6">HTML</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span></div></section></section> 

        <section class="box noBorderBox svelte-mcokq6"><section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="svelte-mcokq6">JAVA</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle noColor svelte-mcokq6"></span> 
              <span class="circle noColor svelte-mcokq6"></span></div></section> 
      
          <section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="svelte-mcokq6">CSS</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
            <span class="circle svelte-mcokq6"></span> 
            <span class="circle svelte-mcokq6"></span> 
            <span class="circle svelte-mcokq6"></span> 
            <span class="circle svelte-mcokq6"></span></div></section></section> 

        <section class="box noBorderBox svelte-mcokq6"><section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="svelte-mcokq6">C, C++ e C#</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle noColor svelte-mcokq6"></span> 
              <span class="circle noColor svelte-mcokq6"></span></div></section>           
      
          <section class="box-skill svelte-mcokq6"><div class="skill svelte-mcokq6"><p class="svelte-mcokq6">VUE e SVELTE</p></div>        
            <div class="level"><span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle svelte-mcokq6"></span> 
              <span class="circle noColor svelte-mcokq6"></span></div></section></section></article></section>`,B(s,"id","main"),B(s,"class","svelte-mcokq6")},m(c,a){O(c,s,a)},p:v,i:v,o:v,d(c){c&&w(s)}}}class K extends W{constructor(s){super(),Q(this,s,null,z,$,{})}}new K({target:document.getElementById("app")});
