function say(status, jsonResult){
	if(status == "200"){
		var type = jsonResult.type.type;
		document.getElementById("options").style.display = "flex";
		document.getElementById("options-image").style.display = "flex";
		document.getElementById("options-default").style.display = "none";
		document.getElementById("name").innerHTML = jsonResult.name;
		document.getElementById("logoutButton").onclick = function(){
			document.getElementById("command").value = "logout";
			document.getElementById("commandForm").submit();
		}
		
		if(type == 0){
			document.getElementById("settingButton").style.display = "none";
			document.getElementById("dashButton").style.display = "none";
		}else{
			document.getElementById("dashButton").onclick = function(){
				if(type == "1"){
					window.location = "clients/home.php";
				}else if(type == "2"){
					window.location = "workers/home.php";
				}
			}
		}
	}
}

function login(id){
	var url = "api/users/read.php";
	var jsonRequest = { "id" : id};
	request(url, jsonRequest, say);
}

var item = '<div class="col">' +
				'<div class="card shadow">' +
					'<svg class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>' +
					'<div class="card-body">' +
						'<p class="card-text" style="font-size:13px;">' +
							'This is a wider card with supporting text below as a natural lead-in to' +
							'additional content. This content is a little bit longer.' +
						'</p>' +
						'<div class="d-flex justify-content-between align-items-center">' +
							'<a class="btn btn-sm btn-outline-secondary" href="download.php">Download</a>' +
							'<small class="text-muted">9 mins</small>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
const container = document.getElementById("downloads-container");
for(i = 0; i < 3; i++){
	container.innerHTML += item;
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container .collapse ul li");
