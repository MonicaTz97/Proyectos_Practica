<template>
    <div class="container_contador">
        <h1>Contador</h1>
        <div id="contador">
            <button @click="decrementar" :disabled="disabled">-</button>
            <input type="number" v-model="contador" id="input_contador">
            <button @click="incrementar">+</button>
        </div>
        <div id="resetear" :style="opacidad" >
            <button @click="resetear">Resetear</button>
        </div>
        <div>
            <input type="text" placeholder="¿Qué has contado?" v-model="texto">
            <button @click="guardarContador">Guardar</button>
        </div>
        <div id="registro">
            <p>Registro</p>
            <ul>
                <li v-for="item in registro" :key="item.texto">{{ item.texto }} - {{ item.contador }}</li>
            </ul>
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
    const registro = ref([]);
    const texto = ref('');
    const guardarContador = () => {
        if(texto.value !== ''){
            registro.value.push({texto: texto.value.trim(), contador: contador.value});
            texto.value = '';
        }
    }
    const opacidad = computed(() => ({opacity: contador.value > 0 ? 1 : 0.5})); /*opacidad*/
    const disabled = computed(() => contador.value <= 0); /*deshabilitar boton*/
</script>

