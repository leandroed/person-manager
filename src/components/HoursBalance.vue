<template>
  <v-col
    cols="12"
    md="4"
  >
    <v-card
      class="mx-auto rounded-lg"
      height="100%"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
          Saldo banco de horas
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-title class="action">
        <div class="text-center">
          <h1 class="headline">309h07</h1>
          <h1 class="headline">Banco Padrão</h1>
        </div>
      </v-card-title>

      <v-list-item class="justify-center">
        <div class="text-center">
          <v-list-item-subtitle>
            Próximo fechamento em nov/2021
          </v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-card>

  </v-col>
</template>

<style>
.action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
}
</style>