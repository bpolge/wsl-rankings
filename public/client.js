$(() => {

  function append(elems) {
    let list = [];
    for (var i in elems) {
      list.push($('<li>', { text: elems[i] }));
    }
    $('.rankings').append(list);
  }

  $.get('/athletes', append);
});
