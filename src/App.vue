<template>
  <div id="app">
    <div class="container-fluid p-4 bg-danger">
      <div class="row">
        <div class="col-sm">
          <!-- <div id="myDIV" class="header"> -->
          <h2 class="text-center text-white">My To Do List</h2>
          <!-- </div> -->
        </div>
      </div>
      <div class="row">
        <div class="col-11">
          <input
            type="text"
            id="myInput"
            placeholder="Text..."
            class="header form-control"
          />
        </div>
        <div class="col-1 btn-block" id="newItem">
          <span v-on:click="newItem()" class="btn btn-secondary"
            >Add</span
          >
        </div>
      </div>
    </div>
    <div class="container-fluid p-0" id="listItems">
      <ul class="list-group">
        <div>
          <li
            class="list-group-item list-group-item-secondary"
            v-for="item in items" :key="item.id"
          >
            {{ item.lists }}
            <span class="close" v-on:click="delItem(item)">×</span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      items: null,
    }
  },
  methods: {
    delItem: function (item) {
      console.log(item.id);
      axios
        .delete('http://localhost:3000/lists/' + item.id)
        .then(response => {
          // this.item.splice(id, 1);
          console.log(this.item);
        });
    },
    newItem: function () {
      let inputValue = document.getElementById("myInput").value;
      console.log(inputValue);
      axios
        .post('http://localhost:3000/lists', {
          lists: inputValue
        })
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/lists')
      .then(response => (this.items = response.data.lists))
    // .then(data => generateList(data))
  }
};
</script>

<style scoped>
/* Include the padding and border in an element's total width and height */
  
  /* Style the list items */
  ul li {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
  
    /* make the list items unselectable */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Set all odd list items to a different color (zebra-stripes) */
  ul li:nth-child(odd) {
    background: #f9f9f9;
  }
  
  /* Darker background-color on hover */
  ul li:hover {
    background: #ddd;
  }
  
  /* When clicked on, add a background color and strike out text */
  ul li.checked {
    background: #888;
    color: #fff;
    text-decoration: line-through;
  }
  
  /* Add a "checked" mark when clicked on */
  ul li.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }
  
  /* Style the close button */
  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px;
  }
  
  .close:hover {
    background-color: #f44336;
    color: white;
  }
  
  /* Style the header */
  .header {
    /* background-color: #f44336; */
    padding: 10px 40px;
    /* color: white; */
    text-align: left;
  }
  
  /* Clear floats after the header */
  .header:after {
    content: "";
    display: table;
    clear: both;
  }
</style>