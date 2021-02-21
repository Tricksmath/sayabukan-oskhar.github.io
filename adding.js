var x = 1;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var pin1 = 1;
var pin2 = 0;
var pin3 = 0;
var pin4 = 0;
var txt = 'Welcome to My Web...';
var speed = 50;
var label = document.getElementById("label");
var navbar = document.getElementById("navbar");
var bgNavbar = document.getElementById("bg-navbar");
var judulNavbar = document.getElementById("judul-navbar");
var tbl1 = document.getElementById("tbl1");
var tbl2 = document.getElementById("tbl2");
var tbl3 = document.getElementById("tbl3");
var tbl4 = document.getElementById("tbl4");
var tblAfter1 = document.getElementById("tblAfter1");
var tblAfter2 = document.getElementById("tblAfter2");
var tblAfter3 = document.getElementById("tblAfter3");
var tblAfter4 = document.getElementById("tblAfter4");
var containerContent = document.getElementById("container-content");
window.onscroll = function() {myFunction()};
document.getElementById("topButton").style.top = (window.innerHeight - 80)+"px";
for (var h = 1; h <= 4; ++h) {
	document.getElementById("box"+h).style.width = document.getElementById("container-mynotes").offsetWidth + "px";
	document.getElementById("box"+h).style.left = document.getElementById("container-mynotes").offsetWidth * (h-1) + "px";
}

function pembesarLebar(objc, lebarMax, wkt, bts_a, tambahan, jdlJml){
  if (bts_a < lebarMax) {
	var bts_a = bts_a + tambahan;
    objc.style.width = bts_a + jdlJml;

    setTimeout(function(){
        pembesarLebar(objc, lebarMax, wkt, bts_a, tambahan, jdlJml);
    }, wkt);
  }
}
function pengecilLebar(objc, lebarMax, wkt, bts_a, tambahan, jdlJml){
  var bts_a = bts_a - tambahan;
  if (bts_a > lebarMax) {
    objc.style.width = bts_a + jdlJml;

    setTimeout(function(){
        pengecilLebar(objc, lebarMax, wkt, bts_a, tambahan, jdlJml);
    }, wkt);
  }
}
function pindahFadeLeftPanjang(objc, bts_1, bts_2, wkt) {
	if (bts_2 < 1) {
		bts_1 = bts_1 - 10;
		bts_2 = bts_2 + 0.05;
		objc.style.left = bts_1+"px";
		objc.style.opacity = bts_2+"";
		setTimeout(function(){
			pindahFadeLeftPanjang(objc, bts_1, bts_2, wkt);
	    }, wkt);
	}
}
function pindahFadeLeftPendek(objc, bts_1, bts_2, wkt) {
	if (bts_2 < 1) {
		bts_1 = bts_1 - 10;
		bts_2 = bts_2 + 0.1;
		objc.style.left = bts_1+"px";
		objc.style.opacity = bts_2+"";
		setTimeout(function(){
			pindahFadeLeftPendek(objc, bts_1, bts_2, wkt);
	    }, wkt);
	}
}
function pindahFadeRightPanjang(objc, bts_1, bts_2, wkt) {
	if (bts_2 < 1) {
		bts_1 = bts_1 - 10;
		bts_2 = bts_2 + 0.05;
		objc.style.right = bts_1+"px";
		objc.style.opacity = bts_2+"";
		setTimeout(function(){
			pindahFadeRightPanjang(objc, bts_1, bts_2, wkt);
	    }, wkt);
	}
}
function pindahFadeRightPendek(objc, bts_1, bts_2, wkt) {
	if (bts_2 < 1) {
		bts_1 = bts_1 - 10;
		bts_2 = bts_2 + 0.1;
		objc.style.right = bts_1+"px";
		objc.style.opacity = bts_2+"";
		setTimeout(function(){
			pindahFadeRightPendek(objc, bts_1, bts_2, wkt);
	    }, wkt);
	}
}
function pindahFadeBottomPendek(objc, bts_1, bts_2, wkt) {
	if (bts_2 < 1) {
		bts_1 = bts_1 + 10;
		bts_2 = bts_2 + 0.1;
		objc.style.top = bts_1+"px";
		objc.style.opacity = bts_2+"";
		setTimeout(function(){
			pindahFadeBottomPendek(objc, bts_1, bts_2, wkt);
	    }, wkt);
	}
}
function pindahFadeTopPendek(objc, bts_1, bts_2, wkt) {
	if (bts_2 < 1) {
		bts_1 = bts_1 - 10;
		bts_2 = bts_2 + 0.1;
		objc.style.top = bts_1+"px";
		objc.style.opacity = bts_2+"";
		setTimeout(function(){
			pindahFadeTopPendek(objc, bts_1, bts_2, wkt);
	    }, wkt);
	}
}
function ctn1(nomor) {
	if (nomor == 0) {
		pindahFadeRightPanjang(document.getElementById("content1"), 130, 0, 10);
		setTimeout(function(){
			ctn1(1);
	    }, 600);
	}else if (nomor == 1) {
		pembesarLebar(document.getElementById("content1"), 900, 1, 300, 10, "px");
		setTimeout(function(){
			ctn1(2);
	    }, 400);
	}else if (nomor == 2) {
		pindahFadeBottomPendek(document.getElementById("p1"), -60, 0, 40);
		setTimeout(function(){
			ctn1(3);
	    }, 300);
	}else if (nomor == 3) {
		pindahFadeLeftPendek(document.getElementById("p2"), 160, 0, 40);
	}
}
function ctn2(nomor) {
	if (nomor == 0) {
		pindahFadeLeftPanjang(document.getElementById("content2"), 130, 0, 10);
		setTimeout(function(){
			ctn2(1);
	    }, 600);
	}else if (nomor == 1) {
		pembesarLebar(document.getElementById("content2"), 900, 1, 300, 10, "px");
		setTimeout(function(){
			ctn2(2);
	    }, 500);
	}else if (nomor == 2) {
		pindahFadeBottomPendek(document.getElementById("p3"), -110, 0, 40);
		setTimeout(function(){
			ctn2(3);
	    }, 300);
	}else if (nomor == 3) {
		pindahFadeRightPendek(document.getElementById("p4"), 150, 0, 40);
		setTimeout(function(){
			ctn2(4);
	    }, 200);
	}else if (nomor == 4) {
		pindahFadeTopPendek(document.getElementById("p5"), 330, 0, 40);
		setTimeout(function(){
			ctn2(5);
	    }, 200);
	}else if (nomor == 5) {
		pindahFadeTopPendek(document.getElementById("list"), 320, 0, 40);
	}
}
function ctn3(nomor) {
	if (nomor == 0) {
		pindahFadeRightPanjang(document.getElementById("content3"), 130, 0, 10);
		setTimeout(function(){
			ctn3(1);
	    }, 600);
	}else if (nomor == 1) {
		pembesarLebar(document.getElementById("content3"), 900, 1, 300, 10, "px");
		setTimeout(function(){
			ctn3(2);
	    }, 500);
	}else if (nomor == 2) {
		pindahFadeBottomPendek(document.getElementById("p6"), -110, 0, 40);
		setTimeout(function(){
			ctn3(3);
	    }, 300);
	}else if (nomor == 3) {
		pindahFadeLeftPendek(document.getElementById("p7"), 170, 0, 40);
		setTimeout(function(){
			ctn3(4);
	    }, 200);
	}else if (nomor == 4) {
		pindahFadeTopPendek(document.getElementById("p8"), 350, 0, 40);
		setTimeout(function(){
			ctn3(5);
	    }, 200);
	}else if (nomor == 5) {
		pindahFadeTopPendek(document.getElementById("backWa"), 355, 0, 40);
	}
}
function ctn4(nomor = 0){
	if (nomor == 0) {
		pindahFadeBottomPendek(document.getElementById("pCatatan1"), 50, 0, 25);
		setTimeout(function(){
			ctn4(1);
	    }, 500);
	}else if (nomor == 1) {
		pindahFadeTopPendek(document.getElementById("pCatatan2"), 350, 0, 10);
		setTimeout(function(){
			ctn4(2);
	    }, 300);
	}else if (nomor == 2) {
		pindahFadeRightPanjang(document.getElementById("catatanFormal"), 1000, 0, 20);
	}
}
function fadeOut(objc, j) {
	if (j > 0) {
		var j = j - 0.1;
		objc.style.opacity = j+"";
		setTimeout(function(){
	        fadeOut(objc, j);
	    }, 10);
	}
}
var pinBtn = 0;

function myFunction() {
	if (window.pageYOffset >= 100) {
		if (pinBtn == 0) {
			pindahFadeTopPendek(document.getElementById("topButton"), (window.innerHeight - 80)+100, 0, 50);
			pinBtn = 1;
		}
	}else{
		if (pinBtn == 1) {
			fadeOut(document.getElementById("topButton"), 1);
			pinBtn = 0;
		}
	}
	if (window.pageYOffset > 70){
		if (x == 1) {
			navbar.style.position = "fixed";
			navbar.style.top = 0;
			judulNavbar.style.opacity = "1";
			tbl1.style.color = "#e0f2fe";
			tbl2.style.color = "#e0f2fe";
			tbl3.style.color = "#e0f2fe";
			tbl4.style.color = "#e0f2fe";
			pembesarLebar(bgNavbar, 120, 1, 16, 4, "%");
			x = 0;
		}
	}else{
		if (x == 0) {
			pengecilLebar(bgNavbar, 16, 1, 120, 4, "%");
			judulNavbar.style.opacity = "0";
			navbar.style.position = "absolute";
			tbl1.style.color = "rgb(0,92,120)";
			tbl2.style.color = "rgb(0,92,120)";
			tbl3.style.color = "rgb(0,92,120)";
			tbl4.style.color = "rgb(0,92,120)";
			navbar.style.top = "70px";
			x = 1;
		}
	}
	if (window.pageYOffset >= 0 && window.pageYOffset < 600){
		if (pin1 == 0) {
			tblAfter1.style.webkitAnimation = "animateIn 0.2s ease-in";
			tblAfter1.style.webkitAnimationFillMode = "forwards";
			pin1 = 1;
		}
	}else{
		if (pin1 == 1) {
			tblAfter1.style.webkitAnimation = "animateOut 0.2s ease-in";
			tblAfter1.style.webkitAnimationFillMode = "forwards";
			pin1 = 0;
		}
	}
	if (window.pageYOffset >= 600 && window.pageYOffset < 2200){
		if (pin2 == 0) {
			tblAfter2.style.webkitAnimation = "animateIn 0.2s ease-in";
			tblAfter2.style.webkitAnimationFillMode = "forwards";
			pin2 = 1;
		}
	}else{
		if (pin2 == 1) {
			tblAfter2.style.webkitAnimation = "animateOut 0.2s ease-in";
			tblAfter2.style.webkitAnimationFillMode = "forwards";
			pin2 = 0;
		}
	}
	if (window.pageYOffset >= 2200 && window.pageYOffset < 2700){
		if (pin3 == 0) {
			tblAfter3.style.webkitAnimation = "animateIn 0.2s ease-in";
			tblAfter3.style.webkitAnimationFillMode = "forwards";
			pin3 = 1;
		}
	}else{
		if (pin3 == 1) {
			tblAfter3.style.webkitAnimation = "animateOut 0.2s ease-in";
			tblAfter3.style.webkitAnimationFillMode = "forwards";
			pin3 = 0;
		}
	}
	if (window.pageYOffset >= 2700){
		if (pin4 == 0) {
			tblAfter4.style.webkitAnimation = "animateIn 0.2s ease-in";
			tblAfter4.style.webkitAnimationFillMode = "forwards";
			pin4 = 1;
		}
	}else{
		if (pin4 == 1) {
			tblAfter4.style.webkitAnimation = "animateOut 0.2s ease-in";
			tblAfter4.style.webkitAnimationFillMode = "forwards";
			pin4 = 0;
		}
	}
	var pinLabel = 1000 - window.innerHeight;
	var pinContent1 = 1300 - window.innerHeight;
	var pinContent2 = 1700 - window.innerHeight;
	var pinContent3 = 2100 - window.innerHeight;
	var pinContent4 = 3400 - window.innerHeight;
	if (window.pageYOffset > pinLabel) {
		if (x1 == 0) {
			pindahFadeLeftPanjang(label, 195, 0, 25);
			x1 = 1;
		}
	}
	if (window.pageYOffset > pinContent1) {
		if (x2 == 0) {
			ctn1(0);
			x2 = 1;
		}
	}
	if (window.pageYOffset > pinContent2) {
		if (x3 == 0) {
			ctn2(0);
			x3 = 1;
		}
	}
	if (window.pageYOffset > pinContent3) {
		if (x4 == 0) {
			ctn3(0);
			x4 = 1;
		}
	}
	if (window.pageYOffset > pinContent4) {
		if (x5 == 0) {
			ctn4();
			x5 = 1;
		}
	}
}
function opening(nomor){
	if (nomor == 0) {
		pindahFadeTopPendek(document.getElementById("perkenalan1"), 135, 0, 60);
		setTimeout(function(){
			opening(1);
	    }, 300);
	}else if (nomor == 1) {
		pindahFadeTopPendek(document.getElementById("perkenalan2"), 210, 0, 50);
		setTimeout(function(){
			opening(2);
	    }, 300);
	}else if (nomor == 2) {
		pindahFadeTopPendek(document.getElementById("About-me"), 340, 0, 50);
	}
}
function typeWriter(i, txt, speed) {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(function(){
        typeWriter(i, txt, speed);
    }, speed);
  }else{
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    opening(0);
  }
}
function fadeOutOp(objc, bts_2, txt, speed) {
	bts_2 = bts_2 - 0.05;
	if (bts_2 > 0) {
		objc.style.opacity = bts_2+"";
		setTimeout(function(){
			fadeOutOp(objc, bts_2, txt, speed);
	    }, 15);
	}else{
		objc.style.width = "0";
		typeWriter(0, txt, speed);
	}
}
window.addEventListener("load", function () {
	fadeOutOp(document.getElementById("loading"), 1, txt, speed);
	// typeWriter(0, txt, speed);
});
function scroll(top, pinN, jumlahPerulangan, modulusJarak, tambahan){
	pinN = pinN + 1;
	var top = top + tambahan;
	if (pinN < jumlahPerulangan) {
		document.documentElement.scrollTop = top;

		setTimeout(function(){
		    scroll(top, pinN, jumlahPerulangan, modulusJarak, tambahan);
		}, 20);
	}else{
		document.documentElement.scrollTop = top + modulusJarak;
	}
}
function aboutScroll(){
	var tb = 5;
	if (x4 == 1) {
		tb = 50;
	}
	var back = document.getElementById('back');
	var jarakScroll = 3000 - document.documentElement.scrollTop;
	var modulusJarak = jarakScroll % tb || 0;
	var jumlahPerulangan = (jarakScroll - modulusJarak) / tb;
	scroll(document.documentElement.scrollTop, 0, jumlahPerulangan, modulusJarak, tb);
}
function fadeInContent1(nomor = 0) {
	if (nomor == 0) {
		pindahFadeRightPanjang(document.getElementById("boxImg"), 1040, 0, 25);
		setTimeout(function(){
			fadeInContent1(1);
	    }, 400);
	}else if (nomor == 1) {
		pindahFadeBottomPendek(document.getElementById("pBox1"), -20, 0, 25);
		setTimeout(function(){
			fadeInContent1(2);
	    }, 200);
	}else if (nomor == 2) {
		pindahFadeLeftPanjang(document.getElementById("pBox2"), 810, 0, 25);
		setTimeout(function(){
			fadeInContent1(3);
	    }, 400);
	}else if (nomor == 3) {
		pindahFadeTopPendek(document.getElementById("tblContact1"), 420, 0, 25);
		setTimeout(function(){
			fadeInContent1(4);
	    }, 200);
	}else if (nomor == 4) {
		pindahFadeTopPendek(document.getElementById("tblContact2"), 420, 0, 25);
		setTimeout(function(){
			fadeInContent1(5);
	    }, 200);
	}else if (nomor == 5) {
		pindahFadeTopPendek(document.getElementById("tblContact3"), 420, 0, 25);
		setTimeout(function(){
			fadeInContent1(6);
	    }, 200);
	}else if (nomor == 6) {
		pindahFadeTopPendek(document.getElementById("tblContact4"), 420, 0, 25);
	}
}
function fadeInContent2(nomor = 0) {
	if (nomor == 0) {
		pindahFadeBottomPendek(document.getElementById("boxImg1"), -70, 0, 30);
		setTimeout(function(){
			fadeInContent2(1);
	    }, 400);
	}else if (nomor == 1) {
		pindahFadeTopPendek(document.getElementById("pBox3"), 330, 0, 30);
		setTimeout(function(){
			fadeInContent2(2);
	    }, 500);
	}else if (nomor == 2) {
		pindahFadeTopPendek(document.getElementById("tblCS1"), 110, 0, 30);
		setTimeout(function(){
			fadeInContent2(3);
	    }, 200);
	}else if (nomor == 3) {
		pindahFadeTopPendek(document.getElementById("tblCS2"), 110, 0, 30);
		setTimeout(function(){
			fadeInContent2(4);
	    }, 200);
	}else if (nomor == 4) {
		pindahFadeTopPendek(document.getElementById("tblCS3"), 110, 0, 30);
	}
}
function fadeInContent3(nomor = 0) {
	if (nomor == 0) {
		pindahFadeBottomPendek(document.getElementById("boxImg2"), 20, 0, 30);
		setTimeout(function(){
			fadeInContent3(1);
	    }, 500);
	}else if (nomor == 1) {
		pindahFadeTopPendek(document.getElementById("pBox4"), 400, 0, 30);
		setTimeout(function(){
			fadeInContent3(2);
	    }, 300);
	}else if (nomor == 2) {
		pindahFadeRightPanjang(document.getElementById("pBox5"), 1000, 0, 30);
		setTimeout(function(){
			fadeInContent3(3);
	    }, 300);
	}else if (nomor == 3) {
		pindahFadeTopPendek(document.getElementById("listBox"), 330, 0, 30);
	}
}

function pindahRight(bts_a, pindahMax) {
  if (bts_a > pindahMax) {
	var bts_a = bts_a - 4;
    document.getElementById("center-box").style.left = bts_a + "%";

    setTimeout(function(){
        pindahRight(bts_a, pindahMax);
    }, 10);
  }else if (iklanPin == 0) {
  	document.getElementById("center-box").style.left = "0";
  	fadeInContent1();
  }else if (iklanPin == 1) {
  	fadeInContent2();
  }else if (iklanPin == 2) {
  	fadeInContent3();
  }
}
var iklanPin = 0;
function iklan() {
	if (iklanPin == 0) {
		var listContent = [document.getElementById("boxImg2"),document.getElementById("pBox4"),document.getElementById("pBox5"),document.getElementById("listBox")]
		for (var i = listContent.length - 1; i >= 0; i--) {
			listContent[i].style.opacity = 0;
		}
	    pindahRight(0, -100);
	    iklanPin = 1;
	}else if (iklanPin == 1) {
		var listContent = [document.getElementById("boxImg"),document.getElementById("pBox1"),document.getElementById("pBox2"),document.getElementById("tblContact1"),document.getElementById("tblContact2"),document.getElementById("tblContact3"),document.getElementById("tblContact4")];
		for (var i = listContent.length - 1; i >= 0; i--) {
			listContent[i].style.opacity = 0;
		}
	    pindahRight(-100, -200);
	    iklanPin = 2;
	}else if (iklanPin == 2) {
		var listContent = [document.getElementById("boxImg1"),document.getElementById("pBox3"),document.getElementById("tblCS1"),document.getElementById("tblCS2"),document.getElementById("tblCS3")];
		for (var i = listContent.length - 1; i >= 0; i--) {
			listContent[i].style.opacity = 0;
		}
	    pindahRight(-200, -300);
	    iklanPin = 0;
	}
}
setInterval(iklan, 6000);
function pudarUp(bts_1 = 0, bts_2 = 1) {
	if (bts_2 > 0) {
		var bts_1 = bts_1 + 2;
		var bts_2 = bts_2 - 0.05;
		document.getElementById("bayangan").style.left = bts_1+"px";
		document.getElementById("bayangan").style.opacity = bts_2+"";
		setTimeout(function(){
			pudarUp(bts_1, bts_2);
	    }, 30);
	}
}
function scrollTopZero(top, pinN, jumlahPerulangan, modulusJarak, tambahan) {
	pinN = pinN + 1;
	var top = top - tambahan;
	if (pinN < jumlahPerulangan) {
		document.documentElement.scrollTop = top;

		setTimeout(function(){
		    scrollTopZero(top, pinN, jumlahPerulangan, modulusJarak, tambahan);
		}, 20);
	}else{
		document.documentElement.scrollTop = top + modulusJarak;
	}
}
function topZero() {
	var jarakScroll = window.pageYOffset;
	var modulusJarak = jarakScroll % 50 || 0;
	var jumlahPerulangan = (jarakScroll - modulusJarak) / 50;
	scrollTopZero(document.documentElement.scrollTop, 0, jumlahPerulangan, modulusJarak, 50);
}
function hoverIn(objc) {
	if (objc == tblAfter1) {
		var pinH = pin1;
	}else if (objc == tblAfter2) {
		var pinH = pin2;
	}else if (objc == tblAfter3) {
		var pinH = pin3;
	}else if (objc == tblAfter4) {
		var pinH = pin4;
	}
	if (pinH != 1) {
		objc.style.webkitAnimation = "animateIn 0.2s ease-in";
		objc.style.webkitAnimationFillMode = "forwards";
	}
}
function hoverOut(objc) {
	if (objc == tblAfter1) {
		var pinH = pin1;
	}else if (objc == tblAfter2) {
		var pinH = pin2;
	}else if (objc == tblAfter3) {
		var pinH = pin3;
	}else if (objc == tblAfter4) {
		var pinH = pin4;
	}
	if (pinH != 1) {
		objc.style.webkitAnimation = "animateOut 0.2s ease-in";
		objc.style.webkitAnimationFillMode = "forwards";
	}
}
function btnTbl(nomor) {
	if (nomor == 1) {
		document.documentElement.scrollTop = 0;
	}else if (nomor == 2) {
		document.documentElement.scrollTop = 700;
	}else if (nomor == 3) {
		document.documentElement.scrollTop = 2300;
	}else if (nomor == 4) {
		document.documentElement.scrollTop = 2800;
	}
}