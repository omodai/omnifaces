var OmniFaces=OmniFaces||{};
OmniFaces.Unload=function(e,n){function t(){for(var e=0;e<n.forms.length;e++)if(n.forms[e][r])return n.forms[e];return null}function a(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent&&e.attachEvent("on"+n,t)}function i(e,n){var t=e[n];t&&(e[n]=function(){return s.disable(),t.apply(this,arguments)})}var r="javax.faces.ViewState",o=!1,s={};return s.init=function(c){if(e.XMLHttpRequest){var u=t();u&&(a(e,"beforeunload",function(){if(o)return void(o=!1);try{var e=new XMLHttpRequest;e.open("POST",u.action.split(/[?#;]/)[0],!1),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("omnifaces.event=unload&id="+c+"&"+r+"="+encodeURIComponent(u[r].value))}catch(n){}}),a(n,"submit",function(){s.disable()}),e.mojarra&&i(mojarra,"jsfcljs"),e.myfaces&&i(myfaces.oam,"submitForm"),e.PrimeFaces&&i(PrimeFaces,"addSubmitParam"))}},s.disable=function(){o=!0},s}(window,document);