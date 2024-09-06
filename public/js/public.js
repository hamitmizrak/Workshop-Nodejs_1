// alert("public/js/public.js");

// header: String,
// content: String,
// author: String,

// jQuery
$(document).ready(function () {
  // Formu Temizleme Functionu
  const reset = () => {
    // Formu temizlemek için
    $("#blog-form")[0].reset();
  };

  /////////////////////////////////////////////////////////////
  // Blog List
  function blogList() {
    $.ajax({
      url: "/blog",
      method: "GET",
      success: function (data) {
        // blogList function içerik listesini temizlemek için kullandım.
        $("#blog-table tbody").empty();

        // forEach
        data.forEach(function (item) {
          $("#blog-table tbody").append(`
                <tr data-id="${item._id}">
                    <td>${item._id}</td>
                    <td>${item.header}</td>
                    <td>${item.content}</td>
                    <td>${item.author}</td>
                    <td>${item.tags}</td>
                    <td>${item.date}</td>

                    <td>
                        <button class="btn btn-primary edit-btn"><i class="fa-solid fa-wrench"></i></button>
                        <button class="btn btn-danger delete-btn"><i class="fa-solid fa-trash"></i></button>
                    </td>

                </tr>
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
    // Browser'a otomatik olarak herhangi bir veri göndermesini kısıtkadım.
    event.preventDefault();

    // Blog Form'da verileri almak için
    const blogDataCreate = {
      // Blog Form'da verileri almak için
      header: $("#header").val(),
      content: $("#content").val(),
      author: $("#author").val(),
      tags: $("#tags").val(),
    };

    // Aldığım verileri kaydetmek (AJAX)
    $.ajax({
      url: "/blog",
      method: "POST",
      data: blogDataCreate,
      success: function (data) {
        // Ekledikten sonraki işlem için listeyi tazele
        blogList();
        // Formu temizlemek için
        // 1.YOL
        $("#blog-form")[0].reset();
        // 2.YOL
        //reset()
      }, //end success
      error: function (xhr, status, error) {
        console.log("Blog Ekleme işlemi başarısız:", error); // Hata mesajını göster
      },
    }); //end submit ajax
  }); // end Blog Add submit

  ////////////////////////////////////////////////////
  // Blog Silme
  // confirm
  $("#blog-table tbody").on("click", ".delete-btn", function () {
    //alert("silme");

    // İlgili satırdaki id almak için
    const id = $(this).closest("tr").data("id");

    // Onay Mesajı
    const confirmation = confirm(`${id} nolu Blog'u Silmek İstiyor musunuz ?`);

    // Eğer onayımızı evetse
    if (confirmation) {
      // Silme (Ajax)
      $.ajax({
        url: `/blog/${id}`,
        method: "DELETE",
        success: function () {
          // Silme işleminden sonrası için listeyi tazele
          blogList();
        },
        error: function (xhr, status, error) {
          console.log("Silme işlemi başarısız:", error);
        },
      });
    } else {
      console.error(`${id} nolu Blog silinmedi`);
    }
  }); //end Silmek

  /////////////////////////////////////////////////////////////
  // Blog Güncelleme
  $("#blog-table tbody").on("click", ".edit-btn", function () {
    //alert("güncelleme");
    const row = $(this).closest("tr");
    const id = row.data("id");

    // Onay Mesajı
    const confirmation = confirm(`${id} nolu Blog'u Güncellemek İstiyor musunuz ?`);

    // Eğer onayımızı evetse
    if (confirmation) {
    const header = row.find("td:eq(1)").text(); // header ikinci sütunda
    const content = row.find("td:eq(2)").text(); // content üçüncü sütunda
    const author = row.find("td:eq(3)").text(); // author dördüncü sütunda
    const tags = row.find("td:eq(4)").text(); // author dördüncü sütunda

    $("#header").val(header);
    $("#content").val(content);
    $("#author").val(author);
    $("#tags").val(tags);

    $("#blog-form")
      .off("submit")
      .on("submit", function (event) {
        event.preventDefault();
        const blogData = {
          header: $("#header").val(),
          content: $("#content").val(),
          author: $("#author").val(),
          tags: $("#tags").val(),
        };

        $.ajax({
          url: `/blog/${id}`,
          method: "PUT",
          data: blogData,
          success: function () {
            blogList();
            $("#blog-form")[0].reset();
          },
          error: function (xhr, status, error) {
            console.log("Güncelleme işlemi başarısız:", error);
          },
        }); //end put Ajax
      }); //end submit 
    } else {
      console.error(`${id} nolu Blog silinmedi`);
    } //end else
  }); //end Güncelleme


}); //end Document.Ready
