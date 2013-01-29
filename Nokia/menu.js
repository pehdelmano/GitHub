var vezes_form=0;
var cartao;

function AbreMenu(){
if($("#menu_content").css("display") == "none"){
$('header').css('z-index','1');
$('.menu_filtro').css('z-index','1');
$("#menu_content").fadeIn(500);
var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
var _height_menu = $("#content_menu").height();
var total = _docHeight + _height_menu + 20;
$("#mask").css("height",total+"px");
$("#mask").fadeIn(500);
} else{
$("#mask").fadeOut(500);
$("#menu_content").fadeOut(500);
}
}

function AbreMenuFiltro(){
	anima_menu=185;
	$(".menu_filtro").animate({
                "top":  "+=" +anima_menu
                }, "slow");
	var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
	var total = _docHeight +  20;
	$("#mask").css("height",total+"px");
	$("#mask").fadeIn(500);
	
}

function FechaMenuFiltro(){
$(".menu_filtro").animate({
                "top":  "-=" +185
                }, "slow");
	$("#mask").fadeOut(500);
}

function TrocaForm(){
vezes_form++;

if (vezes_form==1){
$('#identificacao').addClass('preto');
$('#identificacao').removeClass('ativo');
$('#identificacao').removeClass('azul');
$('#identificacao').html('1');
$('#titulo_form').html('Endereço de entrega');
$('#form_indent').css('display','none');
$('#entrega').addClass('ativo');
$('#entrega').addClass('azul');
$('#entrega').html('2 - Entrega');
$('#form_entrega').css('display','block');
} else if(vezes_form==2){
$('#entrega').addClass('preto');
$('#entrega').removeClass('ativo');
$('#entrega').removeClass('azul');
$('#entrega').html('2');
$('#titulo_form').html('Pagamento');
$('#form_entrega').css('display','none');
$('#pagamento').addClass('ativo');
$('#pagamento').addClass('azul');
$('#pagamento').html('3- Pagamento');
$('#form_pagamento').css('display','block');
$('#continuar_bt').attr('src','images/finalizar_bt.png');
} else if(vezes_form==3){
$("#formulario").submit();
}
}

$(function(){
	$('.topmenu').click(function() {
		$('.ativo').removeClass('azul');
		$('.ativo').addClass('preto');
		$('.ativo').removeClass('ativo');
		$(this).addClass('ativo');
		$(this).addClass('azul');
		if ($(this).attr('id')=='aparelhos'){
		$("#texto_produto").html('Todos os aparelhos');
		} else{
		$("#texto_produto").html('Todos os acessórios');
		}
	  });
	
	$('.cartao').click(function() {
		$('.cartao_ativo').removeClass('cartao_ativo');
		$(this).addClass('cartao_ativo');
		cartao = $(this).attr('id');
	  });

 });