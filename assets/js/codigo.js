$(document).ready(function () {
  $("#customModal").hide();
  $("#selector").on("change", function () {
    const valor = $(this).val();
    $(".card").addClass("d-none");
    switch (valor) {
      case "1":
        $("#img1").closest(".card").removeClass("d-none");
        break;
      case "2":
        $("#img2").closest(".card").removeClass("d-none");
        break;
      case "3":
        $("#img3").closest(".card").removeClass("d-none");
        break;
      default:
        break;
    }
  });
  $("a").on("click", function () {
    const valor = $(this).attr("id");
    $("#selector").val("seleccione actividad");
    $(".card").addClass("d-none");
    switch (valor) {
      case "a1":
        $("#img1").closest(".card").removeClass("d-none");
        break;
      case "a2":
        $("#img2").closest(".card").removeClass("d-none");
        break;
      case "a3":
        $("#img3").closest(".card").removeClass("d-none");
        break;
      default:
        break;
    }
  });

  const modal = $("#customModal");
  const modalTitulo = $("#modalTitle");
  const modalTexto = $("#modalText");

  $("img").on("mouseenter", function () {
    const offset = $(this).offset();
    const width = $(this).width();
    const height = $(this).height();
    let titulo = "";
    let texto = "";

    switch ($(this).attr("id")) {
      case "img1":
        titulo = "T R E K K I N G";
        texto = '<p><i class="bi bi-geo-alt-fill"></i>Volcán Villarrica</>';
        break;
      case "img2":
        titulo = "N A T A C I Ó N";
        texto = '<p><i class="bi bi-geo-alt-fill"></i>Lago Pucón</p>';
        break;
      case "img3":
        titulo = "F E R R Y";
        texto = '<p><i class="bi bi-geo-alt-fill"></i>Lago Llanquihue</p>';
        break;
    }

    modalTitulo.text(titulo);
    modalTexto.html(texto);
    modal
      .css({
        top: offset.top,
        left: offset.left,
        width: width,
        height: height,
        position: "absolute",
      })
      .show();

    modalTitulo.css({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      "text-align": "center",
    });

    modalTexto.css({
      position: "absolute",
      top: "calc(50% + 2em)",
      left: "50%",
      transform: "translate(-50%, 0)",
      "white-space": "nowrap",
      "text-align": "center",
    });
  });

  $("img").on("mouseleave", function () {
    modal.hide();
  });
});
