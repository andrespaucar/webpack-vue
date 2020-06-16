<template>
    <h1 class="h1">HOLA {{nombre}}</h1>
</template>

<script>
export default {
    props:{
        nombre:{type:String}
    }
}
</script>

<style lang="scss">
$colorPrimary: peru;
.h1{
    color:$colorPrimary;
}
</style>