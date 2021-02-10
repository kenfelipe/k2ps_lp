"use strict";

// criar abas(tabs) que seleciona Table 
// atraves de dados configurado em 'config/data.js'
function createTabs() {
  var tabClass = CLASSNAME.tab;
  var tabbarClass = CLASSNAME.tabbar;
  var tabbarCtnr = document.getElementById(ID.tabbarCtnr);
  Object.keys(DATA).forEach(function (dataItemkey) {
    // se dados for configurado pra table
    // logica sobre "bar" esta no "js/rangebar/"
    if (DATA[dataItemkey].type === "table") {
      var tabbar = document.createElement('div');
      tabbar.classList.add(tabbarClass);
      Object.keys(DATA[dataItemkey].table).forEach(function (tabName) {
        var tab = document.createElement('button');
        tab.classList.add(tabClass);
        var span = document.createElement('span');
        span.innerHTML = tabName; // ***************************************************
        // PRECISA INSERIR LOGICA PARA
        // PROCESSAMENTO DE TEXT APOS DA <SPAN> 
        // (LABEL DO TAB)
        // ***************************************************

        tab.appendChild(span);
        tabbar.appendChild(tab);
      });
      tabbarCtnr.appendChild(tabbar);
    }
  });
}