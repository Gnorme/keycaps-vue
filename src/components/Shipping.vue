<template>
	<div>
		<div style="display:inline-block; float:left; margin-top:8px">
			<div style="margin-bottom:8px">Shipping Estimate</div>
			<select name="country" class="select" required>
				<option value="" selected disabled hidden>Country</option>
				<option>Canada</option>
				<option>United States of America</option>
			</select>
			<select name="province" class="select" required>
				<option value="" selected disabled hidden>State/Province</option>
				<option>Quebec</option>
				<option>British Columbia</option>
			</select>
			<input class="text" type="text" placeholder="Postal Code..."/>
			<button class="button" style="padding-top:4px; font-size:15px">Get a quote</button>
		</div>
		<div style="text-align:right; padding: 4px; font-weight:600;">
			HST: {{ stringify('tax') }} <br>
			Shipping: {{ stringify('shipping') }}<br>
			Total: {{ stringify('total') }}
		</div>					
	</div>	
</template>

<script>
	export default {
		name:'Shipping',
		props: {
			stringify:Function
		}
	};
</script>

<style>
	.select {
		line-height: 33px;
		border-radius: 3px;
		margin: 0;
		padding: 0 26px 0 4px;
		cursor: pointer; 
		background: url('../assets/arrow-down.svg') no-repeat;
		background-size:12px;
		-webkit-appearance: none; 
		-moz-appearance: none;
		background-position: right 10px center;
		border:1px solid rgb(169,169,169);
		font-size:14px;
		color:black;
		margin-right:5px;
	}/* Arrow */
	.select:hover {
		border-color: darkslategray;
	}
	.select:focus {
		background: url('../assets/arrow-up.svg') no-repeat right;	
		background-size:12px;
		background-position: right 10px center;
	}
	.select:required:invalid {
	  font-weight:400;
	}
	.select, option {
	  font-weight:600;
	}
	.text {
		line-height: 33px;
		width:100px;
		border-radius: 3px;
		padding: 0 0 0 4px;
		font-size:14px;
		font-weight:600;
		cursor: pointer; 
		-webkit-appearance: none; 
		-moz-appearance: none;
		border:1px solid rgb(169,169,169);
		margin-right:5px;
	}

	.text:placeholder-shown {
	  font-weight:400;
	}

	.text:hover {
		border-color: darkslategray;
	}	
</style>