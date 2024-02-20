const G=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerpolicy&&(c.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?c.credentials="include":l.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}};G();function r(){}function V(e){return e()}function M(){return Object.create(null)}function $(e){e.forEach(V)}function J(e){return typeof e=="function"}function S(e,s){return e!=e?s==s:e!==s||e&&typeof e=="object"||typeof e=="function"}function Q(e){return Object.keys(e).length===0}function w(e,s){e.appendChild(s)}function B(e,s,t){e.insertBefore(s,t||null)}function u(e){e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function R(){return W(" ")}function d(e,s,t){t==null?e.removeAttribute(s):e.getAttribute(s)!==t&&e.setAttribute(s,t)}function z(e){return Array.from(e.childNodes)}let q;function h(e){q=e}const b=[],j=[],x=[],H=[],K=Promise.resolve();let N=!1;function X(){N||(N=!0,K.then(U))}function P(e){x.push(e)}const I=new Set;let m=0;function U(){const e=q;do{for(;m<b.length;){const s=b[m];m++,h(s),Y(s.$$)}for(h(null),b.length=0,m=0;j.length;)j.pop()();for(let s=0;s<x.length;s+=1){const t=x[s];I.has(t)||(I.add(t),t())}x.length=0}while(b.length);for(;H.length;)H.pop()();N=!1,I.clear(),h(e)}function Y(e){if(e.fragment!==null){e.update(),$(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(P)}}const g=new Set;let Z;function _(e,s){e&&e.i&&(g.delete(e),e.i(s))}function L(e,s,t,n){if(e&&e.o){if(g.has(e))return;g.add(e),Z.c.push(()=>{g.delete(e),n&&(t&&e.d(1),n())}),e.o(s)}else n&&n()}function C(e){e&&e.c()}function T(e,s,t,n){const{fragment:l,on_mount:c,on_destroy:o,after_update:p}=e.$$;l&&l.m(s,t),n||P(()=>{const i=c.map(V).filter(J);o?o.push(...i):$(i),e.$$.on_mount=[]}),p.forEach(P)}function y(e,s){const t=e.$$;t.fragment!==null&&($(t.on_destroy),t.fragment&&t.fragment.d(s),t.on_destroy=t.fragment=null,t.ctx=[])}function ee(e,s){e.$$.dirty[0]===-1&&(b.push(e),X(),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function A(e,s,t,n,l,c,o,p=[-1]){const i=q;h(e);const a=e.$$={fragment:null,ctx:null,props:c,update:r,not_equal:l,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(i?i.$$.context:[])),callbacks:M(),dirty:p,skip_bound:!1,root:s.target||i.$$.root};o&&o(a.root);let f=!1;if(a.ctx=t?t(e,s.props||{},(v,O,...D)=>{const F=D.length?D[0]:O;return a.ctx&&l(a.ctx[v],a.ctx[v]=F)&&(!a.skip_bound&&a.bound[v]&&a.bound[v](F),f&&ee(e,v)),O}):[],a.update(),f=!0,$(a.before_update),a.fragment=n?n(a.ctx):!1,s.target){if(s.hydrate){const v=z(s.target);a.fragment&&a.fragment.l(v),v.forEach(u)}else a.fragment&&a.fragment.c();s.intro&&_(e.$$.fragment),T(e,s.target,s.anchor,s.customElement),U()}h(i)}class E{$destroy(){y(this,1),this.$destroy=r}$on(s,t){const n=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return n.push(t),()=>{const l=n.indexOf(t);l!==-1&&n.splice(l,1)}}$set(s){this.$$set&&!Q(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}}function se(e){let s;return{c(){s=k("header"),s.innerHTML=`<h1 class="svelte-18ec35p">Antoniel Bordin</h1> 
    <h2 class="svelte-18ec35p">Information systems analyst &amp; web developer</h2>`,d(s,"id","header"),d(s,"class","svelte-18ec35p")},m(t,n){B(t,s,n)},p:r,i:r,o:r,d(t){t&&u(s)}}}class te extends E{constructor(s){super(),A(this,s,null,se,S,{})}}function le(e){let s;return{c(){s=k("aside"),s.innerHTML=`<span class="triangle svelte-kq9rba"></span>  
  <div class="thumb svelte-kq9rba"><img src="1553380239037.jpeg" alt="Perfil Antoniel Bordin" title="Perfil Antoniel Bordin"/></div> 
  <section class="perfil svelte-kq9rba"><h1 class="svelte-kq9rba">PERFIL</h1> 
    <p class="svelte-kq9rba">Empreendedor apaixonado por tecnologia e desenvolvimento
      de sistemas e solu\xE7\xF5es voltadas para a web.</p> 
    <p class="svelte-kq9rba">Formado em Sistemas de Informa\xE7\xE3o pela UFMS e licenciado 
      em Matem\xE1tica pela FAEL. Atualmente como Full Stack 
      Web (PHP, MySQL, Oracle, HTML, CSS, JS, Svelte, VueJS, 
      entre outras tecnologias).</p> 

    <h1 class="svelte-kq9rba">OBJETIVO</h1> 
    <p class="svelte-kq9rba">Busco novos desafios profissionais, tendo o desenvolvimento 
      de minhas soft skills e a gera\xE7\xE3o de resultado como objetivo 
      primordial, viabilizando sempre entregas mais acertivas as quais 
      certamente contribuir\xE3o para o crescimento profissional e da 
      organiza\xE7\xE3o como um todo.</p></section> 
  <section class="action svelte-kq9rba"><a href="https://antonielbordin.github.io/curriculum/oficial.pdf" target="_blank" class="btn svelte-kq9rba">Baixar Vers\xE3o PDF</a></section> 
  <section class="contact svelte-kq9rba"><h1 class="svelte-kq9rba">CONTATO</h1> 
    <p class="svelte-kq9rba"><img src="phone.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> 45 9 9902-9353</p> 
    <p class="svelte-kq9rba"><img src="mail.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> antonielbordin@hotmail.com</p> 
    <p class="svelte-kq9rba"><img src="linkedin.png" alt="Telefone Pessoal" title="Telefone Pessoal" width="17px" height="17px"/> antonielbordin</p></section> 
  <section class="address svelte-kq9rba"><img src="address.png" class="lc svelte-kq9rba" alt="Telefone Pessoal" title="Telefone Pessoal" width="20px" height="20px"/> 
    <p class="svelte-kq9rba">Av. Lagoa Vermelha, 1206 <br/> Nazar\xE9 - Medianeira/PR</p></section>`,d(s,"class","sidebar svelte-kq9rba")},m(t,n){B(t,s,n)},p:r,i:r,o:r,d(t){t&&u(s)}}}class ae extends E{constructor(s){super(),A(this,s,null,le,S,{})}}function ne(e){let s;return{c(){s=k("article"),s.innerHTML=`<section class="content-header svelte-k1bht1"><h1 class="svelte-k1bht1">EXPERI\xCANCIAS</h1> 
        <span class="triangle svelte-k1bht1"></span></section> 

    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark two svelte-k1bht1"></span> 
            <p class="cTextBold svelte-k1bht1">2022 <span class="cTextNoBold svelte-k1bht1">/</span> Atual</p></div> 
        <div class="box-corp svelte-k1bht1"><p class="cTextBold svelte-k1bht1">DIGITALDOC</p> 
            <p class="svelte-k1bht1">Programador Full-Stack</p></div> 
        <div class="box-activity svelte-k1bht1"><p class="svelte-k1bht1">Desenvolvimento web, Api Rest de back-end em C#, Integra\xE7\xE3o
            com banco de dados SQL Server, Postgres e na manipula\xE7\xE3o de
            dados font-end VueJS</p></div></section> 
    
    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark one svelte-k1bht1"></span> 
            <p class="cTextBold svelte-k1bht1">2020 <span class="cTextNoBold svelte-k1bht1">/</span> 2022</p></div> 
        <div class="box-corp svelte-k1bht1"><p class="cTextBold svelte-k1bht1">NINFA INDUSTRIA DE ALIMENTOS</p> 
            <p class="svelte-k1bht1">Analista de TI</p></div> 
        <div class="box-activity svelte-k1bht1"><p class="svelte-k1bht1">Desenvolvimento web, desenvolvimento mobile, suporte em
            sistemas web, mobile e demais tecnologias (Full Stack Web)</p></div></section> 
    
    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark two svelte-k1bht1"></span> 
            <p class="cTextBold svelte-k1bht1">2019 <span class="cTextNoBold svelte-k1bht1">/</span> 2020</p></div> 
        <div class="box-corp svelte-k1bht1"><p class="cTextBold svelte-k1bht1">DIGITALDOC</p> 
            <p class="svelte-k1bht1">Programador</p></div> 
        <div class="box-activity svelte-k1bht1"><p class="svelte-k1bht1">Desenvolvimento web, Api Rest de back-end em C#, Integra\xE7\xE3o
            com banco de dados SQL Server e GraphQ na manipula\xE7\xE3o de
            dados font-end</p></div></section> 
    
    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark three svelte-k1bht1"></span> 
            <p class="cTextBold svelte-k1bht1">2018 <span class="cTextNoBold svelte-k1bht1">/</span> 2019</p></div> 
        <div class="box-corp svelte-k1bht1"><p class="cTextBold svelte-k1bht1">NINFA INDUSTRIA DE ALIMENTOS</p> 
            <p class="svelte-k1bht1">Assistente de TI</p></div> 
        <div class="box-activity svelte-k1bht1">Desenvolvimento web, suporte a usu\xE1rios quanto a sistemas
            e demais tecnologias, al\xE9m de manuten\xE7\xE3o de computadores
            e redes em geral</div></section> 
    
    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark four svelte-k1bht1"></span> 
            <p class="cTextBold svelte-k1bht1">2017 <span class="cTextNoBold svelte-k1bht1">/</span> 2018</p></div> 
        <div class="box-corp svelte-k1bht1"><p class="cTextBold svelte-k1bht1">RECEITA FEDERAL</p> 
            <p class="svelte-k1bht1">Estagi\xE1rio em desenvolvimento web</p></div> 
        <div class="box-activity svelte-k1bht1"><p class="svelte-k1bht1">Levantamento de requisitos, an\xE1lise e desenvolvimento
            de sistemas web, manuten\xE7\xE3o de sistemas web</p></div></section> 
    
    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark five svelte-k1bht1"></span> 
            <p class="cTextBold svelte-k1bht1">2013 <span class="cTextNoBold svelte-k1bht1">/</span> Atual</p></div> 
        <div class="box-corp svelte-k1bht1"><p class="cTextBold svelte-k1bht1">STILOS DESIGN NETWORK</p> 
            <p class="svelte-k1bht1">CEO e Full Stack Web</p></div> 
        <div class="box-activity svelte-k1bht1"><p class="svelte-k1bht1">Gerenciamento comercial, an\xE1lise e desenvolvimento
            de sistemas voltados para web</p></div></section> 

    <section class="content-header svelte-k1bht1"><h1 class="svelte-k1bht1">EDUCA\xC7\xC3O</h1> 
      <span class="triangle svelte-k1bht1"></span></section>             

    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark six svelte-k1bht1"></span> 
          <p class="cTextBold svelte-k1bht1">2019 <span class="cTextNoBold svelte-k1bht1">/</span> 2020</p></div>        
        <div class="box-corp svelte-k1bht1"><p class="svelte-k1bht1">Licenciatura em Matem\xE1tica
          FAEL (Faculdade Educacional da Lapa)</p></div></section> 
    
    <section class="box svelte-k1bht1"><div class="box-period svelte-k1bht1"><span class="mark seven svelte-k1bht1"></span> 
          <p class="cTextBold svelte-k1bht1">2013 <span class="cTextNoBold svelte-k1bht1">/</span> 2017</p></div>        
        <div class="box-corp svelte-k1bht1"><p class="svelte-k1bht1">Bacharelado em Sistemas de Informa\xE7\xE3o
          UFMS (Universidade Federal de Mato Grosso do Sul)</p></div></section> 

    <section class="content-header svelte-k1bht1"><h1 class="svelte-k1bht1">HABILIDADES PESSOAIS</h1> 
      <span class="triangle svelte-k1bht1"></span></section>  
       
    <section class="box noBorderBox svelte-k1bht1"><section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="cTextBold svelte-k1bht1">PHP</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span></div></section>     
        <section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="svelte-k1bht1">MYSQL</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span></div></section></section> 
    
    <section class="box noBorderBox svelte-k1bht1"><section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="svelte-k1bht1">JAVASCRIPT</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span></div></section> 
    
        <section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="svelte-k1bht1">HTML</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span></div></section></section> 
    
    <section class="box noBorderBox svelte-k1bht1"><section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="svelte-k1bht1">JAVA</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span></div></section> 
    
        <section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="svelte-k1bht1">CSS</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span></div></section></section> 
    
    <section class="box noBorderBox svelte-k1bht1"><section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="svelte-k1bht1">C, C++ e C#</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span></div></section>           
    
        <section class="box-skill svelte-k1bht1"><div class="skill svelte-k1bht1"><p class="svelte-k1bht1">VUE e SVELTE</p></div>        
            <div class="level"><span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle svelte-k1bht1"></span> 
                <span class="circle noColor svelte-k1bht1"></span></div></section></section>`,d(s,"class","content svelte-k1bht1")},m(t,n){B(t,s,n)},p:r,i:r,o:r,d(t){t&&u(s)}}}class ce extends E{constructor(s){super(),A(this,s,null,ne,S,{})}}function oe(e){let s,t,n,l,c,o,p,i;return t=new te({}),c=new ae({}),p=new ce({}),{c(){s=k("main"),C(t.$$.fragment),n=R(),l=k("section"),C(c.$$.fragment),o=R(),C(p.$$.fragment),d(l,"id","content"),d(l,"class","svelte-1jnwjee"),d(s,"id","main"),d(s,"class","svelte-1jnwjee")},m(a,f){B(a,s,f),T(t,s,null),w(s,n),w(s,l),T(c,l,null),w(l,o),T(p,l,null),i=!0},p:r,i(a){i||(_(t.$$.fragment,a),_(c.$$.fragment,a),_(p.$$.fragment,a),i=!0)},o(a){L(t.$$.fragment,a),L(c.$$.fragment,a),L(p.$$.fragment,a),i=!1},d(a){a&&u(s),y(t),y(c),y(p)}}}class ie extends E{constructor(s){super(),A(this,s,null,oe,S,{})}}new ie({target:document.getElementById("app")});
