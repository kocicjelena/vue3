<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="id">id</label>
        <input
          type="text"
          class="form-control"
          id="id"
          required
          v-model="tutorial.id"
          name="id"
        />
      </div>

      <div class="form-group">
        <label for="name">name</label>
        <input
          class="form-control"
          id="name"
          required
          v-model="tutorial.name"
          name="name"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TutorialDataService from "@/services/TutorialDataService";
import Tutorial from "@/types/Tutorial";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        name: ""
      } as Tutorial,
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      let data = {
        id: this.tutorial.id,
        name: this.tutorial.name,
      };

      TutorialDataService.create(data)
        .then((response: ResponseData) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {} as Tutorial;
    },
  },
});
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
