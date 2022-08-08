<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useQuery } from "vue-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetcher = (): Promise<Post[]> =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );

export default defineComponent({
  name: "HelloWorld",
  // components: {
  //   // TestTable,
  // },
  // props: {
  //   msg: String,
  // },
  setup() {
    const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
      "posts",
      fetcher
    );

    return { isLoading, isError, isFetching, data, error, refetch };
  },
  mounted() {
    console.log("mounted");
  },
});
</script>

<template>
  <div class="hello">
    {{ isLoading }}
    <!-- <h1>{{ msg }}</h1> -->
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data">
      {{ JSON.stringify(data) }}
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
