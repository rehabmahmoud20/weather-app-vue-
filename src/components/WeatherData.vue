<template>
  <section class="weather-wrapper" v-if="data">
    <h2 class="temp">{{Math.round(data.main.temp) }} °C</h2>
    <p class="weather">{{ data.weather[0].main }}</p>
  </section>
</template>
<script>
export default {
  props:['data']
};
</script>
<style scoped>
.weather-wrapper {
  text-align: center;
  color: #fff;
}
.temp {
  font-size: 50px;
  padding: 10px 25px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  display: inline-block;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
}
.weather {
  font-size: 48px;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);

}
</style>
