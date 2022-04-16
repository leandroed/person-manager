<template>
  <v-col
    cols="12"
    md="3"
  >
    <v-card
      class="mx-auto rounded-lg"
      height="450"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
          Meu Ponto
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-bag-checked</v-icon>
        </v-list-item-action>
      </v-list-item>

      <v-list-item class="justify-center">
        <div class="text-center">
          <v-list-item-subtitle class="mt-15" style="color: #0070d2">
            {{user.name}}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="mt-2">
            {{user.role}}
          </v-list-item-subtitle>
          <v-list-item-subtitle class="mt-2">
            {{today}}
          </v-list-item-subtitle>
        </div>
      </v-list-item>

      <v-card-title class="justify-center">
        <div>
          <h1 class="headline text--accent-2">{{ time }}</h1>
        </div>
      </v-card-title>

      <v-card-actions class="justify-center">
        <v-btn class="white--text" color="#0070d2">Marcar ponto</v-btn>
      </v-card-actions>

      <v-list-item class="justify-center">
        <div class="text-center">
          <v-list-item-subtitle>
            {{marks.title}}
          </v-list-item-subtitle>
        </div>
      </v-list-item>

      <div class="row justify-center text-center mt-0">
        <template v-for="(item, index) in marks.values">
          <v-card :key="index" class="mx-2" color="#edf1f7" width="50">{{item}}</v-card>
        </template>
      </div>

    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      time: null,
      user: {
        name: 'Fulano de tal',
        role: '367 - Coordenador de Progração Sr'
      },
      today: '',
      marks: {
        title: 'Marcações realizadas Hoje',
        values: ['8:30', '13:39', '15:21']
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  created() {
    this.today = this.formatDate(new Date())
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },
  methods: {
    formatDate(date) {
      let day = date.getDate()
      let month = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 
        'Outubro', 'Novembro', 'Dezembro'
      ][date.getMonth()]
      let year = date.getFullYear()
      
      return `${day} de ${month} de ${year}`
    }
  }
}
</script>
