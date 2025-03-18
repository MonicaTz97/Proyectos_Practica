<script setup>
import Contador from './components/Contador.vue'
import Tabs from './components/Tab.vue'
import TabsWrapper from './components/TabsWrapper.vue';
import Cronometro from './components/Cronometro.vue';
</script>

<template>
  <TabsWrapper>
    <Tabs title="Contador">
      <Contador />
    </Tabs>
    <Tabs title="Cronómetro">
      <Cronometro />
    </Tabs>
  </TabsWrapper>
</template>


