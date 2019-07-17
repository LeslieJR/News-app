<template>
  <div>
    <h1>Support Chat</h1>

    <div v-for="(chat, key, index) in chats" :key="index">
      <div>
        <p>{{ chat.name }}</p>
        <p>{{ chat.comment }}</p>
      </div>
    </div>
    <v-text-field v-model="comment"></v-text-field>
    <v-btn @click="writeNewComment">SEND</v-btn>
    <button v-on:click="logOut">Log out</button>
    <br /><br /><br />
  </div>
</template>
<script>
import auth from "../auth";
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "supportchat",
  data() {
    return {
      comment: "",
      chats: {}
    };
  },
  computed: {
    ...mapGetters("user", {
      user: "user",
      isLoggedIn: "isLogged"
    })
  },
  created() {
    console.log("created called");
    this.getComments();
  },

  methods: {
    logOut() {
      auth.logout();
    },

    writeNewComment() {
      let name = this.user.displayName;
      let obj = {
        name: name,
        comment: this.comment
      };
      console.log(obj);

      firebase
        .database()
        .ref("supportchat")
        .push(obj);
    },

    getComments() {
      console.log("get comments called");
      let that = this;

      firebase
        .database()
        .ref("/supportchat")
        .on("value", function(data) {
          console.log("got this from db", data);
          console.log("trying data val()", data.val());

          let dataArr = Object.values(data.val());
          console.log("data array", dataArr);
          console.log("looping through one by one");
          dataArr.forEach(messageObject => {
            console.log("mess obj is", messageObject);
          });
          // chats equals dataArr to be able to use v-for chat in chats
          that.chats = dataArr;
          console.log("tried to add data to this.chats, got", that.chats);
        });
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 50px;
}

h3 {
  margin-bottom: 0;
}

p {
  margin-top: 0;
}

pre {
  text-align: left;
}
</style>
