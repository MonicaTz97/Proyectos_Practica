<template>
    <div class="container_contador">
        <h1>Temporizador</h1>
        <div id="temporizador">
            <div class="temporizador_item">
                <h2>Días</h2>
                <input type="number" v-model="dias" @input="validar" />
            </div>
            <div class="temporizador_item">
                <h2>Horas</h2>
                <input type="number" v-model="horas" @input="validar" />
            </div>
            <div class="temporizador_item">
                <h2>Minutos</h2>
                <input type="number" v-model="minutos" @input="validar" />
            </div>  
            <div class="temporizador_item">
                <h2>Segundos</h2>
                <input type="number" v-model="segundos" @input="validar" />
            </div>
        </div>
        <h2 id="temporizador_formateado">{{ tiempoFormateado }}</h2>
        <div class="botones">
            <button @click="iniciar" :disabled="activado">Iniciar</button>
            <button @click="pausar" :disabled="!activado" :style="opacidad">Pausar</button>
            <button @click="reiniciar">Reiniciar</button>
        </div>
    </div>  
</template>

<script setup>
    import { ref, computed } from 'vue';
    const intervalo = ref(null);
    const activado = ref(false);
    let temporizador = null;

    const dias = ref(0);
    const horas = ref(0);
    const minutos = ref(0);
    const segundos = ref(0);

    const tiempoTotal = computed(() => {
        return dias.value * 86400 +horas.value * 3600 + minutos.value * 60 + segundos.value;
    });

    const tiempoFormateado = computed(() => {
        const d = Math.floor(tiempoTotal.value / 86400);
        const h = Math.floor((tiempoTotal.value % 86400) / 3600);
        const m = Math.floor((tiempoTotal.value % 3600) / 60);
        const s = tiempoTotal.value % 60;
        return `${d.toString().padStart(2, '0')}:${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    });

    const opacidad = computed(() => ({opacity: activado.value ? 1 : 0.5})); /*opacidad*/
    const disabled = computed(() => !activado.value); /*desabilitar boton*/
    
    const iniciar = () => {   
        activado.value = true;
        intervalo.value = setInterval(() => {
            segundos.value--;
            if(segundos.value < 0){
                minutos.value--;
                segundos.value = 59;
            }
            if(minutos.value < 0){
                horas.value--;
                minutos.value = 59;
            }
            if(horas.value < 0){
                dias.value--;
                horas.value = 23;
            }
            if(dias.value < 0){
                dias.value = 0;
                horas.value = 0;
                minutos.value = 0;
                segundos.value = 0;
                activado.value = false;
            }
        }, 1000);
    }
    const pausar = () => {
        clearInterval(intervalo.value);
        activado.value = false;
    }
    const reiniciar = () => {
        clearInterval(intervalo.value);
        dias.value = 0;
        horas.value = 0;
        minutos.value = 0;
        segundos.value = 0;
        activado.value = false;
    }

    const validar = () => {
        /*minimo*/
        if(eval(dias.value <0)) eval(dias.value = 0);
        if(eval(horas.value <0)) eval(horas.value = 0);
        if(eval(minutos.value <0)) eval(minutos.value = 0);
        if(eval(segundos.value <0)) eval(segundos.value = 0);
        /*maximo*/
        if(eval(dias.value > 365)) eval(dias.value = 365);
        if(eval(horas.value > 23)) eval(horas.value = 23);
        if(eval(minutos.value > 59)) eval(minutos.value = 59);
        if(eval(segundos.value > 59)) eval(segundos.value = 59);
    }
    
    
</script>
