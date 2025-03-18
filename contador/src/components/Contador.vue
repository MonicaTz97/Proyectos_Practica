<template>
    <div class="container_contador">
        <h1>Contador</h1>
        <div id="contador">
            <button @click="decrementar" :disabled="disabled">-</button>
            <p >{{ contador }}</p>
            <button @click="incrementar">+</button>
        </div>
        <div id="resetear" :style="opacidad" >
            <button @click="resetear">Resetear</button>
        </div>
    </div>
    
</template>

<script setup>
    import { ref, computed } from 'vue';
    const contador = ref(0);
    const incrementar = () => {
        contador.value++;
    }
    const decrementar = () => {
        contador.value--;
    }
    const resetear = () => {
        contador.value = 0;
    }
    const opacidad = computed(() => ({opacity: contador.value > 0 ? 1 : 0.5})); /*opacidad*/
    const disabled = computed(() => contador.value <= 0); /*desabilitar boton*/
</script>

