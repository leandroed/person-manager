<template>
  <div>
    <AppBar />
    <v-main class="grey lighten-3 px-0 mx-0">
      <v-container class="px-0 ml-5 mr-0">
        <v-row>
          <SideNavigation></SideNavigation>
          <v-col>
            <v-sheet
              color="#f2f5f8"
              min-height="91vh"
              rounded="lg"
              class="pr-5"
            >
              <v-row class="my-1 ml-10 mr-15">
                <v-col
                  cols="12"
                  md="6"  
                >
                  <v-card
                    color="transparent"
                    flat
                    class="mx-auto rounded-lg"
                    max-width="700"
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title class="text-h4 mb-1">
                          Bem-vindo(a),Xxxxx
                        </v-list-item-title>
                        <v-list-item-subtitle>Último acesso em 12/11/2021 às 16:39</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>

                <v-col
                  cols="12"
                  md="3"  
                >
                  <v-card
                    class="mx-auto rounded-lg"
                    max-width="400"
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title class="text-h7 mb-1">
                          Departamento
                        </v-list-item-title>
                        <v-list-item-subtitle>Todos os departamentos</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon>mdi-view-grid-outline</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                  </v-card>
                </v-col>

                <v-col
                  cols="12"
                  md="3"  
                >
                  <v-card
                    class="mx-auto rounded-lg"
                    max-width="400"
                  >
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title class="text-h7 mb-1">
                          Período
                        </v-list-item-title>
                        <v-list-item-subtitle>21/10/2021 a 20/11/2021</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon>mdi-calendar-blank-outline</v-icon>
                      </v-list-item-action>
                    </v-list-item>
                  </v-card>
                </v-col>

                <TeamWidget />
                <PersonsList />
                <TimeRegister />
                <HoursBalance />
                <ExtraHours />
                <Top5List />
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import SideNavigation from '../components/SideNavigation.vue'
import AppBar from '../components/AppBar.vue'
import TeamWidget from '../components/TeamWidget.vue'
import PersonsList from '../components/PersonsList.vue'
import TimeRegister from '../components/TimeRegister.vue'
import HoursBalance from '../components/HoursBalance.vue'
import ExtraHours from '../components/ExtraHours.vue'
import Top5List from '../components/Top5List.vue'

export default {
  name: 'PersonHome',

  components: {
    SideNavigation,
    AppBar,
    TeamWidget,
    PersonsList,
    TimeRegister,
    HoursBalance,
    ExtraHours,
    Top5List
  },

  data: () => ({
  })
}
</script>

<style>
</style>
