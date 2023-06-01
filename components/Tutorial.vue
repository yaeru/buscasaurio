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
				<label class="col-sm-2 col-form-label">Categorias</label>
				<div class="col-sm-10">
					<select class="form-control" v-model="category">
						<option value="null" selected>Todas</option>
						<option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
					</select>
				</div>
			</div>

			<div class="row mb-3">
				<legend class="col-form-label col-sm-2 pt-0">Marca</legend>
				<div class="col-sm-10">
					<div class="mb-1">
						<input type="radio" id="brandAll" value="" v-model="brand">
						<label for="brandAll">Todas las marcas</label>
					</div>
					<div class="mb-1">
						<input type="radio" id="brandKenner" value="134666" v-model="brand">
						<label for="brandKenner">Kenner</label>
					</div>
					<div class="mb-1">
						<input type="radio" id="brandFunko" value="415856" v-model="brand">
						<label for="brandFunko">Funko</label>
					</div>
					<div class="mb-1">
						<input type="radio" id="brandHasbro" value="2153571" v-model="brand">
						<label for="brandHasbro">Tapimovil</label>
					</div>
				</div>
			</div>

			<div class="row mb-3">
				<legend class="col-form-label col-sm-2 pt-0">Estado del producto</legend>
				<div class="col-sm-10">
					<div class="mb-1">
						<input type="radio" id="allConditions" value="" v-model="conditionFilter">
						<label for="allConditions">Todos</label>
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

			<div class="row mb-3">
				<legend class="col-form-label col-sm-2 pt-0">Orden de precio</legend>
				<div class="col-sm-10">
					<div class="mb-1">
						<input type="radio" id="price_asc" value="price_asc" v-model="sortPrice">
						<label for="price_asc">price_asc</label>
					</div>
					<div class="mb-1">
						<input type="radio" id="price_desc" value="price_desc" v-model="sortPrice">
						<label for="price_desc">price_desc</label>
					</div>
				</div>
			</div>

			<div class="row mb-3">
				<legend class="col-form-label col-sm-2 pt-0">Ocultar dominios</legend>
				<div class="col-sm-5">
					<div class="mb-1">
						<input type="checkbox" id="domBooks" value="MLA-BOOKS" v-model="hideDomainIds">
						<label for="domBooks">MLA-BOOKS</label>
					</div>
					<div class="mb-1">
						<input type="checkbox" id="domShirt" value="MLA-T_SHIRTS" v-model="hideDomainIds">
						<label for="domShirt">MLA-T_SHIRTS</label>
					</div>
					<div class="mb-1">
						<input type="checkbox" id="domPuzzles" value="MLA-PUZZLES" v-model="hideDomainIds">
						<label for="domPuzzles">MLA-PUZZLES</label>
					</div>
					<div class="mb-1">
						<input type="checkbox" id="domHoodies" value="MLA-SWEATSHIRTS_AND_HOODIES" v-model="hideDomainIds">
						<label for="domHoodies">MLA-SWEATSHIRTS_AND_HOODIES</label>
					</div>
					<div class="mb-1">
						<input type="checkbox" id="domMovies" value="MLA-MOVIES" v-model="hideDomainIds">
						<label for="domMovies">MLA-MOVIES</label>
					</div>
					<div class="mb-1">
						<input type="checkbox" id="domHats" value="MLA-HATS_AND_CAPS" v-model="hideDomainIds">
						<label for="domHats">MLA-HATS_AND_CAPS</label>
					</div>
				</div>
				<div class="col-sm-5">
					<h5>Anastasia Edition</h5>
					<div class="mb-1">
						<input type="checkbox" id="domEyes" value="MLA-EYESHADOWS" v-model="hideDomainIds">
						<label for="domEyes">MLA-EYESHADOWS</label>
					</div>
					<div class="mb-1">
						<input type="checkbox" id="domMakeup" value="MLA-EYEBROW_MAKEUP" v-model="hideDomainIds">
						<label for="domMakeup">MLA-EYEBROW_MAKEUP</label>
					</div>

					<div class="mb-1">
						<input type="checkbox" id="domMakeup" value="MLA-LINGERIE_SETS" v-model="hideDomainIds">
						<label for="domMakeup">MLA-LINGERIE_SETS</label>
					</div>

					<div class="mb-1">
						<input type="checkbox" id="domMakeup" value="MLA-MASCARAS" v-model="hideDomainIds">
						<label for="domMakeup">MLA-MASCARAS</label>
					</div>

					<div class="mb-1">
						<input type="checkbox" id="domMakeup" value="MLA-MAKEUP_SETS" v-model="hideDomainIds">
						<label for="domMakeup">MLA-MAKEUP_SETS</label>
					</div>

				</div>
			</div>


			<button @click="searchProducts" class="btn btn-primary btn-lg">Buscar</button>
		</section>

		<!-- RESULTADOS -->
		<section class="mb-5" v-if="showResults">
			<h2 class="h3">
				Resultados: {{paging.total}} productos de <strong>"{{keyword}}" en condicion "{{conditionFilter}}" </strong>
			</h2>
			<ul class="d-non">
				<li>Total: {{paging.total}}</li>
				<li>offset: {{offset}}</li>
				<li>limit: {{paging.limit}}</li>
				<li>primary_results {{paging.primary_results}} </li>
				<li>totalItems: {{totalItems}}</li>
				<li>totalPages: {{totalPages}}</li>
			</ul>

			<ol class="d-none">
				<li v-for="product in products" :key="product.id">{{ product.title }}</li>
			</ol>

			<div class="mb-4 text-center">
				<button @click="prevPage()" class="btn btn-secondary" :disabled="offset <= 0">Anterior</button>
				<button @click="nextPage()" class="btn btn-secondary">Siguiente</button>
			</div>

				<div class="grid">
					<article v-for="product in products" :key="product.id" class="card product" :class="getClassForProduct(product)">

						<img :src="product.thumbnail" class="card-img-top">

						<div class="card-body">
							<h3 class="h6 line-clamp">{{ product.title }}</h3>
							<p class="text-success fw-bold">$ {{product.price}} {{product.currency_id}}</p>
							<!-- <p>Condition: {{product.condition}}</p> -->
							<p class="d-none">{{product.domain_id}}</p>
							<!-- <p>brand {{product.attributes}} </p> -->
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
		gap: 0.5rem;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 1fr;
	}
	@media (min-width: 961px) {
		.grid {
			gap: 1rem;
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
	.product.disabled {
		opacity: 0.5;
		filter: grayscale(1);
	}
	.line-clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>

<script>
	export default {
		name: 'NuxtTutorial',

		data() {
			return {
				response: '',
				keyword: 'jurassic park',
				conditionFilter: '',
				products: [],
				categories: [],
				paging: '',
				offset: 0,
				currentPage: 1,
				limit: 50,
				totalItems: 0,
				totalPages: 0,
				showResults: false,
				brand: '',
				category: null,
				hideDomainIds: ['MLA-T_SHIRTS', 'MLA-SWEATSHIRTS_AND_HOODIES', 'MLA-EYESHADOWS', 'MLA-EYEBROW_MAKEUP', 'MLA-LINGERIE_SETS', 'MLA-MASCARAS', 'MLA-MAKEUP_SETS', 'MLA-MAKEUP_BRUSHES', 'MLA-FALSE_NAIL', 'MLA-MAKEUP_ILLUMINATORS', 'MLA-LIPSTICKS', 'MLA-CONCEALERS',],
				sortPrice: 'price_asc',
				// hideDomainIds: ['MLA-T_SHIRTS', 'MLA-SWEATSHIRTS_AND_HOODIES', 'MLA-EYESHADOWS', 'MLA-EYEBROW_MAKEUP', 'MLA-LINGERIE_SETS', 'MLA-MASCARAS', 'MLA-MAKEUP_SETS', 'MLA-MAKEUP_BRUSHES', 'MLA-FALSE_NAIL', 'MLA-MAKEUP_ILLUMINATORS', 'MLA-LIPSTICKS', 'MLA-CONCEALERS',],
			}
		},
		methods: {
			getClassForProduct(product) {
				const domainIdsToApplyClass = ['MLA-BOOKS', 'MLA-T_SHIRTS', 'z'];
				if (domainIdsToApplyClass.includes(product.domain_id)) {
					return '';
				}
				return '';
			},

			async showCategories() {
				try {
					const catResponse = await this.$axios.get('https://api.mercadolibre.com/sites/MLA/categories');
					this.categories = catResponse.data;
				} catch (error) {
					console.error('Error al obtener los productos:', error);
				}
			},

			async searchProducts() {

				try {
					const params = {
						q: this.keyword,
						limit: this.limit,
						offset: this.offset,
						condition: this.conditionFilter,
						sort: this.sortPrice,
					};

					if (this.brand) {
						params.brand = this.brand;
					}

					if (this.category) {
						params.category = this.category;
					}

					const response = await this.$axios.get('https://api.mercadolibre.com/sites/MLA/search?q', {
						params: params,
						headers: {
							Authorization: 'Bearer token'
						},
					});


					//'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?category=MLA1055
					this.products = response.data.results;
					this.paging = response.data.paging;
					this.response = response.data;

					this.totalItems = response.data.paging.total;
					//this.brand = response.data.results.attributes;
					this.showResults = true;
					this.totalPages = Math.ceil(this.totalItems / this.limit);
				} catch (error) {
					console.error('Error al obtener los productos:', error);
				}

				// Filtra los productos para ocultar los que tienen el domain_id especificado
				this.products = this.products.filter(product => !this.hideDomainIds.includes(product.domain_id));
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
			this.showCategories();
		}
	}
</script>