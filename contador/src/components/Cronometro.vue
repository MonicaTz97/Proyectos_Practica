<template>
    <div class="container_contador">
        <h1>Cronómetro</h1>
        <h2>{{ formatear }}</h2>
        <div class="botones">
            <button @click="iniciar" :disabled="activado">Iniciar</button>
            <button @click="pausar" :disabled="!activado">Pausar</button>
            <button @click="reiniciar">Reiniciar</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    const intervalo = ref(null);
    const activado = ref(false);
        
    const minutos = ref(0);
    const segundos = ref(0);
    const milisegundos = ref(0);

    /*con esto se muestra con dos dígitos*/
    const formatear = computed(() => {
        return `${minutos.value.toString().padStart(2, '0')}:${segundos.value.toString().padStart(2, '0')}:${milisegundos.value.toString().padStart(2, '0')}`;
    });

    const iniciar = () => {
        activado.value = true;
        intervalo.value = setInterval(() => {
            milisegundos.value++;
            if (milisegundos.value >= 100) {
                segundos.value++;
                milisegundos.value = 0;
            }
            if (segundos.value >= 60) {
                minutos.value++;
                segundos.value = 0;
            }
        }, 10);
    }

    const pausar = () => {
        activado.value = false;
        clearInterval(intervalo.value);
    }
    const reiniciar = () => {
        clearInterval(intervalo.value);
        activado.value = false;
        minutos.value = 0;
        segundos.value = 0;
        milisegundos.value = 0;
    }
    

</script>