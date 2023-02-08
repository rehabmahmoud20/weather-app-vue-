<template>
  <section class="location-wrapper" v-if="data">
    <h2 class="location">{{ data.name }} {{ data.sys.country }}</h2>
    <p class="date">{{ dateBuilder() }}</p>
  </section>
</template>
<script>
export default {
  props:['data'],
  methods:{
    dateBuilder() {
      const date = new Date();
      const monthes = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      const day = days[date.getDay()-1];
      const month = monthes[date.getMonth()];
      const dateTime = date.getDate();
      const year = date.getFullYear();
      return `${day} ${dateTime} ${month} ${year}`;
    },
  }
};
</script>
<style scoped>
.location,
.location-wrapper {
  text-align: center;
  color: white;
  margin-bottom: 35px;
}
.location {
  font-size: 32px;
  margin-bottom: 20px ;
}
.date {
  font-size: 20px;
  font-style: italic;
}
</style>
