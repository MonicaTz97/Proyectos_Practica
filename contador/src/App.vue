<script setup>
import Contador from './components/Contador.vue'
import Tabs from './components/Tab.vue'
import TabsWrapper from './components/TabsWrapper.vue';
</script>

<template>
  <TabsWrapper>
    <Tabs title="Contador">
      <Contador />
    </Tabs>
    <Tabs title="Cronómetro">
      aaaaa
    </Tabs>
  </TabsWrapper>
  <!--
  <div class="container">
    <h1>Contador</h1>
    <Contador />
  </div>
  -->
</template>


