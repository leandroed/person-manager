<template>
  <v-col
    cols="12"
    md="6"
  >
  <v-card
    class="mx-auto rounded-lg"
    max-width="650"
  >
    <v-responsive
      max-width="600"
      class="mx-auto mb-4"
    >
      <v-text-field
        append-icon="mdi-magnify"
        v-model="benched"
        label="Pesquise por nome ou matrícula"
      ></v-text-field>
    </v-responsive>

    <v-card
      flat
      max-width="600"
      class="mx-auto"
    >
      <v-virtual-scroll
        :items="items"
        height="370"
        item-height="90"
      >
        <template v-slot:default="{ item }">
          <v-list-item three-line :key="item.name">
            <v-list-item-action>
              <v-avatar color="grey">
                <span class="white--text text-h5">{{item.nick}}</span>
              </v-avatar>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{item.role}}</v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-icon small color="#127ad5">mdi-timer-outline</v-icon> {{item.hours}}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon small>mdi-phone-outline</v-icon>
              <v-icon small color="#127ad5">mdi-email-outline</v-icon>
            </v-list-item-action>
          </v-list-item>

        </template>
      </v-virtual-scroll>
    </v-card>
  </v-card>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      benched: '',
      items: [
        {
          nick: 'AS',
          name: 'Maria da Silva',
          role: '317 - Programador Pl.',
          hours: '09:33 - 14:55 - 15:45'
        },
        {
          nick: 'AM',
          name: 'José da Silva',
          role: '343 - Programador Pl.',
          hours: '10:50 - 13:22 - 15:03'
        },
        {
          nick: 'DS',
          name: 'Robocop da Silva',
          role: '246 - Programador Jr.',
          hours: '08:48 - 14:03 - 15:28'
        },
        {
          nick: 'DP',
          name: 'Patolino de Moraes',
          role: '342 - Programador Pl.',
          hours: '08:40 - 14:40 - 16:05'
        },
        {
          nick: 'KK',
          name: 'Outro nome',
          role: '342 - Programador Pl.',
          hours: '08:40 - 14:40 - 16:05'
        },
      ]
    }),
  }
</script>