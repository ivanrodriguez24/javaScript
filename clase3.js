function procesarAlumnos(){
	for (i=1;i<n;i++){
			
			nombre=prompt("nombre:"+i+"\ "+n);
			esMasculino=confirm("es esMasculino?");
			
			if (!esMasculino)
			mujeres++; 

			nota = parseInt(prompt("intr. la nota"));
			if (isNaN(nota)) 
				alert("nota no valida");
			else
				if (nota>=80) {
					if (!esMasculino) 
						mujeresAprobadas++;
					alert("ud aprobo");
					console.log("aprobado ",i);
			}
			else
				 (nota<80) 
						alert("no aprobo debe repetir el desafio ");
						console.log("reprobado",i);
						
		}
			alert("en la seccion hay "+mujeres+"mujeres \n"+
				"y hay"+(N-mujeres)+"hombres")
}