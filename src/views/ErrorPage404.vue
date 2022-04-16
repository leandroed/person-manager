<template>
  <v-container fluid pa-0>
    <v-row align="center" justify="center" style="height:100vh" dense>
      <v-card flat tile>
        <v-img
          height="500"
          max-height="500"
          max-width="500"
          src="../assets/404-notfound.gif"
          alt="Erro página não encontrada"
        ></v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorPage404'
}
</script>
