
	  function myFunct1(){
		  document.getElementById("chart_div2").style.display="none";
		  document.getElementById("chart_div3").style.display="none";
		  document.getElementById("chart_div1").style.display='';
	  };
	  function myFunct2(){
		  document.getElementById("chart_div3").style.display="none";
		  document.getElementById("chart_div1").style.display="none";
		  document.getElementById("chart_div2").style.display='';
	  };
	  function myFunct3(){
		  document.getElementById("chart_div2").style.display="none";
		  document.getElementById("chart_div1").style.display="none";
		  document.getElementById("chart_div3").style.display='';
	  };
	  function myFunct(x){
		  $('.all').hide(); 
		  $(x).show();
	  };