<template>
    <div class="container_contador">
        <h1>Contador</h1>
        <div id="contador">
            <button @click="decrementar" :disabled="disabled">-</button>
            <input type="number" v-model="contador" id="input_contador" min="0">
            <button @click="incrementar">+</button>
        </div>
        <div id="resetear" :style="opacidad" >
            <button @click="resetear">Resetear</button>
        </div>
        <div>
            <input type="text" placeholder="¿Qué has contado?" v-model="texto">
            <button @click="guardarContador">Guardar</button>
        </div>
        <div class="container_bbdd">
            <div id="registro">
                <div id="refrescar">
                    <p>Registro</p>
                    <button @click="refrescar" id="boton_refrescar">Refrescar</button>
                </div>
                <ul>
                    <li v-for="(dato, index) in datos" :key="index">{{ dato.nombre }}: {{ dato.contador }}</li>
                </ul>
                <p v-if="datos.length === 0">No hay registros guardados</p>
            </div>
            <div id="Buscar">
                <p>Buscar</p>
                <input type="text" placeholder="Buscar..." v-model="buscar">
                <button @click="buscarContador">Buscar</button>
                <p v-if="buscar.length > 0 && resultados.length > 0">Resultado de la búsqueda: {{ buscar }}</p>
                <ul>
                    <li v-for="(dato, index) in resultados" :key="index">{{ dato.nombre }}: {{ dato.contador }}</li>
                </ul>
            </div>
        </div>
    
    </div>
    
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue';
    import axios from 'axios';
    import { useToast } from "vue-toastification";
    
    const toast = useToast();
    const contador = ref(0);
    const datos = ref([]);
    const texto = ref('');
    const buscar = ref('');
    const resultados = ref([]);

    const incrementar = () => {
        contador.value++;
    }
    const decrementar = () => {
        if (contador.value > 0) {
            contador.value--;
        }
    }
    const resetear = () => {
        contador.value = 0;
    }
    const refrescar = () => {
        cargarDatos();
    }
    const capitalizar = (texto) => {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }
    const guardarContador = () => {
        if(texto.value !== ''){
            const textoFormateado = capitalizar(texto.value.trim());
            guardarDatos(textoFormateado);
            texto.value = '';
        }
    }
    const opacidad = computed(() => ({opacity: contador.value > 0 ? 1 : 0.5})); /*opacidad*/
    const disabled = computed(() => contador.value <= 0); /*deshabilitar boton*/

    const guardarDatos = async (texto) => {
        try {
            await axios.post('http://localhost:3000/api/guardar', {
                contador: contador.value,
                nombre: texto
            });
            toast.success('Contador guardado exitosamente');
            cargarDatos();
        } catch (error) {
            console.error('Error al guardar:', error);
            toast.error('Error al guardar el contador');
        }
    }
    const buscarContador = async () => {
        if (!buscar.value.trim()) {
            resultados.value = [];
            return;
        }
        try {
            const response = await axios.get('http://localhost:3000/api/buscar', {
                params: { buscar: buscar.value.trim() }
            });
            resultados.value = response.data;
        } catch (error) {
            console.error('Error al buscar:', error);
            toast.error('Error al buscar el contador');
        }
    }
    const cargarDatos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/datos');
            datos.value = response.data;
        } catch (error) {
            console.error('Error al cargar datos:', error);
        }
    };

    onMounted(() => {
        cargarDatos();
    });
    
</script>

