<template>
  <v-dialog v-model="show" max-width="500">
    <div class="Create">
      <v-card class="pb-5" style="border-radius: 15px">
        <v-card-title class="pa-2" style="background-color: #4f9dd5">
          <v-btn icon tile @click.stop="show=false">
            <v-icon size="30" class="white--text">mdi-close</v-icon>
          </v-btn>
          <v-layout justify-center>
            <h4 class="white--text">{{ $t("Majors.AddNew") }}</h4>
          </v-layout>
        </v-card-title>

        <v-form
          ref="firstform"
          v-model="valid"
          :lazy-validation="Lazy"
          @submit.prevent="save()"
        >
          <v-layout justify-center wrap align-center class="py-9">
            <v-flex sm7 xs8 md7 lg7>
              <TextBoxMaterial
               v-model="name"
                rules="requiredRules"
                :lable="$t('Majors.name')"
              />
            </v-flex>

            <v-flex sm7 xs8 md7 lg7>
            
              <v-layout justify-center align-center>
                <ButtonMatirlal
                  :disabled="!valid"
                  :texts="$t('Majors.save')"
                />
              </v-layout>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
import { mapMutations,mapActions,mapGetters } from "vuex";

import axios from "axios";
export default {
  props: {
    type: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      Lazy: false,
      name: null,
      valid: false,
    };
  },
  computed: {
    ...mapGetters({visible: "majors/getAddVisibal"}),
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.name =null;
          this.ChangeVisibal(value)
          this.$emit("close");
        }
      },
    },
  },
  methods: {
    ...mapMutations({ChangeVisibal: "majors/AddMajorChangeVisibal"}),
    ...mapActions({addNewMajor: "majors/addNewMajor"}),
  
    save() {
      this.addNewMajor({
        major_name: this.name,
        type: this.type,
        active:1,
      });
    },
  },
};
</script>
