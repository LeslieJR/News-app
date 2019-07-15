<template>
<v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <h2>Get Support</h2>
        <v-card>
            <p v-if="messages.length == 0">
                    [No messages yet!]
            </p>
            <div class="messages" v-chat-scroll="{always: false, smooth: true}">
                <div v-for="message in messages" :key="message.id">
                    <span>[{{ message.name }}]: </span>
                    <span>{{message.message}}</span>
                    <span>{{message.timestamp}}</span>
                </div>
            </div>
            <v-card-action>
                <CreateMessage :name='name'></CreateMessage>
            </v-card-action>
        </v-card>

</template>
<script>
import CreateMessage from "../components/CreateMessage";
import fb from "";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    CreateMessage
  },
  data() {
    return {
      messages: []
    };
  },
  methods: {
    writeNewPost() {
      let text = document.getElementById("textInput").value;
      let name = firebase.auth().currentUser.displayName;

      //creating a new object
      let obj = {
        text,
        name
      };
      console.log(obj);

      firebase
        .database()
        .ref("chat")
        .push(obj);
    },

    getPosts() {
      firebase
        .database()
        .ref("chat")
        .on("value", function(data) {
          var posts = document.getElementById("posts");
          posts.innerHTML = "";
          // to change the format of the data, we do data.val()
          var messages = data.val();

          // to look through the object 'for in'
          for (var key in messages) {
            var text = document.createElement("div");
            var element = messages[key];

            text.append(element.text);
            posts.append(text);
          }
        });

      console.log("getting posts");
    }
  },
  created() {
    let ref = fb.collection("messages").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
      });
    });
  }
};
</script>
<style>
</style>
