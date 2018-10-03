var input = document.getElementById("input");
var btn = document.getElementById("btn");
var cnt = document.getElementsByClassName("container");
var cntForSimilarVideo = document.getElementsByClassName("cntForSimilarVideo");


function getVideo () {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=" + input.value + "&type=video", true);
		xhr.onload = function () {
			var result = JSON.parse(xhr.response);
			
			console.log(result.items[0]);
			console.log(result.items[0].snippet.thumbnails.high.url);
			resolve(result);
		}
		xhr.send();
	});
}


btn.onclick = function () {
	getVideo().then(function (result) {
		var iframe = document.getElementById("iframe");
		if (iframe) {
			cnt[0].removeChild(iframe);
		} 
		var iframe = document.createElement("iframe");
		iframe.setAttribute("id", "iframe");
		iframe.setAttribute("src", "https://www.youtube.com/embed/" + result.items[0].id.videoId);
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allow", "autoplay; encrypted-media");
		iframe.setAttribute("allowfullscreen", '');

		cnt[0].appendChild(iframe);
		return result;
	}, function () {
		alert("Sorry. Call Back Later")
	}).then(function (obj) {
		cntForSimilarVideo[0].innerHTML = " ";
		for (var i = 1; i < obj.items.length; i++) {
			var iframeSimilar = document.createElement("iframe");
			iframeSimilar.setAttribute("class", "iframeSimilar");
			iframeSimilar.setAttribute("src", "https://www.youtube.com/embed/" + obj.items[i].id.videoId);
			iframeSimilar.setAttribute("frameborder", "0");
			iframeSimilar.setAttribute("allow", "autoplay; encrypted-media");
			iframeSimilar.setAttribute("allowfullscreen", '');
			cntForSimilarVideo[0].appendChild(iframeSimilar);
		}
	});
}



























// btn.onclick = function () {

// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=" + input.value + "&type=video", true);
// 	xhr.onload = function () {
// 		var result = JSON.parse(xhr.response);
// 		var firstVideo = result.items[0].id.videoId;

// 		searchVideo (firstVideo);
// 		searchSimilarVideo (result);
// 	}
// 	xhr.send();
// }

// function searchVideo (firstVideo) {
// 	var iframe = document.getElementById("iframe");
// 	if (iframe) {
// 		cnt[0].removeChild(iframe);
// 	} 
// 	var iframe = document.createElement("iframe");
// 	iframe.setAttribute("id", "iframe");
// 	iframe.setAttribute("src", "https://www.youtube.com/embed/" + firstVideo);
// 	iframe.setAttribute("frameborder", "0");
// 	iframe.setAttribute("allow", "autoplay; encrypted-media");
// 	iframe.setAttribute("allowfullscreen", '');

// 	cnt[0].appendChild(iframe);
// }

// function searchSimilarVideo (obj) {
// 	cntForSimilarVideo[0].innerHTML = " ";
// 	for (var i = 1; i < obj.items.length; i++) {
// 		var iframeSimilar = document.createElement("iframe");
// 		iframeSimilar.setAttribute("class", "iframeSimilar");
// 		iframeSimilar.setAttribute("src", "https://www.youtube.com/embed/" + obj.items[i].id.videoId);
// 		iframeSimilar.setAttribute("frameborder", "0");
// 		iframeSimilar.setAttribute("allow", "autoplay; encrypted-media");
// 		iframeSimilar.setAttribute("allowfullscreen", '');
// 		cntForSimilarVideo[0].appendChild(iframeSimilar);
// 	}
// }










