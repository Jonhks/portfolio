<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
        <NavComponent/>
        <parallax/>
        <proyects/>
        <skills/>
        <footer-component/>

    </div>
</template>

<script>
import NavComponent from './components/NavComponent'
import Parallax from './components/Parallax'
import FooterComponent from './components/FooterComponent'
import Proyects from './components/Proyects'
import Skills from './components/Skills'





export default {
    name: 'app',
    components: {
        NavComponent,
        Parallax,
        FooterComponent,
        Proyects,
        Skills
    },
    data () {
      return {
        
      }
    },
}
</script>

<style>

</style>
