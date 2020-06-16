<template>
  <div>
      <h1 class="h1">PAGE HOME THIS</h1>
      <saludo-component nombre="andres "></saludo-component>
      <HelloWorldComponet></HelloWorldComponet>
      <img width="350px" src="@/assets/images/webpack.png" alt="">
      <!-- <img width="350px" :src="image" alt=""> -->
      <img width="350px" src="https://miro.medium.com/max/3060/1*23xdbC1Dy3mMDrKGNRMOqw.jpeg" alt="">
  </div>
</template>

<script>
import SaludoComponent from '@/components/saludo.vue';
import HelloWorldComponet from '@/components/HelloWorld.vue';
 
export default {
  name:"Home",
  components:{
    SaludoComponent,
    HelloWorldComponet
  },
  data(){
    return{
      image:require('@/assets/images/webpack.png')
    }
  },
  mounted(){
    console.log(this.image)
  }
}
</script>

<style>

</style>