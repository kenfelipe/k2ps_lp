"use strict";

// iniciar primeiros elementos(botao, tabs, tabelas) ativado
// (atribui class ".active")
function setActive() {
  // botao
  var buttonsContainer = document.getElementById(ID.buttonsContainer);
  buttonsContainer.childNodes.item(0).classList.add('active'); // tab
  // primeiro tab section

  var tabBarsContainer = document.getElementById(ID.tabBarContainer);
  var tabBars = tabBarsContainer.childNodes; // ativar todos primeiros tabs de cada section

  for (var i = 0; i < tabBars.length; i++) {
    tabBars.item(i).childNodes.item(0).classList.add('active');
  } // tables
  // primeiro tables section


  var tablesSections = document.getElementsByClassName(CLASSNAME.tablesSection); // ativar todas primeiros tables do section

  for (var _i = 0; _i < tablesSections.length; _i++) {
    tablesSections.item(_i).childNodes.item(0).classList.add('active');
  } //


  var firstButtonDataType = TABLES_DATA[Object.keys(TABLES_DATA)[0]].type;

  if (firstButtonDataType === 'table') {
    tabBars.item(0).classList.add('active');
    tablesSections.item(0).classList.add('active');
  }
}