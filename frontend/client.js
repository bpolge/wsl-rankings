$(() => {

  // Need to add handlebars here at some point
  function append(elems) {
    const list = [];
    for (var i in elems) {
      const item = elems[i];
      const content =
  `<div class="athlete-tile">
    <a class="headshot" href="/athletes/${item.name}"><img class="athlete-img" src="${item.imgSrc}" alt="${item.name}"/></a>
    <span class="text-wrap">
      <a href="/athletes/${item.name}">${item.name}</a>
      <span>${item.rank}</span>
    </span>
  </div>`;
      list.push($('<li>', { html: content }));
    }
    $('.rankings').append(list);
  }

  $.get('/athletes', append);
});
