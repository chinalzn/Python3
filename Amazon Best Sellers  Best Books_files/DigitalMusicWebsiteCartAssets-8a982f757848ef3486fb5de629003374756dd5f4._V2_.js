(function(g,v,M){g.execute(function(){g.when("A").register("dmusic_webstore_music_cart",function(c){function a(a,b){var e="dm_ws_unknwn_a2c_"+a.asin;"buyBox"===a.loc?e="dm_ws_bb_a2c":"tracklistPlayer"===a.loc?e="dm_ws_tlw_a2c":"search"===a.loc&&(e="dm_ext_s_a2c");var k=a.qid,d=a.sr;if(null===k||k===M)k=/[\?&]qid=([^&#]*)/.exec(location.search),null!==k&&k!==M&&(k=k[1]);if(null===d||d===M)d=/[\?&]sr=([^&#]*)/.exec(location.search),null!==d&&d!==M&&(d=d[1]);a.event=b;e={url:"/gp/dmusic/purchase/utility/add-to-cart.html/ref="+
e,data:{ASIN:a.asin},type:"POST",dataType:"json",cache:!1};null!==k&&k!==M&&(e.data.qid=k);null!==d&&d!==M&&(e.data.sr=d);e.success=function(b){if(b&&b.cartInfo&&b.success){var c=b.cartInfo.CheckedCartSize||0,c=c+(b.cartInfo.UncheckedCartSize||0);r(c);a.title&&"ok"===b.success?t(a.title):"errorInputOverflow"!==b.success&&"errorMusicCartOverflow"!==b.success||m(a);a.success="ok"===b.success?!0:!1}else a.success=!1;b=a.callback;if("function"===typeof v[b])v[b](a)};e.error=function(b){a.success=!1;var c=
a[c];if("function"===typeof v[c])v[c](a)};c.$.ajax(e)}function b(b,c){if("object"!==typeof b)return!0;var e={};e.asin=b.getAttribute("data-asin")||b.getAttribute("value");e.title=b.getAttribute("data-title")||"";e.callback=b.getAttribute("data-callback")||"";e.action="add";e.loc=b.getAttribute("data-location")||"unknown";e.qid=b.getAttribute("data-qid")||M;e.sr=b.getAttribute("data-sr")||M;return e.asin?(c.preventDefault(),a(e,c),!1):!0}function g(a,b){var e="dm_ws_unknwn_rfc_"+a.asin;"buyBox"===
a.loc?e="dm_ws_bb_rfc_"+a.asin:"tracklistPlayer"===a.loc&&(e="dm_ws_tlw_rfc_"+a.asin);a.event=b;c.$.ajax({url:"/gp/dmusic/purchase/utility/remove-from-cart.html/ref="+e,data:{ASIN:a.asin},type:"POST",dataType:"json",cache:!1,success:function(b){if(b&&b.cartInfo&&b.success){var c=b.cartInfo.CheckedCartSize||0,c=c+(b.cartInfo.UncheckedCartSize||0);r(c);a.success=!0}else a.success=!1;b=a.callback;if("function"===typeof v[b])v[b](a)},error:function(b){a.success=!1;b=a.callback;if("function"===typeof v[b])v[b](a)}})}
function A(a,b){if("object"!==typeof a)return!0;var c={};c.asin=a.getAttribute("data-asin")||a.getAttribute("value");c.title=a.getAttribute("data-title")||"";c.callback=a.getAttribute("data-callback")||"";c.action="remove";c.loc=a.getAttribute("data-location")||"unknown";return c.asin?(b.preventDefault(),g(c,b),!1):!0}function y(){var a=c.$(".MusicCartAddButton"),m=c.$(".MusicCartRemoveButton");c.$.isFunction(a.live)?a.live("click",function(a){b(this,a)}):a.click(function(a){b(this,a)});c.$.isFunction(m.live)?
m.live("click",function(a){A(this,a)}):m.click(function(a){A(this,a)})}function E(a,b){a&&c.$.ajax({url:"/gp/dmusic/purchase/utility/promoHelper.html",data:{operation:"redeemCode",code:a},type:"POST",dataType:"json",cache:!1,success:function(a){b(a.success)},error:function(a){b("0")}})}var r=function(a){var b=c.$(".MusicCartBarCounter"),e=c.$("#EmptyMP3Cart"),k=c.$("#NonEmptyMP3Cart"),d=1;if("object"!==typeof b||0===b.length)d=0,b=c.$(".MusicCartBarCounterFullCSS");var m=c.$(".MusicCartBarCounterText");
if("object"!==typeof m||0===m.length)d=0,m=c.$(".MusicCartBarCounterTextFullCSS");if("object"!==typeof b||1>b.length||"object"!==typeof m||1>m.length)return!1;0===a?(b.hide(),k.hide(),e.show()):(m.text(a.toString()),b.css({display:"inline-block"}),k.show(),e.hide(),99<a?m.css({"font-size":"8px","margin-top":"4px"}):m.css({"font-size":"11px","margin-top":d?"4px":"2px"}))},t=function(a){var b=c.$("#MusicCartToastContainer"),e=c.$("#MusicCartToastTitle"),k=c.$(".MusicCartToastText");"object"===typeof e&&
0<e.length&&e.html(a);"object"===typeof b&&0<b.length&&"object"===typeof e&&0<e.length&&"object"===typeof k&&0<k.length&&(b.show(),setTimeout(function(){c.$("#MusicCartToastContainer").fadeOut(1E3)},2E3))},m=function(a){a=c.$("#MusicCartFullToastContainer");"object"===typeof a&&0<a.length&&(a.show(),setTimeout(function(){c.$("#MusicCartFullToastContainer").fadeOut(1E3)},3E3))};return{setCartCount:r,showAddToCartToast:t,showFullCartToast:m,setupMusicCartButtons:y,setupMusicCartBar:function(a){a&&0!==
a.customerId&&"0"!==a.customerId&&(a={url:"/gp/dmusic/purchase/utility/get-cart-info.html",type:"POST",dataType:"json",cache:!1,success:function(a){if(a&&a.cartInfo&&a.status){var b=a.cartInfo.CheckedCartSize||0,b=b+(a.cartInfo.UncheckedCartSize||0);r(b)}},error:function(a){}},c.$.ajax(a),y());a=c.$(".MusicCartStickyBit");if(!(1>a.length)){var b=c.$(".MusicCartBarSpacer");1>b.length&&(b=c.$(".MusicCartBarSpacerFullCSS"));0<b.length&&(a.css({position:"absolute"}),b.css({display:"inline-block"}));a=
c.$(".MusicCartBarSpacer");"object"!==typeof a||1>a.length||"function"!==typeof a.position||(a=a.position().top,"undefined"!==typeof a&&"function"===typeof a.toString&&(a=function(a){a=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;var b=c.$(".MusicCartBarSpacer").position().top,d=c.$(".MusicCartStickyBit");"undefined"!==typeof a&&a>b?d.css({position:"fixed",top:"0px","box-shadow":"3px 3px 3px rgba(0,0,0,0.1)"}):d.css({position:"fixed",top:(b-a).toString()+"px",
"box-shadow":"0px 0px 0px rgba(0,0,0,0.1)"})},c.$(v).scroll(a),a()))}},setupReviewList:function(){for(var a=function(a){a||(a=v.event);var b=a.srcElement?a.srcElement:a.target?a.target:null;if("input"===b.nodeName.toLowerCase()){a=b.defaultValue;var b=b.checked,d=c.$("#purchaseASINs");if(d&&0<d.length)if(b)d.attr("value",d.attr("value")+a);else{var e=d.attr("value"),e=e.replace(new RegExp(a,"g"),"");d.attr("value",e)}(d=c.$("#MusicCartReviewListRow"+a))&&0<d.length&&(b?(d.removeClass("MusicCartReviewListRowUnselected"),
d.addClass("MusicCartReviewListRowSelected")):(d.addClass("MusicCartReviewListRowUnselected"),d.removeClass("MusicCartReviewListRowSelected")));d=c.$(".MusicCartReviewListCurrentSelectedCounter");0<d.length&&(b?d.text(parseInt(d.text(),10)+1):0<parseInt(d.text(),10)&&d.text(parseInt(d.text(),10)-1),2>parseInt(d.text(),10)&&c.$(".MusicCartReviewListCurrentSelectedSingleCounter").text(b?1:0),e=c.$(".MusicCartReviewContinueButton"),"object"===typeof e&&0<e.length&&(1>parseInt(d.text(),10)?e.addClass("a-button-disabled"):
e.removeClass("a-button-disabled")),e=c.$("#modalEditCartCheckoutButton"),"object"===typeof e&&0<e.length&&(1>parseInt(d.text(),10)?e.addClass("a-button-disabled"):e.removeClass("a-button-disabled")));e=c.$("#"+a+"Checkbox");d=c.$("#OrderSubtotal");if(0<e.length&&0<d.length){var h=e.attr("data-price");if(h){var f=e=!1;/￥/.test(d.text())&&(e=!0);/EUR/.test(d.text())&&(f=!0);var k=d.text().match(/\d.*/);f&&(k=k.toString().replace(",","."));e&&(k=k.toString().replace(",",""));h=b?d.text().replace(/\d.*/,
(parseFloat(k)+parseFloat(h)).toFixed(2)):d.text().replace(/\d.*/,(parseFloat(k)-parseFloat(h)).toFixed(2));f&&(h=h.toString().replace(".",","));e&&(h=h.toString().replace(".00",""),h=h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","));d.text(h);f=e=!1}}d="dm_ws_ec_"+(b?"ck":"uck")+(0<c.$(".ModalPurchase").length?"_mdl":"_fl");d={url:"/gp/dmusic/purchase/utility/check-uncheck-asin.html/ref="+d,data:{},type:"POST",dataType:"json",cache:!1};b?d.data.checkASINs=a:d.data.uncheckASINs=a;d.success=function(a){};
d.error=function(a){};c.$.ajax(d)}},b=function(a){var b=a.value.toString();a=a.checked;var d=c.$("#purchaseASINs");if(d&&0<d.length)if(a)d.attr("value",d.attr("value")+b);else{var e=d.attr("value"),e=e.replace(new RegExp(b,"g"),"");d.attr("value",e)}d=c.$("#MusicCartReviewListRow"+b);0<d.length&&(a?(d.removeClass("MusicCartReviewListRowUnselected"),d.addClass("MusicCartReviewListRowSelected")):(d.addClass("MusicCartReviewListRowUnselected"),d.removeClass("MusicCartReviewListRowSelected")));d=c.$(".MusicCartReviewListCurrentSelectedCounter");
0<d.length&&(a?d.text(parseInt(d.text(),10)+1):0<parseInt(d.text(),10)&&d.text(parseInt(d.text(),10)-1),2>parseInt(d.text(),10)&&c.$(".MusicCartReviewListCurrentSelectedSingleCounter").text(a?1:0),e=c.$(".MusicCartReviewContinueButton"),"object"===typeof e&&0<e.length&&(1>parseInt(d.text(),10)?e.addClass("a-button-disabled"):e.removeClass("a-button-disabled")),e=c.$("#modalEditCartCheckoutButton"),"object"===typeof e&&0<e.length&&(1>parseInt(d.text(),10)?e.addClass("a-button-disabled"):e.removeClass("a-button-disabled")));
d=c.$("#"+b+"Checkbox");b=c.$("#OrderSubtotal");if(0<d.length&&0<b.length){var h=d.attr("data-price");if(h){e=d=!1;/￥/.test(b.text())&&(d=!0);/EUR/.test(b.text())&&(e=!0);var f=b.text().match(/\d.*/);e&&(f=f.toString().replace(",","."));d&&(f=f.toString().replace(",",""));a=a?b.text().replace(/\d.*/,(parseFloat(f)+parseFloat(h)).toFixed(2)):b.text().replace(/\d.*/,(parseFloat(f)-parseFloat(h)).toFixed(2));e&&(a=a.toString().replace(".",","));d&&(a=a.toString().replace(".00",""),a=a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
","));b.text(a)}}},e=function(a){for(var d="",e=0;e<a.length;e++)a[e].checked||(d+=a[e].value.toString(),a[e].checked=!0,b(a[e]));a="dm_ws_ec_sa"+(0<c.$(".ModalPurchase").length?"_mdl":"_fl");c.$.ajax({url:"/gp/dmusic/purchase/utility/check-uncheck-asin.html/ref="+a,data:{checkASINs:d},type:"POST",dataType:"json",cache:!1,success:function(a){c.$("#MusicCartSelectAllLink").hide()},error:function(a){}})},k=c.$("#MusicCartSelectAllLink"),d=c.$(".MusicCartReviewListActualCheckbox").find("input:checkbox"),
m=c.$(".MusicCartReviewListFullPageActualCheckbox").find("input:checkbox"),f=0;f<d.length;f++)if(!d[f].checked){k.show();break}for(f=0;f<m.length;f++)if(!m[f].checked){k.show();break}k.click(function(){d=c.$(".MusicCartReviewListActualCheckbox").find("input:checkbox");m=c.$(".MusicCartReviewListFullPageActualCheckbox").find("input:checkbox");0!==d.length?e(d):0!==m.length&&e(m)});d.click(function(){this.checked?d.length===c.$(".MusicCartReviewListActualCheckbox").find("input:checkbox:checked").length&&
k.hide():k.show()});m.click(function(){this.checked?m.length===c.$(".MusicCartReviewListFullPageActualCheckbox").find("input:checkbox:checked").length&&k.hide():k.show()});(f=c.$(".MusicCartReviewListCheckHidden"))&&0<f.length&&(f.removeClass("MusicCartReviewListCheckHidden"),f.addClass("MusicCartReviewListCheck"),f=c.$(".MusicCartReviewListActualCheckbox"),f.click(a),f=c.$(".MusicCartReviewListFullPageActualCheckbox"),f.click(a));a=function(a){if(1!==c.$(".MusicCartReviewListDeleteLink").length){a||
(a=v.event);var b=a.srcElement?a.srcElement:a.target?a.target:null,d=b.getAttribute("data-asin"),e=b.getAttribute("data-callback");if(d&&(a.preventDefault(),g({asin:d,callback:e}),(a=c.$("#purchaseASINs"))&&0<a.length&&(e=a.attr("value"),e=e.replace(new RegExp(d,"g"),""),a.attr("value",e)),(a=c.$("#MusicCartReviewListRow"+d.toString()))&&0<a.length)){a.find(".MusicCartReviewListActualCheckbox").removeClass("MusicCartReviewListActualCheckbox");a.find(".MusicCartReviewListFullPageActualCheckbox").removeClass("MusicCartReviewListFullPageActualCheckbox");
a.hide();a.next().hasClass("MusicCartReviewListDivider")||a.next().hasClass("MusicCartReviewListFullPageDivider")?a.next().hide():(a.prev().hasClass("MusicCartReviewListDivider")||a.prev().hasClass("MusicCartReviewListFullPageDivider"))&&a.prev().hide();var h=c.$(".MusicCartReviewListCounter"),e=c.$(".MusicCartReviewListCurrentSelectedCounter");a=c.$(".MusicCartReviewListCurrentTotalCounter");var f=c.$("#"+d+"Checkbox").find("input:checkbox");h&&0<h.length&&(h.text(parseInt(h.text(),10)-1),a.text(parseInt(h.text(),
10)),0<parseInt(e.text(),10)&&f.is(":checked")&&e.text(parseInt(e.text(),10)-1),"1"===h.text()&&(c.$(".MusicCartReviewListMultiItem").hide(),c.$(".MusicCartReviewListSingleItem").show()),"0"===h.text()&&(c.$(".MusicCartReviewListMultiItem").hide(),c.$(".MusicCartReviewListSingleItem").hide()));d=b.getAttribute("data-price");b=c.$("#OrderSubtotal");if(d&&b&&0<b.length&&f.is(":checked")){var k=b.text().match(/\d.*/),h=f=!1;/￥/.test(b.text())&&(f=!0);/EUR/.test(b.text())&&(h=!0);h&&(k=k.toString().replace(",",
"."));f&&(k=k.toString().replace(",",""));d=b.text().replace(/\d.*/,(parseFloat(k)-parseFloat(d)).toFixed(2));h&&(d=d.toString().replace(".",","));f&&(d=d.toString().replace(".00",""),d=d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","));b.text(d)}b=c.$(".MusicCartReviewContinueButton");d=c.$("#modalEditCartCheckoutButton");1>parseInt(e.text(),10)?(b.addClass("a-button-disabled"),d.addClass("a-button-disabled")):(b.removeClass("a-button-disabled"),d.removeClass("a-button-disabled"));e=c.$("#MusicCartReviewItemsSelected");
b=c.$("#MusicCartReviewItemSelected");d=c.$(".MusicCartReviewButtonBox");1>parseInt(a.text(),10)?(e.hide(),b.hide(),d&&v.location.replace("/gp/dmusic/purchase/emptyCart/ref=dm_ws_ec_dli")):1===parseInt(a.text(),10)?(a=c.$(".MusicCartReviewListActualCheckbox").find("input:checkbox"),0===a.length&&(a=c.$(".MusicCartReviewListFullPageActualCheckbox").find("input:checkbox")),c.$(".MusicCartReviewListCurrentSelectedSingleCounter").text(a.is(":checked")?1:0),e.hide(),b.show()):(b.hide(),e.show())}}};(f=
c.$(".MusicCartReviewListDeleteLink"))&&0<f.length&&f.click(a);a=c.$(".MusicCartReviewListCurrentSelectedCounter");f=c.$(".MusicCartReviewContinueButton");"object"===typeof f&&0<f.length&&(1>parseInt(a.text(),10)?f.addClass("a-button-disabled"):f.removeClass("a-button-disabled"));f=c.$("#modalEditCartCheckoutButton");"object"===typeof f&&0<f.length&&(1>parseInt(a.text(),10)?f.addClass("a-button-disabled"):f.removeClass("a-button-disabled"))},setupPromoEntry:function(){var a=c.$(".PromoEntryField"),
b=c.$(".PromoEntryButton");if("object"===typeof a&&0!==a.length&&"object"===typeof b&&0!==b.length){var e=function(){var a=c.$(".PromoEntrySuccess"),b=c.$(".PromoEntryError");"object"===typeof a&&0<a.length&&a.css({display:"inline-block"});"object"===typeof b&&0<b.length&&b.css({display:"none"});a=c.$("#orderAsins");"object"===typeof a&&0!==a.length&&(a={url:"/gp/dmusic/purchase/utility/order-preview-as-string.html/ref=dm_ws_pr_pe",data:{ASIN:a.attr("value")},type:"POST",dataType:"json",cache:!1,
success:function(a){var b=c.$(".MusicCartReviewSubtotalSection");"object"===typeof b&&0<b.length&&b.replaceWith(a.summaryHtml)}},c.$.ajax(a))};b.click(function(){var b=a.val();E(b,function(a){if(a)e();else{a=c.$(".PromoEntrySuccess");var b=c.$(".PromoEntryError");"object"===typeof b&&0<b.length&&b.css({display:"inline-block"});"object"===typeof a&&0<a.length&&a.css({display:"none"})}})});b=c.$(".PromoEntryToggle");"object"===typeof b&&0<b.length&&b.css({display:"inline-block"})}}}});g.when("A","ready").execute(function(c){c.$(".InCartButton").live("mouseenter",
function(a){c.$(this).find(".InCartString").css("display","none");c.$(this).find(".ViewCartString").css("display","block")});c.$(".InCartButton").live("mouseleave",function(a){c.$(this).find(".ViewCartString").css("display","none");c.$(this).find(".InCartString").css("display","block")})})})})(function(){var g=window.AmazonUIPageJS||window.P,v=g._namespace||g.attributeErrors;return v?v("DigitalMusicWebsiteCartAssets"):g}(),window);