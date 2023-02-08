<template>
  <div class="wrapper" :class="WeatherData && WeatherData.main.temp < 260 && 'warm'">
    <main>
      <SearchBar @searchData="setValue($event)" :getData="getData" />
      <LocationData :data="WeatherData" />
      <WeatherData :data="WeatherData" />
    </main>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import LocationData from "./components/LocationData";
import WeatherData from "./components/WeatherData";
import axios from "axios";

export default {
  components: {
    SearchBar,
    LocationData,
    WeatherData,
  },
  data() {
    return {
      val: "",
      apiKey: "9398f5b7c6abb7592450dfce3f9501de",
      WeatherData: null,
    };
  },
  methods: {
    setValue(val) {
      this.val = val;
    },
    async getData() {
      // console.log("kkk");
      // fetch(
      //   `${this.baseUrl}q=${this.val}&units=metric&APPID=${this.apiKey}`
      // ).then((res) => {
      //   console.log(res.json()) ;
      // })
      const { data } = await axios
        .create({
          baseURL: "https://api.openweathermap.org/data/2.5/weather?",
          params: {
            q: this.val,
            APPID: this.apiKey,
          },
        })
        .get();
      this.WeatherData = data;
    },
    
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrate", sans-serif;
}
.wrapper.warm{
  background-image: url("./assets/warm-bg.jpg");
}
.wrapper {
  background-image: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.25)
  );
}
</style>
