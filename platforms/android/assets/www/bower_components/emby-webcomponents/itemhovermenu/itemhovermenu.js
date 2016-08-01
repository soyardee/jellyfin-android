define(["connectionManager","itemHelper","mediaInfo","userdataButtons","playbackManager","globalize","dom","apphost","css!./itemhovermenu","emby-button"],function(t,e,a,i,n,r,o,s){function d(t){var e=t.target;h&&(clearTimeout(h),h=null),e=e.classList.contains("cardOverlayTarget")?e:e.querySelector(".cardOverlayTarget"),e&&l(e)}function l(t){return t.classList.contains("hide")?void 0:t.animate?void requestAnimationFrame(function(){var e=[{transform:"none",offset:0},{transform:"translateY(100%)",offset:1}],a={duration:140,iterations:1,fill:"forwards",easing:"ease-out"};t.animate(e,a).onfinish=function(){t.classList.add("hide")}}):void t.classList.add("hide")}function c(t){t.classList.contains("hide")&&(t.classList.remove("hide"),t.animate&&requestAnimationFrame(function(){var e=[{transform:"translateY(100%)",offset:0},{transform:"none",offset:1}],a={duration:180,iterations:1,fill:"forwards",easing:"ease-out"};t.animate(e,a)}))}function m(t,o,d,l){var c="";c+='<div class="cardOverlayInner">';var m=l.className.toLowerCase(),u=-1!=m.indexOf("mini"),v=u||-1!=m.indexOf("small"),f=-1!=m.indexOf("portrait"),g=v||u||f?null:o.SeriesName,h=e.getDisplayName(o);c+="<div>";var p,y=26;g&&o.ParentLogoItemId?(p=t.getScaledImageUrl(o.ParentLogoItemId,{maxHeight:y,type:"logo",tag:o.ParentLogoImageTag}),c+='<img src="'+p+'" style="max-height:'+y+'px;max-width:100%;" />'):o.ImageTags.Logo?(p=t.getScaledImageUrl(o.Id,{maxHeight:y,type:"logo",tag:o.ImageTags.Logo}),c+='<img src="'+p+'" style="max-height:'+y+'px;max-width:100%;" />'):c+=g||h,c+="</div>",g?(c+="<p>",c+=h,c+="</p>"):v||u||(c+='<div class="cardOverlayMediaInfo">',c+=a.getPrimaryMediaInfoHtml(o,{endsAt:!1}),c+="</div>"),c+='<div class="cardOverlayButtons">';var b=0;n.canPlay(o)&&(c+='<button is="emby-button" class="itemAction autoSize fab mini" data-action="playmenu"><i class="md-icon">&#xE037;</i></button>',b++),o.LocalTrailerCount&&(c+='<button title="'+r.translate("sharedcomponents#Trailer")+'" is="emby-button" class="itemAction autoSize fab mini" data-action="playtrailer"><i class="md-icon">&#xE04B;</i></button>',b++);var L="dots-horiz"==s.moreIcon?"&#xE5D3;":"&#xE5D4;";return c+='<button is="emby-button" class="itemAction autoSize fab mini" data-action="menu" data-playoptions="false"><i class="md-icon">'+L+"</i></button>",b++,c+=i.getIconsHtml({item:o,style:"fab-mini"}),c+="</div>",c+="</div>"}function u(e){var a=e.querySelector(".cardOverlayTarget");if(!a){a=document.createElement("div"),a.classList.add("hide"),a.classList.add("cardOverlayTarget");var i=o.parentWithClass(e,"cardContent")||e;i.appendChild(a)}var n=o.parentWithAttribute(e,"data-id");if(n){var r=n.getAttribute("data-id"),s=n.getAttribute("data-type");if("Timer"!=s){var d=n.getAttribute("data-serverid"),l=t.getApiClient(d),u=l.getItem(l.getCurrentUserId(),r),v=l.getCurrentUser();Promise.all([u,v]).then(function(t){var e=t[0],i=t[1];a.innerHTML=m(l,e,i,n)}),c(a)}}}function v(t){var e=t.target,a=o.parentWithClass(e,"cardImageContainer");if(a){if(p===!0)return void(p=!1);h&&(clearTimeout(h),h=null),h=setTimeout(function(){u(a)},1e3)}}function f(){p=!0}function g(t){this.parent=t,this.parent.addEventListener("mouseenter",v,!0),this.parent.addEventListener("mouseleave",d,!0),this.parent.addEventListener("touchstart",f)}var h,p=!1;return g.prototype={constructor:g,destroy:function(){this.parent.removeEventListener("mouseenter",v,!0),this.parent.removeEventListener("mouseleave",d,!0),this.parent.removeEventListener("touchstart",f)}},g});