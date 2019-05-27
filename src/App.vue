<template>
    <div id="app">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
