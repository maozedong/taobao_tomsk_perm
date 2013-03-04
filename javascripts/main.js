console.log('This would be the main JS file.');
var num_regex = /^[-+]?[0-9]*\.?[0-9]+$/; // numeric digits only
$(document).ready(function(){

$('.button.men').click(function(){
	$('table.men').show();
	$('table.women').hide();
	$('table.children').hide();
	$('table.other').hide();
	$('.button').removeClass('active');
	$(this).addClass('active');
});
$('.button.women').click(function(){
	$('table.men').hide();
	$('table.women').show();
	$('table.children').hide();
	$('table.other').hide();
	$('.button').removeClass('active');
	$(this).addClass('active');
});
$('.button.children').click(function(){
	$('table.men').hide();
	$('table.women').hide();
	$('table.children').show();
	$('table.other').hide();
	$('.button').removeClass('active');
	$(this).addClass('active');
});
$('.button.other').click(function(){
	$('table.men').hide();
	$('table.women').hide();
	$('table.children').hide();
	$('table.other').show();
	$('.button').removeClass('active');
	$(this).addClass('active');
});
	$('.super-wrapper input').val('');
  var cTao = {
	price : 0,
	quantity : 0,
	weight : 0,
	total : 0,
	calc:function(){
		if(this.price != 0 && this.quantity != 0 && this.weight !=0){
		this.total = 0;
		this.total = ((this.price*this.quantity)*1.25+(this.price*this.quantity*0.1))*5.5 + (this.quantity*this.weight*450) + 106;
		this.total = this.total.toFixed(2);
		}else{
			this.total = 0;
		}
	}
  }
  var cAli = {
	price : 0,
	quantity : 0,
	total : 0,
	calc:function(){
		if(this.price != 0 && this.quantity != 0){
		this.total = 0;
		this.total = this.price*this.quantity*1.4*32;
		this.total = this.total.toFixed(2);
		}else{
			this.total = 0;
		}
	}
  }
  var cVS = {
	price : 0,
	quantity : 0,
	total : 0,
	condition : 0,
	calc:function(){
		if(this.price != 0 && this.quantity != 0){
		this.total = 0;
		this.condition = 0;
		if(this.price > 0 && this.price <= 75 ){
			this.condition = 868;
		}else if(this.price > 75 && this.price <= 125 ){
			this.condition = 1054;
		}else if(this.price > 125 && this.price < 175 ){
			this.condition = 1209;
		}
		this.total = (this.price*this.quantity)*31*1.25 + this.condition;
		this.total = this.total.toFixed(2);
		}else{
			this.total = 0;
		}
	}
  }
  var cTur = {
	price : 0,
	quantity : 0,
	weight : 0,
	total : 0,
	condition :0,
	calc:function(){
		if(this.price != 0 && this.quantity != 0 && this.weight != 0){
		this.total = 0;
		this.condition = 0;
		if(this.price <= 100 && this.price > 0 ){
			this.condition = 10;
		}else if(this.price > 100){
			this.condition = this.price*0.1;
		}
		this.total = this.price*this.quantity*1.25*18.4 + this.weight*355 + this.condition;
		this.total = this.total.toFixed(2);
		}else{
			this.total = 0;
		}
	}
  }
  /////cTao/////////////////////
  $('.calcTao .price').keyup(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cTao.price = $('.calcTao .price').val();
	cTao.quantity = $('.calcTao .quantity').val();
	cTao.weight = $('.calcTao .weight').val();
	}else{
		$(this).val('');
	cTao.price = $('.calcTao .price').val();
	}
	cTao.calc();
	$('.calcTao .total').val(cTao.total.toString());
  });
  $('.calcTao .quantity').keyup(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cTao.price = $('.calcTao .price').val();
	cTao.quantity = $('.calcTao .quantity').val();
	cTao.weight = $('.calcTao .weight').val();
	}else{
		$(this).val('');
		cTao.quantity = $('.calcTao .quantity').val();
	}
	cTao.calc();
	$('.calcTao .total').val(cTao.total.toString());
  });
    $('.calcTao .weight').keyup(function(){
	if( $.trim($(this).val()).match(num_regex)){
	cTao.price = $('.calcTao .price').val();
	cTao.quantity = $('.calcTao .quantity').val();
	cTao.weight = $('.calcTao .weight').val();
	}else{
		$(this).val('');
	cTao.weight = $('.calcTao .weight').val();
	}
	cTao.calc();
	$('.calcTao .total').val(cTao.total.toString());
  });
  ///////////cTao//////////////////
  
  /////cAli/////////////////////
  $('.calcAli .price').keyup(function(){
	if( $.trim($(this).val()).match(num_regex)){
	cAli.price = $('.calcAli .price').val();
	cAli.quantity = $('.calcAli .quantity').val();
	cAli.weight = $('.calcAli .weight').val();
	}else{
		$(this).val('');
	cAli.price = $('.calcAli .price').val();
	}
	cAli.calc();
	$('.calcAli .total').val(cAli.total.toString());
  });
  $('.calcAli .quantity').keyup(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cAli.price = $('.calcAli .price').val();
	cAli.quantity = $('.calcAli .quantity').val();
	cAli.weight = $('.calcAli .weight').val();
	}else{
		$(this).val('');
	cAli.quantity = $('.calcAli .quantity').val();
	}
	cAli.calc();
	$('.calcAli .total').val(cAli.total.toString());
  });
    $('.calcAli .weight').keyup(function(){
	if( $.trim($(this).val()).match(num_regex)){
	cAli.price = $('.calcAli .price').val();
	cAli.quantity = $('.calcAli .quantity').val();
	cAli.weight = $('.calcAli .weight').val();
	}else{
		$(this).val('');
	cAli.weight = $('.calcAli .weight').val();
	}
	cAli.calc();
	$('.calcAli .total').val(cAli.total.toString());
  });
  ///////////cAli//////////////////
  
  /////cVS/////////////////////
  $('.calcVS .price').keyup(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cVS.price = $('.calcVS .price').val();
	cVS.quantity = $('.calcVS .quantity').val();
	cVS.weight = $('.calcVS .weight').val();
	}else{
		$(this).val('');
	cVS.price = $('.calcVS .price').val();
	}
	cVS.calc();
	$('.calcVS .total').val(cVS.total.toString());
  });
  $('.calcVS .quantity').keyup(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cVS.price = $('.calcVS .price').val();
	cVS.quantity = $('.calcVS .quantity').val();
	cVS.weight = $('.calcVS .weight').val();
	}else{
		$(this).val('');
	cVS.quantity = $('.calcVS .quantity').val();
	}
	cVS.calc();
	$('.calcVS .total').val(cVS.total.toString());
  });
    $('.calcVS .weight').keyup(function(){
	if( $.trim($(this).val()).match(num_regex)){
	cVS.price = $('.calcVS .price').val();
	cVS.quantity = $('.calcVS .quantity').val();
	cVS.weight = $('.calcVS .weight').val();
	}else{
		$(this).val('');
	cVS.weight = $('.calcVS .weight').val();
	}
	cVS.calc();
	$('.calcVS .total').val(cVS.total.toString());
  });
  ///////////cVS//////////////////
  
  /////cTur/////////////////////
  $('.calcTur .price').keyup(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cTur.price = $('.calcTur .price').val();
	cTur.quantity = $('.calcTur .quantity').val();
	cTur.weight = $('.calcTur .weight').val();
	}else{
		$(this).val('');
	cTur.price = $('.calcTur .price').val();
	}
	cTur.calc();
	$('.calcTur .total').val(cTur.total.toString());
  });
  
  $('.calcTur .quantity').keyup(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cTur.price = $('.calcTur .price').val();
	cTur.quantity = $('.calcTur .quantity').val();
	cTur.weight = $('.calcTur .weight').val();
	}else{
		$(this).val('');
	cTur.quantity = $('.calcTur .quantity').val();
	}
	cTur.calc();
	$('.calcTur .total').val(cTur.total.toString());
  });
  
    $('.calcTur .weight').keyup(function(){
	if( $.trim($(this).val()).match(num_regex)){
	cTur.price = $('.calcTur .price').val();
	cTur.quantity = $('.calcTur .quantity').val();
	cTur.weight = $('.calcTur .weight').val();
	}else{
		$(this).val('');
		cTur.weight = $('.calcTur .weight').val();
	}
	cTur.calc();
	$('.calcTur .total').val(cTur.total.toString());
  });
  ///////////cTur//////////////////
});
