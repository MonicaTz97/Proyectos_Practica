<script setup>
import Contador from './components/Contador.vue'
import Tab from './components/Tab.vue'
import TabsWrapper from './components/TabsWrapper.vue';
import Cronometro from './components/Cronometro.vue';
</script>

<template>
  <TabsWrapper>
    <Tab title="Contador">
      <Contador />
    </Tab>
    <Tab title="Cronómetro">
      <Cronometro />
    </Tab>
  </TabsWrapper>
</template>


