<template>
  <v-col
    cols="12"
    md="4"
  >
  <v-card
    class="mx-auto rounded-lg"
    max-width="500"
  >

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
        Top 5
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-select
      class="mx-2"
      :items="options"
      v-model="selectedTop"
      solo
    ></v-select>

    <v-virtual-scroll
      :items="item"
      height="450"
      item-height="80"
    >
    <template v-slot:default="{ item }">
      <v-list-item three-line>
        <v-list-item-action>
            <v-avatar color="grey">
            <span class="white--text text-h5">{{item.nick}}</span>
            </v-avatar>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{item.name}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{item.role}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          {{item.hoursBalance}}
        </v-list-item-action>
      </v-list-item>
    </template>

    </v-virtual-scroll>
  </v-card>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      benched: '',
      options: ['Banco de horas'],
      selectedTop: '',
      item: [
        {
          nick: 'RB',
          name: 'Fulano de Tal',
          role: '333 - Analista de Teste Junior',
          hoursBalance: '107h'
        },
        {
          nick: 'MS',
          name: 'Ciclano da Silva',
          role: '370 - Analista de Suporte de TI Sr',
          hoursBalance: '82h46'
        },
        {
          nick: 'EM',
          name: 'Beotrano Moraes',
          role: '249 - Programador Pl',
          hoursBalance: '71h25'
        },
        {
          nick: 'NS',
          name: 'Nome de outro',
          role: '307 - Analista Sistema Jr',
          hoursBalance: '56h47'
        },
        {
          nick: 'JS',
          name: 'José da Silve',
          role: '344 - Analista de teste Pleno',
          hoursBalance: '47h57'
        }
      ]
    }),
    computed: {
      length () {
        return 5
      },
    },
    mounted () {
      this.selectedTop = this.options[0]
    }
  }
</script>