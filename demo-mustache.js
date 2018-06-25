function carregarDemo() {
  $.getJSON('demo.json', function (json) {

    /* Carregando templates Mustache internos
    */
    var template_header = $('#template-header').html();
    var header = Mustache.render(template_header, json);
    $('#mustache-header').html(header);

    var template_cards = $('#template-cards').html();

    /* Carregando template Mustache externo
    */
    $.get('template.mst', function (template) {
      
      var template_table = $(template).find('#template-table').html();     

      /* Renderizando template utilizando partial para renderizar membros dos squads
      */
      var cards = Mustache.render(template_cards, json, { "template-table": template_table });
      $('#mustache-cards').html(cards);

    });

  });
}