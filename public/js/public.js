alert("public/js/public.js");

// header: String,
// content: String,
// author: String,

// jQuery
$(document).ready(function () {
  // Blog List
  function blogList() {
    $.ajax({
      url: "/blog",
      method: "GET",
      succes: function (data) {
        $("#blog-table tbody").empty();

        // forEach
        data.forEach(function (item) {
          $("#blog-table tbody").append(`
                <tr data-id="${item._id}">
                 <td>${item.header}</td>
                 <td>${item.content}</td>
                 <td>${item.author}</td>
                </tr>
                <button class="btn btn-primary">Güncelle</button>
                <button class="btn btn-danger">Sil</button>
                `); //end append
        }); //end for each item
      }, //end success
    }); //end ajax
  } //end blogList

  // Liste Function çağırmak
  blogList();

  ////////////////////////////////////////////////////
  // blog Ekleme
  $("#blog-form").on("submit", function (event) {
    event.preventDefault();

    // Blog Form'da verileri almak için
    const blogData = {
      // Blog Form'da verileri almak için
      header: $("#header").val(),
      content: $("#content").val(),
      author: $("#author").val(),
    };

    // Aldığım verileri kaydetmek
    $.ajax({
      url: "/blog",
      method: "POST",
      data: blogData,
      success: function (data) {
        // Ekledikten sonraki işlem için listeyi tazele
        blogList();
        $("#blog-form")[0].reset();
      }, //end success
    }); //end submit ajax
  }); // end Blog Add submit

  ////////////////////////////////////////////////////
  // blog Silme


}); //end document ready
