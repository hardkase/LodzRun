function wait4It
    	{
    		setTimeout(zmiana(), 6000);
    	}
		a=0;
		function zmiana()
		{
				parent = document.getElementById("enu");
				child = document.getElementById(a);
				
				parent.removeChild(child);
				a++;
		
		}
		function show()
		{
			document.getElementById("player").style.visibility="visible";
		}