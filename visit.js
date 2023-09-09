class Stack {
    constructor() {
      this.data = [];
    }
    isEmpty() {
      return this.data.length == 0;
    }
    push(info) {
      this.data.push(info);
    }
    pop() {
      if (this.isEmpty()) {
        document.getElementById('goback').setAttribute("disabled", true);
      }
      else {
        document.getElementById('goback').removeAttribute("disabled");
      }
      return this.data.pop();
    }
}
var visits = new Stack();
var visitBtn = document.getElementById('visit');
var goBackBtn = document.getElementById('goback');
visitBtn.addEventListener('click', function() {
    var url = document.getElementById('url').value;
    visits.push(url);
    document.getElementById("history").reset();
});
goBackBtn.addEventListener('click', function() {
    var value = visits.pop();
    if (typeof value == 'undefined') {
        document.getElementById('url').value = '';
        alert("Stack Underflow!");
    }
    else {
        document.getElementById('url').value = value;
    }
});