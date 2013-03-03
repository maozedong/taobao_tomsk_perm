console.log('This would be the main JS file.');
var num_regex = /^[-+]?[0-9]*\.?[0-9]+$/; // numeric digits only
$(document).ready(function(){
	$('.super-wrapper input').val('');
  var cTao = {
	price : 0,
	quantity : 0,
	weight : 0,
	total : 0,
	calc:function(){
		this.total = ((this.price*this.quantity)*1.25+(this.price*this.quantity*0.1))*5.5 + (this.quantity*this.weight*450) + 106;
		this.total = this.total.toFixed(2);
	}
  }
  var cAli = {
	price : 0,
	quantity : 0,
	total : 0,
	calc:function(){
		this.total = this.price*this.quantity*1.4*32;
		this.total = this.total.toFixed(2);
	}
  }
  var cVS = {
	price : 0,
	quantity : 0,
	total : 0,
	delivary: 0,
	calc:function(){
		this.total = (this.price*this.quantity)*31*1.25+1488;
		this.total = this.total.toFixed(2);
	}
  }
  var cTur = {
	price : 0,
	quantity : 0,
	weight : 0,
	total : 0,
	calc:function(){
		this.total = 0;
		if(this.price < 100){
			this.price = 10;
		}else{
			this.price = this.price*0.1;
		}
		this.total = this.price*this.quantity*1.25*18.4 + this.weight*355;
		this.total = this.total.toFixed(2);
	}
  }
  /////cTao/////////////////////
  $('.calcTao .price').change(function(){
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
  $('.calcTao .quantity').change(function(){
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
    $('.calcTao .weight').change(function(){
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
  $('.calcAli .price').change(function(){
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
  $('.calcAli .quantity').change(function(){
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
    $('.calcAli .weight').change(function(){
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
  $('.calcVS .price').change(function(){
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
  $('.calcVS .quantity').change(function(){
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
    $('.calcVS .weight').change(function(){
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
  $('.calcTur .price').change(function(){
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
  
  $('.calcTur .quantity').change(function(){
  if( $.trim($(this).val()).match(num_regex)){
	cTur.price = $('.calcTur .price').val();
	cTur.quantity = $('.calcTur .quantity').val();
	cTur.weight = $('.calcTur .weight').val();
	}else{
		$(this).val('');
	cTur.quantity = $('.calcTur .quantity').val();
	}
	cTur.calc();
		if(cTur.total != 0){
		$('.calcTur .total').val(cTur.total.toString());
	}else{
		$('.calcTur .total').val('');
	}
  });
    $('.calcTur .weight').change(function(){
	if( $.trim($(this).val()).match(num_regex)){
	cTur.price = $('.calcTur .price').val();
	cTur.quantity = $('.calcTur .quantity').val();
	cTur.weight = $('.calcTur .weight').val();
	}else{
		$(this).val('');
		cTur.weight = $('.calcTur .weight').val();
	}
	cTur.calc();
	if(cTur.total != 0){
		$('.calcTur .total').val(cTur.total.toString());
	}else{
		$('.calcTur .total').val('');
	}
  });
  ///////////cTur//////////////////
});
