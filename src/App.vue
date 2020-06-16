<template>
  <div> 
     <p style="background:peru">
       <router-link to="/">Home</router-link>
       <router-link to="/contact">Contact</router-link>
       <router-link to="/user">User</router-link>
     </p>
       <router-view></router-view>
       <h1>{{hello}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{

    }
  },
  mounted(){
   },
  computed:{
    ...mapState(["hello"])
  }
}
</script>

<style >
 body{
  font-family: "Roboto", sans-serif;
}
p{
  color:rgb(219, 173, 22);
}
</style>