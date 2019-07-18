<template>
  <div>
    <h1>Support Chat</h1>
    <div class="containerchat" v-chat-scroll>
      <div v-for="(chat, index) in chats" :key="index">
        <div class="speech-bubble-right" v-if="chat.name === user.displayName">
          <p>{{ chat.name }}</p>
          <p>{{ chat.comment }}</p>
        </div>
        <div class="speech-bubble-left" v-else>
          <p>{{ chat.name }}</p>
          <p>{{ chat.comment }}</p>
        </div>
      </div>
    </div>
    <div class="inputcomment">
      <v-textarea
        type="text"
        clearable
        placeholder="Type your comment here..."
        auto-grow
        box
        rows="1"
        v-model="comment"
      ></v-textarea>
      <v-btn class="sendbtn" @click="writeNewComment"
        ><v-icon>send</v-icon></v-btn
      >
    </div>

    <button class="logout" v-on:click="logOut">
      <v-icon class="big-icon">exit_to_app</v-icon>
    </button>
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
      chats: []
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
        .ref("supportchat")
        .on("value", function(data) {
          console.log("got this from db", data);
          console.log("trying data val()", data.val());
          let object1 = data.val();

          let dataArr = Object.values(object1);
          console.log("data array", dataArr);
          console.log("looping through one by one");
          dataArr.forEach(messageObject => {
            console.log("mess obj is", messageObject);
          });
          // chats equals dataArr to be able to use v-for chat in chats
          that.chats = dataArr;
          that.comment = "";
        });
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: -webkit-center;
  text-transform: capitalize;
}
.containerchat {
  background-color: beige;
  max-width: 350px;
  height: 300px;
  overflow-y: scroll;
  margin-top: 30px;
  margin-left: 10px;
}
.speech-bubble-right,
.speech-bubble-left {
  background: #b6d2df;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  font-size: 1.2rem;
  line-height: 1.3;
  margin: 40px;
  max-width: 400px;
  padding: 15px;
}
.speech-bubble-right > p {
  text-align: end;
}

.speech-bubble-left > p {
  text-align: left;
}

/* .speech-bubble-right::after {
 
} */
.inputcomment {
  display: flex;
  width: 350px;
  margin: 0px 10px;

  /* flex-direction: column; */
}
.sendbtn {
  border-radius: 100%;
}
.v-btn {
  min-width: 50px;
  height: 50px;
}
.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #709aad;
}
.logout {
  margin-left: 315px;
  margin-top: 55px;
}
.big-icon {
  font-size: 30px;
}
@media (orientation: landscape) {
  .containerchat {
    margin: 0px 150px;
  }
  .inputcomment {
    margin: 0 150px;
    width: 350px;
    background-color: beige;
  }
  .logout {
    margin-left: 470px;
  }
}
</style>
