"use strict";$(document).ready(function(){var t=$(".slider__up__list"),n=$(".slider__down__cont__list");$("#btn_left, #btn_right").on("click",function(r){var a=r.target.id;i(t,a),i(n,a)});var i=function t(n,i){var r=n.find("btn_left"===i?"img:first-child":"img:last-child"),a="btn_left"===i?-r.width()-10:r.width()+10;n.css({transform:"translateX(".concat(a,"px)"),transition:"transform 0.6s ease-out"}),setTimeout(function(){n.css({transition:"none",transform:"translateX(".concat(0,"px)")}),"btn_left"===i?(r.remove(),n.append(r.fadeIn("600"))):n.prepend(r)},600)}});