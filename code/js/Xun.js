$(document).ready(function(){ 

			var index=0;
			var $_picn=$(".pic").length;
			if($_picn>1){
 
				$(".pic").eq(0).show().siblings(".pic").hide();
			}
			

			/*循环函数*/
				setInterval(function(){
					    show(index);
					    index++;
					    if(index>=$_picn){index=0;}
					  },3000);

			/*渐隐渐显函数*/
				function show(index){
					if(index>=$_picn)
						{
							index=index-$_picn;
							$(".pic").eq(index).fadeIn(3000).siblings(".pic").fadeOut(3000);	
						}
					else{
						$(".pic").eq(index).fadeIn(3000).siblings(".pic").fadeOut(3000);
					}	
					}

			/*鼠标控制*/
				/*右边三个圆*/
				$("#myCanvasFir").mousedown(function(){
		  				$("#myCanvasFir").css("opacity","1.0");
		  				$("#myCanvasSec").css("opacity","1.0");
		  				$("#myCanvasThir").css("opacity","1.0");
		  				var ddx=index-2;
		  				showwRight(ddx);
		  			})
				$("#myCanvasSec").mousedown(function(){
		  				$("#myCanvasFir").css("opacity","1.0");
		  				$("#myCanvasSec").css("opacity","1.0");
		  				$("#myCanvasThir").css("opacity","1.0");
		  				var ddx=index-2;
		  				showwRight(ddx);
		  			})
				$("#myCanvasThir").mousedown(function(){
		  				$("#myCanvasFir").css("opacity","1.0");
		  				$("#myCanvasSec").css("opacity","1.0");
		  				$("#myCanvasThir").css("opacity","1.0");
		  				var ddx=index+1;
		  				showwRight(ddx);
		  			})

				$("#myCanvasFir").mouseup(function(){
					$("#myCanvasFir").css("opacity","0.6");
		  			$("#myCanvasSec").css("opacity","0.6");
		  			$("#myCanvasThir").css("opacity","0.6");
				})
				$("#myCanvasSec").mouseup(function(){
					$("#myCanvasFir").css("opacity","0.6");
		  			$("#myCanvasSec").css("opacity","0.6");
		  			$("#myCanvasThir").css("opacity","0.6");
				})
				$("#myCanvasThir").mouseup(function(){
					$("#myCanvasFir").css("opacity","0.6");
		  			$("#myCanvasSec").css("opacity","0.6");
		  			$("#myCanvasThir").css("opacity","0.6");
				})


				$("#myCanvasFir").mouseout(function(){
					$("#myCanvasFir").css("opacity","0.4");
		  			$("#myCanvasSec").css("opacity","0.4");
		  			$("#myCanvasThir").css("opacity","0.4");
				})
				$("#myCanvasSec").mouseout(function(){
					$("#myCanvasFir").css("opacity","0.4");
		  			$("#myCanvasSec").css("opacity","0.4");
		  			$("#myCanvasThir").css("opacity","0.4");
				})
				$("#myCanvasThir").mouseout(function(){
					$("#myCanvasFir").css("opacity","0.4");
		  			$("#myCanvasSec").css("opacity","0.4");
		  			$("#myCanvasThir").css("opacity","0.4");
				})


				$("#myCanvasFir").mouseover(function(){
					$(this).css("opacity","0.6");
				})
				$("#myCanvasSec").mouseover(function(){
					$(this).css("opacity","0.6");
				})
				$("#myCanvasThir").mouseover(function(){
					$(this).css("opacity","0.6");
				})


				/*左边三个圆*/
				$("#myCanvasFirLeft").mousedown(function(){
		  				$("#myCanvasFirLeft").css("opacity","1.0");
		  				$("#myCanvasSecLeft").css("opacity","1.0");
		  				$("#myCanvasThirLeft").css("opacity","1.0");
		  				var dax=index+1;
		  				showwLeft(dax);
		  			})
				$("#myCanvasSecLeft").mousedown(function(){
		  				$("#myCanvasFirLeft").css("opacity","1.0");
		  				$("#myCanvasSecLeft").css("opacity","1.0");
		  				$("#myCanvasThirLeft").css("opacity","1.0");
		  				var dax=index+1;
		  				showwLeft(dax);
		  			})
				$("#myCanvasThirLeft").mousedown(function(){
		  				$("#myCanvasFirLeft").css("opacity","1.0");
		  				$("#myCanvasSecLeft").css("opacity","1.0");
		  				$("#myCanvasThirLeft").css("opacity","1.0");
		  				var dax=index+1;
		  				showwLeft(dax);
		  			})

				$("#myCanvasFirLeft").mouseup(function(){
					$("#myCanvasFirLeft").css("opacity","0.6");
		  			$("#myCanvasSecLeft").css("opacity","0.6");
		  			$("#myCanvasThirLeft").css("opacity","0.6");
				})
				$("#myCanvasSecLeft").mouseup(function(){
					$("#myCanvasFirLeft").css("opacity","0.6");
		  			$("#myCanvasSecLeft").css("opacity","0.6");
		  			$("#myCanvasThirLeft").css("opacity","0.6");
				})
				$("#myCanvasThirLeft").mouseup(function(){
					$("#myCanvasFirLeft").css("opacity","0.6");
		  			$("#myCanvasSecLeft").css("opacity","0.6");
		  			$("#myCanvasThirLeft").css("opacity","0.6");
				})


				$("#myCanvasFirLeft").mouseout(function(){
					$("#myCanvasFirLeft").css("opacity","0.4");
		  			$("#myCanvasSecLeft").css("opacity","0.4");
		  			$("#myCanvasThirLeft").css("opacity","0.4");
				})
				$("#myCanvasSecLeft").mouseout(function(){
					$("#myCanvasFirLeft").css("opacity","0.4");
		  			$("#myCanvasSecLeft").css("opacity","0.4");
		  			$("#myCanvasThirLeft").css("opacity","0.4");
				})
				$("#myCanvasThirLeft").mouseout(function(){
					$("#myCanvasFirLeft").css("opacity","0.4");
		  			$("#myCanvasSecLeft").css("opacity","0.4");
		  			$("#myCanvasThirLeft").css("opacity","0.4");
				})


				$("#myCanvasFirLeft").mouseover(function(){
					$(this).css("opacity","0.6");
				})
				$("#myCanvasSecLeft").mouseover(function(){
					$(this).css("opacity","0.6");
				})
				$("#myCanvasThirLeft").mouseover(function(){
					$(this).css("opacity","0.6");
				})


	    /*按钮函数*/
		    /*向左*/
			function showwLeft(dax){
					if(dax>=$_picn)
					{
						dax=dax-$_picn;
						$(".pic").eq(dax).fadeIn(500).siblings(".pic").fadeOut(500);
						index=index-1;
					show(index);	
					}
				else{
					$(".pic").eq(dax).fadeIn(500).siblings(".pic").fadeOut(500);
					index=index-1;
					show(index);	
					}	
				}

				/*向右*/
				function showwRight(ddx){
					if(ddx>=$_picn)
					{
						ddx=ddx-$_picn;
						$(".pic").eq(ddx).fadeIn(500).siblings(".pic").fadeOut(500);
						index=index+1;
					show(index);	
					}
				else{
					$(".pic").eq(ddx).fadeIn(500).siblings(".pic").fadeOut(500);
					index=index+1;
					show(index);	
					}	
				}


			/*画圆函数*/
				/*右边三个圆*/
				var c1=document.getElementById("myCanvasFir");
				var cx1=c1.getContext("2d");
				cx1.fillStyle="#a05f23";
				cx1.strokeStyle="#a05f23";

				cx1.beginPath();
				cx1.arc(20, 78, 20, 0, Math.PI*2, true);
				cx1.fill();

				var c2=document.getElementById("myCanvasSec");
				var cx2=c2.getContext("2d");
				cx2.fillStyle="#a05f23";
				cx2.strokeStyle="#a05f23";

				cx2.beginPath();
				cx2.arc(17, 48, 15, 0, Math.PI*2, true);
				cx2.fill();

				var c3=document.getElementById("myCanvasThir");
				var cx3=c3.getContext("2d");
				cx3.fillStyle="#a05f23";
				cx3.strokeStyle="#a05f23";

				cx3.beginPath();
				cx3.arc(20, 15, 13, 0, Math.PI*2, true);
				cx3.fill();
				
				
	
				/*cxt.stroke();*/
				/*}*/

				/*左边三个圆*/
				var c4=document.getElementById("myCanvasFirLeft");
				var cx4=c4.getContext("2d");
				cx4.fillStyle="#a05f23";
				cx4.strokeStyle="#a05f23";

				cx4.beginPath();
				cx4.arc(20, 78, 20, 0, Math.PI*2, true);
				cx4.fill();

				var c5=document.getElementById("myCanvasSecLeft");
				var cx5=c5.getContext("2d");
				cx5.fillStyle="#a05f23";
				cx5.strokeStyle="#a05f23";

				cx5.beginPath();
				cx5.arc(17, 48, 15, 0, Math.PI*2, true);
				cx5.fill();

				var c6=document.getElementById("myCanvasThirLeft");
				var cx6=c6.getContext("2d");
				cx6.fillStyle="#a05f23";
				cx6.strokeStyle="#a05f23";

				cx6.beginPath();
				cx6.arc(20, 15, 13, 0, Math.PI*2, true);
				cx6.fill();

			
	});