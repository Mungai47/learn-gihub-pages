/*!
 * Instafeed 
 */
// Generated by CoffeeScript 1.9.3
(function(){var t,e,o;t=function(){function t(t,e){var o,i;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(o in t)i=t[o],this.options[o]=i;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},t.prototype.run=function(e){var o,i;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&((i=document.createElement("script")).id="instafeed-fetcher",i.src=e||this._buildUrl(),document.getElementsByTagName("head")[0].appendChild(i),o="instafeedCache"+this.unique,window[o]=new t(this.options,this),window[o].unique=this.unique),!0},t.prototype.parse=function(t){var e,o,i,n,s,r,a,p,l,h,c,u,d,f,m,g,y,w,b,k,_,E,I,v,x,N,B,j;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(x="least"===(N="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"))[0],N[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",x);break;case"liked":t.data=this._sortBy(t.data,"likes.count",x);break;case"commented":t.data=this._sortBy(t.data,"comments.count",x);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&!1===this.options.mock){if(u=t.data,v=parseInt(this.options.limit,10),null!=this.options.limit&&u.length>v&&(u=u.slice(0,v)),r=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(u=this._filter(u,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(a="","","",j=document.createElement("div"),p=0,k=u.length;p<k;p++){if(h=(l=u[p]).images[this.options.resolution],ps=l.images.standard_resolution,"object"!=typeof ps)throw s="No image found for resolution: standard_resolution.",new Error(s);if("object"!=typeof h)throw s="No image found for resolution: "+this.options.resolution+".",new Error(s);m="square",(g=h.width)>(f=h.height)&&(m="landscape"),g<f&&(m="portrait"),c=h.url,Es=ps.width,ys=ps.height,Es>ys&&(m="landscape"),Es<ys&&(m="portrait"),vs=ps.url,window.location.protocol.indexOf("http")>=0&&!this.options.useHttp&&(c=c.replace(/https?:\/\//,"//")),a+=this._makeTemplate(this.options.template,{model:l,id:l.id,link:l.link,type:l.type,image:c,image_standard:vs,width:g,height:f,orientation:m,caption:this._getObjectProperty(l,"caption.text"),likes:l.likes.count,comments:l.comments.count,location:this._getObjectProperty(l,"location.name")})}for(j.innerHTML=a,n=[],i=0,o=j.childNodes.length;i<o;)n.push(j.childNodes[i]),i+=1;for(w=0,_=n.length;w<_;w++)I=n[w],r.appendChild(I)}else for(b=0,E=u.length;b<E;b++){if(l=u[b],d=document.createElement("img"),"object"!=typeof(h=l.images[this.options.resolution]))throw s="No image found for resolution: "+this.options.resolution+".",new Error(s);c=h.url,window.location.protocol.indexOf("http")>=0&&!this.options.useHttp&&(c=c.replace(/https?:\/\//,"//")),d.src=c,!0===this.options.links?((e=document.createElement("a")).href=l.link,e.appendChild(d),r.appendChild(e)):r.appendChild(d)}if("string"==typeof(B=this.options.target)&&(B=document.getElementById(B)),null==B)throw s='No element with id="'+this.options.target+'" on page.',new Error(s);B.appendChild(r),document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")),y="instafeedCache"+this.unique,window[y]=void 0;try{delete window[y]}catch(t){t}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,o;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return o=t+"/"+e,null!=this.options.accessToken?o+="?access_token="+this.options.accessToken:o+="?client_id="+this.options.clientId,null!=this.options.limit&&(o+="&count="+this.options.limit),o+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return""+(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var o,i,n,s,r;for(i=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;i.test(o);)s=o.match(i)[1],r=null!=(n=this._getObjectProperty(e,s))?n:"",o=o.replace(i,function(){return""+r});return o},t.prototype._getObjectProperty=function(t,e){var o,i;for(i=(e=e.replace(/\[(\w+)\]/g,".$1")).split(".");i.length;){if(o=i.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},t.prototype._sortBy=function(t,e,o){var i;return i=function(t,i){var n,s;return n=this._getObjectProperty(t,e),s=this._getObjectProperty(i,e),o?n>s?1:-1:n<s?1:-1},t.sort(i.bind(this)),t},t.prototype._filter=function(t,e){var o,i,n,s,r;for(o=[],i=function(t){if(e(t))return o.push(t)},n=0,r=t.length;n<r;n++)s=t[n],i(s);return o},t}(),e=this,o=function(){return t},"function"==typeof define&&define.amd?define([],o):"object"==typeof module&&module.exports?module.exports=o():e.Instafeed=o()}).call(this);
 



// Instagram section 

var INSTAGRAM_SELECTOR = '.tt-instagram';
var INSTAGRAM_OPTIONS = {
    get: 'user',
    userId: 'self',
    resolution: 'low_resolution'
};
var INSTAGRAM_TEMPLATE = '<div class="item"><div class="instaitem"><a  target="_blank" href="\{\{link\}\}" ><img class="size-info"  width="320" height="320" src="\{\{image\}\}" alt="Instagram"></a></div><div class="info pa tc flex ts__03 center-xs middle-xs"><span class="likes"><a href="\{\{link\}\}"  target="_blank"><i class="mdi mdi-heart-outline"></i>\{\{likes\}\}</a></span><span class="comments"><a href="\{\{link\}\}"  target="_blank"><i class="mdi mdi-comment-multiple-outline"></i>\{\{comments\}\}</a></span><span class="zoom_icon"><a class="lightbox_link" href="\{\{image_standard\}\}" target="_blank"  data-lightbox="insta-images"><i class="mdi mdi-magnify"></i></a></span></div></div>';

var instagrams = {};

function instagram_init(instagram_element) {
    var section = instagram_element.dataset.id;

    // Read the Instagram token
    var token_input = document.querySelector('#token-' + section);
    if (!token_input) {
        // We don't have a token, no data are available and placeholder is shown
        return;
    }
    var token = token_input.value;

    // Set up options for Instafeed
    var target = document.querySelector('#instafeed-' + section);
    var rows = parseInt(target.dataset.rows), grid = parseInt(target.dataset.grid), sortBy = target.dataset.sortBy;
    var options = $.extend({}, {
        limit: 12,
        target: target,
        accessToken: token,
        sortBy: sortBy,
        template: INSTAGRAM_TEMPLATE.replace('%grid%', grid),
        after: function () {
          $('body:not(.rtl) #instafeed-' + section).slick({ autoplay:true });
          $('body.rtl #instafeed-' + section).slick({
            rtl: true,
              autoplay:true
          });
	    },
        error: function (message) {
            console.error("Unable to download Instagram data: " + message);
        }
    }, INSTAGRAM_OPTIONS);

    // Remove all previous images
    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }

    // Fetch and show Instagram pictures
    var feed = new Instafeed(options);
    feed.run();
}

function load_instagram(target) {
    var instagram_elements = target.querySelectorAll(INSTAGRAM_SELECTOR);
    Array.prototype.forEach.call(instagram_elements, instagram_init);
}

function get_section_name(event) {
    var section = null;
    if (event && event.detail) {
        var data = {};
        var dataset = event.target.dataset;
        for (var key in dataset) {
            if (dataset.hasOwnProperty(key) && key.indexOf('themeEditorSection-') === 0) {
                data = JSON.parse(dataset[key]);
            }
        }
        if (data.hasOwnProperty('type')) {
            section = data['type'];
        }
    }
    return section;
}
function onload(event) {
 var section = get_section_name(event);
    if (!section || section === 'instagram') {
        load_instagram(event.target);
    }
}
document.addEventListener('shopify:section:load', onload);
document.addEventListener('shopify:section:unload', onload);
document.addEventListener("DOMContentLoaded", onload);