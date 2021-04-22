// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
const newItem = new Vue({
  el: '#newItem',
  data: {

  },
  methods: {
    newItem: function (value) {
      console.log(value);
      axios
        .post('http://localhost:3000/lists', {
          lists: value
      })
    }
  }
});

const listItems = new Vue({
  el: '#listItems',
  data: {
    items: null,
  },
  methods: {
    delItem: function (item) {
      console.log(item.id);
      axios
        .delete('http://localhost:3000/lists/' + item.id)
        .then(response => {
          this.item.splice(id, 1);
          console.log(this.item);
        });
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/lists')
      .then(response => (this.items = response.data.lists))
    // .then(data => generateList(data))
  }
});


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
