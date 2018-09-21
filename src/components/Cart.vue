<template>
	<div>
		<table>
			<tr>
				<th>Product</th>
				<th class="amount">Amount</th>
				<th class="price">Price</th>
				<th />
			</tr>
			<tr v-for='(product, index) in products'>
				<td style="padding-left:8px;">
					Custom keycap<br>
					<img style="width:19%; height:auto;" v-for='surface in product.surfaces' :src="surface.preview" />
				</td>
				<td class="amount">x1</td>
				<td class="price">$10.00</td>
				<td>
				 	<div class="cancel" v-on:click="removeItem(index)">x</div>
				 </td>
			</tr>
		</table>
	</div>	
</template>

<script>
	export default {
		name: 'Cart',
		props: {
			products: Array,
			removeItem: Function
		}
	};
</script>

<style scoped>
	table {
		text-align: left;
		width:100%;
		border-bottom: 1px solid black;		
	}
	.price, .amount{
		text-align:right;
		padding:4px;
		width: 20%;	
	}
	.cancel {
		padding:4px;
		font-size:18px;
		text-align:center;
		color:red;
		font-weight:600;
	}
	.cancel:hover {
		cursor:pointer;
	}
</style>