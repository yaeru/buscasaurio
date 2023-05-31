<!-- Please remove this file from your project -->
<template>
	<div class="py-4">
		<h1 class="mb-4 text-center">
			🦖 Buscasaurio
		</h1>

		<section class="mb-5 card p-4">
			<h2 class="h3">
				Buscador
			</h2>
			<div class="row mb-3">
				<label class="col-sm-2 col-form-label">Palabra clave</label>
				<div class="col-sm-10">
					<input type="text" v-model="keyword" required placeholder="Ingresa la palabra clave" class="form-control" @keyup.enter="searchProducts">
				</div>
			</div>

			<div class="row mb-3 d-none">
				<label class="col-sm-2 col-form-label">Limite</label>
				<div class="col-sm-10">
					<input type="number" v-model="limit" name="" placeholder="Ejemplo: 5" class="form-control">
				</div>
			</div>

			<div class="row mb-3 d-none">
				<label class="col-sm-2 col-form-label">Paginado (offset)</label>
				<div class="col-sm-10">
					<input type="number" v-model="offset" name="" placeholder="Ejemplo: 5" class="form-control">
				</div>
			</div>

			<div class="row mb-3">
				<legend class="col-form-label col-sm-2 pt-0">Estado del producto</legend>
				<div class="col-sm-10">
					<div class="mb-1">
						<input type="radio" id="allConditions" value="" v-model="conditionFilter">
						<label for="allConditions">Todas las condiciones</label>
					</div>
					<div class="mb-1">
						<input type="radio" id="newCondition" value="new" v-model="conditionFilter">
						<label for="newCondition">Nuevo</label>
					</div>
					<div class="mb-1">
						<input type="radio" id="usedCondition" value="used" v-model="conditionFilter">
						<label for="usedCondition">Usado</label>
					</div>
				</div>
			</div>
			<button @click="searchProducts" class="btn btn-primary btn-lg">Buscar</button>
		</section>

		<section class="mb-5" v-if="showResults">
			<h2 class="h3">
				Resultados: {{paging.total}} productos de <strong>"{{keyword}}" en condicion "{{conditionFilter}}" </strong>
			</h2>
			<ul class="d-none">
				<li>Total: {{paging.total}}</li>
				<li>offset: {{offset}}</li>
				<li>limit: {{paging.limit}}</li>
				<li>totalItems: {{totalItems}}</li>
				<li>totalPages: {{totalPages}}</li>
			</ul>
			<div class="mb-4 text-center">
				<button @click="prevPage()" class="btn btn-secondary" :disabled="offset <= 0">Anterior</button>
					<button @click="nextPage()" class="btn btn-secondary">Siguiente</button>
				</div>

				<div class="grid">
					<article v-for="product in products" :key="product.id" class="card product">

						<img :src="product.thumbnail" class="card-img-top">

						<div class="card-body">
							<h3 class="h6">{{ product.title }}</h3>
							<p class="text-success fw-bold">$ {{product.price}} {{product.currency_id}}</p>
							<p>Condition: {{product.condition}}</p>
							<a :href="product.permalink" target="_blank" class="btn btn-secondary btn-sm w-100">Ver Producto</a>
						</div>
					</article>
				</div>

				<div class="mt-4 text-center">
					<button @click="prevPage()" class="btn btn-secondary" :disabled="offset <= 0">Anterior</button>
						<button @click="nextPage()" class="btn btn-secondary">Siguiente</button>
					</div>
				</section>
		<!-- <pre class="card p-4">
			{{response}}
		</pre> -->
	</div>
</template>

<style type="text/css">
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;
	}
	@media (min-width: 961px) {
		.grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}
	@media (min-width: 1300px) {
		.grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}
	.product .card-img-top {
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>

<script>
	export default {
		name: 'NuxtTutorial',

		data() {
			return {
				response: '',
				keyword: '',
				conditionFilter: 'used',
				products: [],
				categories: [],
				paging: '',
				offset: 0,
				currentPage: 1,
				limit: 30,
				totalItems: 0,
				totalPages: 0,
				showResults: false,
			}
		},
		methods: {

			async searchProducts() {
				try {
					//const offset = (this.currentPage - 1) * this.itemsPerPage;

					const response = await this.$axios.get('https://api.mercadolibre.com/sites/MLA/search?q', {
						params: {
							q: this.keyword,
							limit: this.limit,
							offset: this.offset,
							condition: this.conditionFilter,
						}
					});

					const catResponse = await this.$axios.get('https://api.mercadolibre.com/sites/MLA/categories');

					//this.offset = 0;

					this.categories = catResponse.data;
					this.products = response.data.results;
					this.paging = response.data.paging;
					this.response = response.data;

					this.totalItems = response.data.paging.total;
					this.showResults = true;
					this.totalPages = Math.ceil(this.totalItems / this.limit);


				} catch (error) {
					console.error('Error al obtener los productos:', error);
				}
			},
			nextPage(pageNumber) {
				this.currentPage = pageNumber;
				this.searchProducts();
			},

			

			async nextPage() {
				const newOffset = this.offset + this.limit;
				if (newOffset < this.totalPages * this.limit) {
					this.offset = newOffset;
					await this.searchProducts();
				}
			},

			async prevPage() {
				this.offset -= this.limit;
				if (this.offset < 0) {
					this.offset = 0;
				}
				await this.searchProducts();
			}
		},
		created() {
		//this.searchProducts();
		}
	}
</script>
