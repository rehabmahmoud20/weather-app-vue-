<template>
  <div class="search">
    <input
      type="text"
      placeholder="search ..."
      v-model="querry"
      @keypress="handleVal"
     
    />
  </div>
</template>
<script>
export default {
    props:['getData'],
  data() {
    return {
      querry: "",
    };
  },
  methods: {
    handleVal(e) {
      this.$emit("searchData", this.querry);
      if(e.key === 'Enter'){
        this.getData()
      }

    },
  },
};
</script>
<style scoped>
.search {
  width: 100%;
  margin-bottom: 35px;
}
input {
  border: none;
  outline: none;
  appearance: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;
  width: 100%;
  padding: 15px;
  font-size: 20px;
}
input:focus {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0 16px 0;
}
</style>
