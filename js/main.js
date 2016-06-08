$(document).ready(function(){ 
	problemaHora();
	problemaFecha();
	$(".ciudadamerica").on('click',function(){
		valordata = $(this).attr("data");
		if($(this).is(':checked')){
			$(".city").append("<div class='nuevo-style' id='box" + valordata+"'></div>");
			$('#box'+ valordata).html("<p>"+ciudades[valordata].ciudad +"</p>");
			adicionarHora();
		}else{
			$("#box"+ valordata).remove();
			$('#caja'+ valordata).remove();
		}

	})
});


function problemaHora(){
	var digital = new Date();
		horas=digital.getHours();
		minutos = digital.getMinutes();
		segundos = digital.getSeconds();
		if(minutos<10){
			minutos="0"+minutos;
		}
		if(segundos<10){
			segundos = "0"+segundos;
		}
		if(horas<10){
			horas = "0"+horas;
		}
		$("#hora").html(horas+":"+minutos);
		var time = setTimeout("problemaHora()",1000);
	};

function problemaFecha(){
	var digital = new Date();
		dias = digital.getDay();
		var diassemana=['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes','Sabado'];
		date = digital.getDate();
		mes = digital.getMonth();
		var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		anio = digital.getFullYear();
		$("#fecha").html(diassemana[dias]+" "+date+" de "+ meses[mes]+" del "+anio);
}

	var valordata=0;
	var ciudades = [
		{
		ciudad: "Chicago",
		hora:0
		},
		{
		ciudad: "Sao Paulo",
		hora: 2
		},
		{
		ciudad: "Santiago",
		hora: 2
		},
		{
		ciudad: "Mexico D.F",
		hora: 1
		},
		{
		ciudad:"Caracas",
		hora: 1
		},
		{ 
		ciudad:"Brasilia",
		hora: 2
		},
		{ 
		ciudad:"Quito",
		hora: 0
		},
		{ 
		ciudad:"Guayaquil",
		hora: 0
		},
		{ 
		ciudad:"Santa Marta",
		hora: 1
		},
		{ 
		ciudad:"Bogota",
		hora: 1
		}
	];

function adicionarHora(){
	var adicional = ciudades[valordata].hora;
	// var digital = new Date();
	// 	horas=digital.getHours();
	// 	minutos = digital.getMinutes();
	// 	segundos = digital.getSeconds();
	// 	horas = horas+adicional;
		$(".hours").append("<div class='nuevo-style' id='caja" + valordata+"'></div>");
		var time = setInterval("actualizacion(" + valordata + ", " + adicional +")",1000);
};

function actualizacion(valordata, adicional){
	var digital = new Date();
		horas=digital.getHours();
		minutos = digital.getMinutes();
		segundos = digital.getSeconds();
		horas = horas+adicional;
		if(minutos<10){
			minutos="0"+minutos;
		}
		if(segundos<10){
			segundos = "0"+segundos;
		}
		if(horas<10){
			horas = "0"+horas;
		}
	$('#caja'+ valordata).html("<p>"+horas+":"+ minutos +"</p>");
}

















