
<template>
    
    <div>
        <slot />
    </div>

</template>



<script>
export default {
    name: 'BaseCard',
}
</script>


<style scoped>
div {
    border-radius: 20px;
    max-width: 60rem;
    height:635px;
    padding: 0px;
    border: 2px solid white;
    background-color: rgba(255,255,255,0.5);
    box-shadow: 0px 10px 37px -18px rgba(0,0,0,0,1);
}

</style>
