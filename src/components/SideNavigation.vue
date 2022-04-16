<template>
  <v-col cols="1">
    <v-sheet rounded="lg">
      <v-list color="transparent" class="text-center">
        <v-list-item
          link
          color="grey lighten-4"
        >
          <v-list-item-content>
            <v-list-item-title>
              <v-avatar color="grey">
                <span class="white--text text-h5">Prc</span>
              </v-avatar>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item-content>
          <v-list-item-title>
            <v-btn
              icon
            >
              <v-icon>mdi-chart-areaspline-variant</v-icon>
            </v-btn>
          </v-list-item-title>

          <v-list-item-title>
            <v-btn
              icon
            >
              <v-icon>mdi-account-group</v-icon>
            </v-btn>
          </v-list-item-title>

          <v-list-item-title>
            <v-btn
              icon
            >
              <v-icon>mdi-chart-line</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>

      </v-list>
    </v-sheet>
  </v-col>
</template>
