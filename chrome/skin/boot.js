try{
    $('body').jqTOC({tocTitle: 'menu'});
    prettyPrint();
}catch(e){
    console.error('%o', e);
}