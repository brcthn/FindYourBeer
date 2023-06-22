<template>
  <div>
    <v-img class="back" src= "@/assets/back.png" @click="$router.go(-1)" ></v-img>
    <v-container>
      <v-layout row wrap>
        <v-flex xs5 offset-xs1 md5 offset-md1  xl5 offset-xl1>
          <v-btn small color="#7986CB" @click="logIn">Login</v-btn>
        </v-flex>
        <div id="isLogin" class="mt-5">
          <v-flex id="posts" class="mt-5" ></v-flex>
          <div id="chat">
            <v-flex xs6 offset-xs md6 offset-md6 xl6 offset-xl6>
              <input id="message" type="text"/>
            </v-flex>
            <v-flex  xs5 offset-xs5 md5 offset-md5  xl6 offset-xl5>
              <v-btn small color="#7986CB" @click="writePosts()">Send post</v-btn>
            </v-flex>
          </div>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
let userName;
let email;
import { Chat } from 'vue-quick-chat'
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/app";
import "firebase/database";
import { all } from 'q';

export default {
  data() {
    return {
      
      };
  },
  methods: {
    logIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var user = result.user;
          console.log("You are logged in"); 
          userName = user.displayName;
          email = user.email;
          console.log(email)
          this.getPosts();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getPosts() {
      console.log("-----------------> i am in get posts");
      firebase
        .database()
        .ref("posts/")
        .on("value", messages => {
          let allMessages = messages.val();
          // console.log(allMessages);
          this.displayMessages(allMessages);
        });
    },
    displayMessages(allMessages) {
      var chat = document.getElementById("posts");
        chat.innerHTML = "";
      console.log(allMessages);
      for (let message in allMessages) {
        console.log(allMessages[message]);
        chat.innerHTML += `<div>
                            <p>${allMessages[message].name}</p>
                            <p>${allMessages[message].msg}</p>
                            </div>`;
      }
      console.log(chat);
    },
    writePosts() {
      console.log("í am writing a post");
      let msg = document.getElementById("message").value;
      console.log(msg);
      var postData = {
        name: userName,
        email: email,
        msg: msg
      };
      // Get a key for a new Post.
      var newPostKey = firebase
        .database()
        .ref()
        .child("posts")
        .push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates["/posts/" + newPostKey] = postData;
        // this.getPosts();
      return firebase
        .database()
        .ref()
        .update(updates);
    }
  },
  
};
</script>
    
<style >
#message {
  padding: 20px;
  border-radius: 10px 1px;
  border: 1px solid #7986CB;  
}

</style>