define(["appSettings","emby-checkbox"],function(e){function r(r){var n=e.cameraUploadServers();r.querySelector(".uploadServerList").innerHTML=ConnectionManager.getSavedServers().map(function(e){var r=-1==n.indexOf(e.Id)?"":" checked",a='<label><input type="checkbox" is="emby-checkbox"'+r+' class="chkUploadServer" data-id="'+e.Id+'"/><span>'+e.Name+"</span></label>";return a}).join(""),Dashboard.hideLoadingMsg()}function n(r){for(var n=r.querySelectorAll(".chkUploadServer"),a=[],t=0,i=n.length;i>t;t++)n[t].checked&&a.push(n[t].getAttribute("data-id"));e.cameraUploadServers(a),Dashboard.hideLoadingMsg()}return function(e,a){e.querySelector("form").addEventListener("submit",function(r){return Dashboard.showLoadingMsg(),n(e),r.preventDefault(),!1}),e.addEventListener("viewshow",function(){var e=this;Dashboard.showLoadingMsg();var n=a.userId||Dashboard.getCurrentUserId();ApiClient.getUser(n).then(function(n){r(e,n)})}),e.addEventListener("viewbeforehide",function(){n(this)})}});