/* eslint-disable */
window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  function anidados(pronoun, adj, noun) {
    let resul = "";

    let number = Math.floor(Math.random() * 2);
    resul = pronoun[number];

    let number1 = Math.floor(Math.random() * 2);
    resul += adj[number1];

    let number3 = Math.floor(Math.random() * 2);
    resul += noun[number3];

    return `${resul}.com`;
  }
  console.log(anidados(pronoun, adj, noun));
};
