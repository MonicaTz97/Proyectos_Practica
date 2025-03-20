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

</script>

<template>
  <h2>Cena {{ contador + 1}} con el rey godo {{ rey }}</h2>
  <h3>Precio: {{ datos[contador].precio }} €</h3>
  <div v-if="datos[contador].finDeSemana" class="diario dias">
    Solo fines de semana
  </div>
  <div v-else class="finde dias">
    De lunes a domingo
  </div>
  <div>
    <div> 
      Ahora un 10% de descuento:
      {{ nuevoPrecio }} €
    </div>
    
  </div>
  
  <img :src="imagen" alt="reyes">
  <button @:click="siguiente">Siguiente ({{ contador + 1}}/{{ datos.length }})</button>
</template>

<style scoped>
  .diario{
    background-color: #1ca800;
  }
  .finde{
    background-color: #ff0000;
  }
  .dias{
    color: #fafafa;
    padding: 10px;
    font-size: 1.5em;
    border-radius: 10px;
    margin: 10px;
    display: inline-block;
  }
</style>