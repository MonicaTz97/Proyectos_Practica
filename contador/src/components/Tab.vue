<template>
    <div class="tab-content" v-show="selectedTitle === title" :data-title="title">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
    title: {
        type: String,
        required: true
    }
});

const selectedTitle = inject('selectedTitle');
</script>


