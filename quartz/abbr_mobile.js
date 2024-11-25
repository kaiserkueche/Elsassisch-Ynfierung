    $(() => {
  
    $('abbr').attr('data-toggle', 'tooltip'); // add atribute to all abbrs
      $('abbr[data-title]').removeAttr("data-title"); // have to be removed to prevent double hint showing
      $('[data-toggle="tooltip"]').tooltip(); // initialize tooltips on all abbrs 
    
 });
