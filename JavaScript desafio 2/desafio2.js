	var nombre = prompt("nombre");
		var cantidad = prompt("cantidades adquiridas");
		var tipo_producto =prompt("ingrese el tipo si es a,b,c"); 
		var recargo=prompt("el producto es nacional?")
		var precio
		

		const a = 25000;
		const b = 50000;
		const c = 68900;
		if (isNaN(cantidad))
			console.log("cantidad es invalida intetelo de nuevo");
		else
			if (tipo_producto==null || tipo_producto=="") 
			console.log("debe ingresar un tipo  producto valido");
		else
			if(tipo_producto == "a")
				precio=25000;
		else
			if (tipo_producto == "b") 
				precio=5000;
			else
				if (tipo_producto == "c")
					precio=68900;
				else console.log("no tenemos ese tipo de tipo_producto");
				
				
				if(recargo==true)
					recargo=precio*0.25;
				else
					(recargo==false )
					recargo=precio*0.45;

					


				var sub_total 
				sub_total=(precio+recargo)*cantidad
				console.log("el precio sin descuento es "+sub_total);
				var descuento
			if (cantidad>=24)
					descuento=sub_total*0.15;
			else
				if (cantidad>=6 && cantidad<=11) 
						descuento=sub_total*0.05;
					else 
						descuento=0;
					console.log("el descuento es"+descuento)
					
					var precio_total
					precio_total=sub_total-descuento
				console.log("el  total con descuento a pagar es "+precio_total)
				

				alert("el nombre del cliente es : "+nombre.toUpperCase() + "\n"+
						"el tipo de producto es : "+tipo_producto+ "\n"+
						"y tiene un precio de : "+precio+ "bs \n"+
						"el cliente lleva la cantida de : "+cantidad+ "\n"+
						"el recargo es : "+recargo+ "bs \n"+
						"el subtotal es : "+sub_total+ "bs \n"+
						"el descuento es : "+descuento+ "bs\n"+
						"el monto total a pagar es : "+precio_total+"bs")