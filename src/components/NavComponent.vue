<template>
    <div>
        <div class="navbar-fixed">
            <nav>
                <!-- navbar content here  -->
                <div class="nav-wrapper z-depth-3 mi-nav">
                    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#sobre-mi">Sobre mí</a></li>
                        <li><a href="#proyects">Proyectos</a></li>
                        <li><a href="#">Contaco</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    
        <ul id="slide-out" class="sidenav">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="images/office.jpg">
                    </div>
                    <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
                    <a href="#name"><span class="white-text name">John Doe</span></a>
                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                </div>
            </li>
            <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li>
                <div class="divider"></div>
            </li>
            <li><a class="subheader">Subheader</a></li>
            <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <!-- <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
.mi-nav {
    background: white;
}

.mi-nav>ul>li>a,
.mi-nav>a {
    color: black;
}


</style>