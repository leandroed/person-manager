<template>
  <v-col
    cols="12"
    md="3"
  >
    <v-card
      class="mx-auto rounded-lg"
      max-width="300"
      color="transparent"
      flat
    >
      Minha equipe
      <v-icon small class="sm ml-3">mdi-calendar-blank-outline</v-icon>
      12/11/21 Sex
      <v-icon small color="#0c77d4">mdi-minus-circle-outline</v-icon>
    </v-card>
   
    <div class="py-2"></div>

    <template v-for="(item, index) in items">
      <v-card
        class="mx-auto rounded-lg mb-3"
        max-width="300"
        :key="index"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon :color="item.color ? item.color : ''">{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-h7 mb-1">{{item.name}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>{{item.value}}</v-list-item-action>
        </v-list-item>
      </v-card>
    </template>
  </v-col>
</template>

<script>
export default {
  data: () => ({
      items: [
        {
          name: 'Equipe',
          icon: 'mdi-account-multiple',
          value: 18
        },
        {
          name: 'Presentes',
          icon: 'mdi-arrow-top-right-thin',
          value: 12,
          color: '#25c6be'
        },
        {
          name: 'Ausentes',
          icon: 'mdi-arrow-bottom-left-thin',
          value: 6,
          color: '#ff6347'
        },
        {
          name: 'Prorrogando jornada',
          icon: 'mdi-clock-time-five-outline',
          value: 0,
          color: '#ffb603'
        },
        {
          name: 'Férias',
          icon: 'mdi-emoticon-cool-outline',
          value: 1,
          color: '#673ab7'
        },
        {
          name: 'Afastados',
          icon: 'mdi-chart-line-variant',
          value: 0,
          color: '#ef4b3b'
        }
      ],
    }),
}
</script>
