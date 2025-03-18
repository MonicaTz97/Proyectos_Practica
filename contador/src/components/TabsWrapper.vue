<template>
    <div class="tabs">
        <ul class="tabs_header">
            <li v-for="title in tabTitles" :key="title" @click="selectedTitle = title" :class="{'active': selectedTitle === title}">{{ title }}</li>
        </ul>
        
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';

const tabTitles = ref([]); /*array de los titulos de las tabs*/
const selectedTitle = ref(''); /*almacena el titulo de la tab seleccionada*/

provide('selectedTitle', selectedTitle); /*para que sea accesible para las tabs a través de inject*/

onMounted(() => {
    const slots = document.querySelectorAll('.tab-content'); /*seleccionar las tabs*/
    tabTitles.value = Array.from(slots).map(slot => slot.getAttribute('data-title')); /*obtener los titulos de las tabs*/
    if (tabTitles.value.length > 0) {
        selectedTitle.value = tabTitles.value[0]; /*seleccionar el primer titulo de la tab*/
    }
});
</script>


