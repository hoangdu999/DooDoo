<template>
    <div class="xuhuong-title flex">
        <div class="xuhuongline"></div>
        <p class="xuhuong-titletext flex">
            <slot />
        </p>
        <div class="xuhuongline"></div>
    </div>
</template>
<script>
export default {
name: "TheTitlehome",
props:{
 
},
};
</script>
<style scoped>
.xuhuong-titletext{
  margin: 0px 20px;
  font-size: 30px;
  white-space: nowrap;
   align-items: center;
  justify-content: center;
}
.xuhuong-title{
  padding: 80px;
  align-items: center;
  justify-content: center;
}
.xuhuongline{
  width: 100%;
  border-top:1px solid black ;
  height: 0px;
}
</style>
