<script setup>
import { ref, computed } from 'vue';
import { datos } from './datos';
const contador = ref(0);
const ruta= "https://www.html6.es/img/rey_"

const siguiente = () => {
  contador.value++;
  if (contador.value >= datos.length) {
    contador.value = 0;
  }
}

const rey = computed(() => {
  const nombre = datos[contador.value].nombre.toLowerCase();
  return nombre.substring(0, 1).toUpperCase() + nombre.substring(1);
})

const imagen = computed(() => {
  return `${ruta}${datos[contador.value].nombre.toLowerCase()}.png`;
})

const nuevoPrecio = computed(() => {
  return Number(datos[contador.value].precio/ 1.10).toFixed(2);
})

</script>

<template>
  <h2>Cena {{ contador + 1}} con el rey godo {{ rey }}</h2>
  <div class="contenedor">
    <h3 id="precio">Precio: {{ datos[contador].precio }} €</h3>
    <div v-if="datos[contador].finDeSemana" class="finde dias">
      Solo fines de semana
    </div>
    <div v-else class="dias diario">
      De lunes a domingo
    </div>
    <div v-if="datos[contador].precio < 100" class = "oferta">
      <div> 
        Ahora un 10% de descuento:
        {{ nuevoPrecio }} €
      </div>
        <img src="/oferta.png" alt="oferta">
    </div>
    
    <img :src="imagen" alt="reyes">

    <button @click="siguiente">Siguiente ({{ contador + 1}}/{{ datos.length }})</button>
  </div>
</template>