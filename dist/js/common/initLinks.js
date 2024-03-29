"use strict";

function setLinks(linksData) {
  var iconUrl = {
    facebook: "./img/ico-fb.png",
    twitter: "./img/ico-tw.png",
    linkedin: "./img/ico-in.png",
    youtube: "./img/ico-yt.png"
  };
  var div1Description = document.getElementById('link-description-1');
  div1Description.innerHTML = linksData.footerLinks.div1.title.replace(' ', '&nbsp;');
  var div1 = document.getElementById('links-ctnr-1');
  linksData.footerLinks.div1.linkdata.forEach(function (data) {
    div1.append(createLinkTag(data));
  });
  var div2Description = document.getElementById('link-description-2');
  div2Description.innerHTML = linksData.footerLinks.div2.title.replace(' ', '&nbsp;');
  var div2 = document.getElementById('links-ctnr-2');
  linksData.footerLinks.div2.linkdata.forEach(function (data) {
    div2.append(createLinkTag(data));
  });

  function createLinkTag(data) {
    var link = document.createElement('a');
    link.href = data.url || '#';
    link.target = data.newtab ? '_blank' : '';
    link.classList.add('links__link');
    var img = document.createElement('img');
    img.src = iconUrl.hasOwnProperty(data.icon) ? iconUrl[data.icon] : data.icon;
    img.alt = "icon-".concat(data.icon);
    link.appendChild(img);
    return link;
  }
}

function setLogoLinks(linkData) {
  var k2Logo = document.getElementById('k2-logo-link');
  k2Logo.href = linkData.mainLogo.url || '#';
  k2Logo.target = linkData.mainLogo.newtab ? '_blank' : '';
  var portoLogo = document.getElementById('porto-logo-link');
  portoLogo.href = linkData.portoSeguroLogo.url || '#';
  portoLogo.target = linkData.portoSeguroLogo.newtab ? '_blank' : '';
  var requestLink = document.getElementById('request-link');
  requestLink.href = linkData.solicitarProposta.url || '#';
  requestLink.target = linkData.solicitarProposta.newtab ? '_blank' : '';
}