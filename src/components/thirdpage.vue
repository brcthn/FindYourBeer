<template>


   <div v-if="this.beerStyle == null">
    <p>Loading...</p>
  </div>
  <div v-else>
    <div>
      <input type="text" v-model="style" />
      <div v-for="(idx,i) in filter" v-bind:key="i">
        <v-card width="414px" height="115px">
          <router-link :to="{path:'/beers/'+idx.id}">Detail</router-link>

          <!-- <router-link to="/beers/'`${idx.id}`'"> Detail</router-link> -->
          <!-- <button type="button" id="button"  @click="beer(idx.id)">detail</button> -->
          <v-row>
            <v-col>
              <v-img
                src="https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-medium.png"
                width="100px"
                height="100px"
              ></v-img>
            </v-col>
            <v-col>
              <v-card-title class="font-italic text-sm-left text-center text-no-wrap">{{idx.name}}</v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>