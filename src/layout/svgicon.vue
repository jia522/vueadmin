<template>
      <svg :class="svgiconStyle" aria-hidden="true">
        <use :xlink:href="iconName"></use>
      </svg>
</template>
<script>
  export default {
      name:'iconSvg',
        props:{
          iconClass:{
              type:String,
              required:true
          },
      svgiconStyle:String
    },
    computed:{
      iconName(){
          return `#icon-${this.iconClass}`
      }
    }
  }
</script>
<style scoped>
  svg{
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
