<template>
  <div>
    <div v-if="this.beerDetail == null">
      <div class="text-center">
        <v-progress-circular size="50" indeterminate color="#7986CB"></v-progress-circular>
      </div>
    </div>
      <div v-else>
        <v-img class="back" src="@/assets/back.png" @click="$router.go(-1)"></v-img>
          <h3 id="beername">{{beerDetail.name}}</h3>
            <v-divider></v-divider>
          {{beerDetail.description}}
            <v-divider></v-divider>
          {{title}} {{":"}} {{beerDetail.abv}}
            <v-divider></v-divider>
          {{ibu}} {{":"}} {{beerDetail.ibu}}
            <v-divider></v-divider>
          {{og}} {{":"}} {{beerDetail.originalGravity}}
      </div>
  </div>
</template>
<script>
export default {
  name: "thirdpage",
  props: ["beerId"],
  data() {
    return {
      beerDetail: null,
      title: "Alcohol by Volume",
      ibu:"International Bitterness Units scale",
      og:"Original Gravity"
    };
  },
  created() {
    fetch(
      `https://ubiqum-cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/${this.beerId}?&key=24793aca3a39bdbe91b064596cd94545`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      }
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.beerDetail = res.data;
        console.log("=============>" + this.beerDetail);
      });
  }
};
</script>
<style scoped>

</style>