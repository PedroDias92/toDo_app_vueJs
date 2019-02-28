const app = new Vue({
    el: '#app',
    data: {
      title: 'Hello Coding Garden',
    },
    methods: {
      addTodo() {
        console.log("form submitted");
      },
    }
  });