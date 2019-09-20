function toggle_info() {
   
	var cap_0 = document.getElementById("p0");
	var info_1 = document.getElementById("p1");
	var img_0 = document.getElementById("img0");
	var img_1 = document.getElementById("img1");
	var img_2 = document.getElementById("img2");
	
	
	if (info_1.innerHTML == "") {
	  info_1.innerHTML="This app contains free HBO, Showtimes, and full cable. " + 
	  "It also contains a full radio player that requires no internet. "+
	  "Just connect to the open 'xfinitywifi' network that's everywhere , and that's it. "+         
	  "No signing up or anything required. Just connect and play the radio. "+
	  "Oh, and did I mention it comes with Tv Guide Listings. " ;
	  
	  cap_0.innerHTML = "Show Less...";
	  
	  img_0.style.display="block";
	  img_1.style.display="block";
	  img_2.style.display="block";
	  
	  img_0.src="scr0_tv.png";
	  img_1.src="scr1_tv.png";
	  img_2.src="scr2_tv.png";
	  
	}
	else {
	   info_1.innerHTML = "";
	   cap_0.innerHTML = "See App Info...";
	   
	   img_0.style.display="none";
	   img_1.style.display="none";
	   img_2.style.display="none";
	   
	}
	
} //end method

 
function toggle_info_2() {
   
	var cap_02 = document.getElementById("p02");
	var info_2 = document.getElementById("p2");
	var img_3 = document.getElementById("img3");
	var img_4 = document.getElementById("img4");
	var img_5 = document.getElementById("img5");
	
	
	if (info_2.innerHTML == "") {
	  info_2.innerHTML="This is an offline radio player that uses the open xfinitywifi network to stream " + 
	  "free radio. The app does all the work for you, and gives you the choice of using your own "+
	  "connection or try for offline mode. With recording, equalizer, what more could you ask?    ";
	  
	  cap_02.innerHTML = "Show Less...";
	  
	  img_3.style.display="block";
	  img_4.style.display="block";
	  img_5.style.display="block";
	  
	  img_3.src="scr_rd0.png";
	  img_4.src="scr_rd1.png";
	  img_5.src="scr_rd2.png";
	  
	}
	else {
	   info_2.innerHTML = "";
	   cap_02.innerHTML = "See App Info...";
	   
	   img_3.style.display="none";
	   img_4.style.display="none";
	   img_5.style.display="none";
	   
	}
	
	
	
}//end method





 







