<!-- Please remove this file from your project -->
<template>
	<div class="bg-grey">
		<div class="row">
			<!-- BUSCADOR -->
			<aside id="aside" class="col-lg-4 col-xl-3 pt-3">
				<div class="sticky-md-top">
					<div class="mb-3 card p-3">
						
						<Logo />

						<div class="mb-3">
							<label class="form-label" for="key-word">Palabra clave</label>
							<div>
								<input id="key-word" type="text" v-model="keyword" required placeholder="Ingresa la palabra clave" class="form-control" @keyup.enter="searchProducts">
							</div>
						</div>

						<div class="mb-3">
							<label class="form-label d-none" for="categories">Categorias</label>
							<div>
								<select id="categories" aria-label="categories" class="form-control" v-model="category">
									<option value="null" selected>Todas las Categorias</option>
									<option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
								</select>
							</div>
						</div>

						<div class="mb-3">
							<div class="row">
								<!-- Brand -->
								<!-- <div class="col-md-4">
									<legend class="form-label pt-0">Marca</legend>
									<div>
										<div class="mb-1">
											<input type="radio" id="brandAll" value="" v-model="brand">
											<label for="brandAll">Todas</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="brandKenner" value="134666" v-model="brand">
											<label for="brandKenner">Kenner</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="brandHasbro" value="1006823" v-model="brand">
											<label for="brandHasbro">Hasbro</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="brandMattel" value="1006861" v-model="brand">
											<label for="brandMattel">Mattel</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="brandFunko" value="415856" v-model="brand">
											<label for="brandFunko">Funko</label>
										</div>
									</div>
								</div> -->

								<!-- Condition -->
								<div class="col-6">
									<legend class="form-label pt-0">Condición</legend>
									<div>
										<div class="mb-1">
											<input type="radio" id="allConditions" value="" v-model="conditionFilter">
											<label for="allConditions" class="small">Todos</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="newCondition" value="new" v-model="conditionFilter">
											<label for="newCondition" class="small">Nuevo</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="usedCondition" value="used" v-model="conditionFilter">
											<label for="usedCondition" class="small">Usado</label>
										</div>
									</div>
								</div>

								<!-- Order -->
								<div class="col-6">
									<legend class="form-label pt-0">Orden de precio</legend>
									<div>
										<div class="mb-1">
											<input type="radio" id="price_asc" value="price_asc" v-model="sortPrice">
											<label for="price_asc" class="small">Menor precio</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="price_desc" value="price_desc" v-model="sortPrice">
											<label for="price_desc" class="small">Mayor precio</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<p>
							<a class="btn  btn-outline-secondary btn-sm" data-bs-toggle="collapse" href="#collapseExtras" role="button" aria-expanded="false" aria-controls="collapseExtras">
								Opciones extra
							</a>
						</p>
						<div class="collapse" id="collapseExtras">
							<div id="dominios" class="row mb-3">
								<legend class="form-label pt-0">Ocultar dominios</legend>

								<div class="col-sm-6 text-lowercase">
									<div class="mb-1">
										<input type="checkbox" id="domBooks" value="MLA-BOOKS" v-model="hideDomainIds">
										<label for="domBooks" class="small">MLA-BOOKS</label>
									</div>
									<div class="mb-1">
										<input type="checkbox" id="domShirt" value="MLA-T_SHIRTS" v-model="hideDomainIds">
										<label for="domShirt" class="small">MLA-T_SHIRTS</label>
									</div>
									<div class="mb-1">
										<input type="checkbox" id="domPuzzles" value="MLA-PUZZLES" v-model="hideDomainIds">
										<label for="domPuzzles" class="small">MLA-PUZZLES</label>
									</div>
									<div class="mb-1">
										<input type="checkbox" id="domHoodies" value="MLA-SWEATSHIRTS_AND_HOODIES" v-model="hideDomainIds">
										<label for="domHoodies" class="small">MLA-SWEATSHIRTS_AND_HOODIES</label>
									</div>
									<div class="mb-1">
										<input type="checkbox" id="domMovies" value="MLA-MOVIES" v-model="hideDomainIds">
										<label for="domMovies" class="small">MLA-MOVIES</label>
									</div>
									<div class="mb-1">
										<input type="checkbox" id="domHats" value="MLA-HATS_AND_CAPS" v-model="hideDomainIds">
										<label for="domHats" class="small">MLA-HATS_AND_CAPS</label>
									</div>
								</div>
								<div class="col-sm-6 text-lowercase">
									<div class="mb-1">
										<input type="checkbox" id="domEyes" value="MLA-EYESHADOWS" v-model="hideDomainIds">
										<label for="domEyes" class="small">MLA-EYESHADOWS</label>
									</div>
									<div class="mb-1">
										<input type="checkbox" id="domMakeup" value="MLA-EYEBROW_MAKEUP" v-model="hideDomainIds">
										<label for="domMakeup" class="small">MLA-EYEBROW_MAKEUP</label>
									</div>

									<div class="mb-1">
										<input type="checkbox" id="LINGERIE_SETS" value="MLA-LINGERIE_SETS" v-model="hideDomainIds">
										<label for="LINGERIE_SETS" class="small">MLA-LINGERIE_SETS</label>
									</div>

									<div class="mb-1">
										<input type="checkbox" id="MASCARAS" value="MLA-MASCARAS" v-model="hideDomainIds">
										<label for="MASCARAS" class="small">MLA-MASCARAS</label>
									</div>

									<div class="mb-1">
										<input type="checkbox" id="MAKEUP_SETS" value="MLA-MAKEUP_SETS" v-model="hideDomainIds">
										<label for="MAKEUP_SETS" class="small">MLA-MAKEUP_SETS</label>
									</div>
								</div>
							</div>
						</div>

						<button @click="searchProducts" class="btn btn-primary text-uppercase">Buscar</button>
					</div>

					<Credits />
				</div>
			</aside>

			<!-- RESULTADOS -->
			<main id="main" class="col-lg-8 col-xl-9 pt-3">
				<div id="results-card" class="card pb-3 mb-3" v-if="showResults">
					<section id="results-title" class="p-3 sticky-md-top d-md-flex align-items-center justify-content-between">
						<h3 class="h5 m-0">
							{{paging.total}} productos para <strong>"{{keyword}}"</strong>
						</h3>
						<nav class="text-center">
							<button @click="previousPage" :disabled="currentPage === 1" class="btn btn-secondary btn-sm">Anterior</button>
							<span>Página {{ currentPage }} de {{ totalPages }}</span>
							<button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-primary btn-sm">Siguiente</button>
						</nav>
					</section>

					<section id="results-grid"  class="grid p-3 pb-0">
						<article v-for="product in products" :key="product.id" class="card product" :class="getClassForProduct(product)">
							<span class="position-absolute badge" v-bind:class="{'bg-success': product.condition === 'new', 'bg-danger': product.condition === 'used'}">
								{{ product.condition }}
							</span>

							<figure>
								<a :href="product.permalink" target="_blank">
									<img :src="product.thumbnail" class="card-img-top" :alt="product.title" width="200" height="200">
								</a>
							</figure>

							<div class="card-body">
								<div>
									<h3 class="h6 line-clamp">{{ product.title }}</h3>
									<p class="text-success fw-bold">$ {{product.price}} {{product.currency_id}}</p>
									<p class="d-none">{{product.domain_id}}</p>
								</div>
								<a :href="product.permalink" target="_blank" class="btn btn-warning btn-sm w-100">Ver producto</a>
							</div>
						</article>
					</section>
				</div>
			</main>
		</div>
	</div>
</template>

<style type="text/css">
	:root {
		--grey: #e7e7e7;
		--bs-border-color-translucent: rgba(0, 0, 0, 0.1) !important;
		--bs-border-radius: 15px !important;
		--bs-border-radius-s: 10px !important;
		--bs-border-radius-l: 20px !important;
	}
	body {
		background-color: #f5f5f5 !important;
		/*background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(238,226,241,1) 100%);*/
	}
	@media only screen and (min-width: 981apx) {
		body {
			height: 100vh;
			overflow: hidden;
		}
	}
	#aside {}
	#main {}
	#main > .card {
	}
	.sticky-md-top {
		top: 0 !important;
	}
	@media only screen and (min-width: 981apx) {
		#main > .card {
			height: calc(100vh - 2rem);
			overflow-y: scroll;
		}
	}
	
	/* BASE */
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
	
	/* FORM */
	.form-control {
		border-radius: var(bs-border-radius-l) !important;
	}
	.form-label {
		font-weight: 500;
		font-size: 1rem;
	}

	/* RESULTS */
	@media only screen and (max-width: 980px) {
		#results-card {
			margin-bottom: 6rem !important;
			border-width: 0;
			background-color: transparent;
		}
		#results-grid {
			padding: 0 !important;
			padding-top: 1rem !important;
		}
	}
	#results-title {
		background-color: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(12px);
		border-bottom: solid 1px var(--grey);
		border-radius: var(--bs-border-radius) var(--bs-border-radius) 0 0;
	}
	@media only screen and (max-width: 980px) {
		#results-title {
			text-align: center;
		}
		#results-title.sticky-md-top {
			position: fixed;
			z-index: 99;
			width: 100%;
			top: unset !important;
			left: 0;
			bottom: 0;
		} 
		#results-title .h5 {
			margin-bottom: 0.5rem !important;
			font-size: 1rem;
		}
	}

	/* PRODUCT */
	.card.product {
		overflow: hidden;
		border-radius: var(--bs-border-radius-s);
	}
	@media only screen and (max-width: 980px) {
		.card.product {
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		}
	}
	.product > figure {
		margin-bottom: 0;
		overflow: hidden;
		border-bottom: solid 1px var(--grey);
	}
	.product .badge {
		top: 10px;
		right: 10px;
		font-size: 1rem;
		font-weight: 500;
	}
	.product .card-img-top {
		aspect-ratio: 1/1;
		object-fit: cover;	
		transition: all 0.3s ease;
		border-radius: var(--bs-border-radius-s) var(--bs-border-radius-s) 0 0 !important;
	}
	.product:hover .card-img-top {
		transform: scale(1.05);
	}
	.product .card-body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	@media only screen and (max-width: 980px) {
		.product .card-body {
			padding: 0.7rem;
		}
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

/* Reset BS */
.card {
}
.btn {
	border-radius: 100px !important;
}
</style>

<script>
	export default {
		name: 'NuxtTutorial',
		data() {
			return {
				paginationData: {
					offset: 0,
					limit: 50
				},
				refreshToken: 'TG-6501f3b616cdca00012c38b2-58916123',
				response: '',
				keyword: 'jurassic park',
				conditionFilter: '',
				products: [],
				categories: [],
				paging: '',
				currentPage: 1,
				totalItems: 0,
				showResults: false,
				brand: '',
				category: null,
				hideDomainIds: [],
				sortPrice: 'price_asc',
				// hideDomainIds: ['MLA-T_SHIRTS', 'MLA-SWEATSHIRTS_AND_HOODIES', 'MLA-EYESHADOWS', 'MLA-EYEBROW_MAKEUP', 'MLA-LINGERIE_SETS', 'MLA-MASCARAS', 'MLA-MAKEUP_SETS', 'MLA-MAKEUP_BRUSHES', 'MLA-FALSE_NAIL', 'MLA-MAKEUP_ILLUMINATORS', 'MLA-LIPSTICKS', 'MLA-CONCEALERS',],
			}
		},
		computed: {
			offset: {
				get() {
					return (this.currentPage - 1) * this.paginationData.limit;
				},
				set(value) {}
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
					var myHeaders = new Headers();
					myHeaders.append("accept", "application/json");
					myHeaders.append("content-type", "application/x-www-form-urlencoded");

					var urlencoded = new URLSearchParams();
					urlencoded.append("grant_type", "refresh_token");
					urlencoded.append("client_id", "3820820639250625");
					urlencoded.append("client_secret", "V0G3zUcr57GoJMYFAWEtHvs52QQsKREU");
					urlencoded.append("refresh_token", this.refreshToken);

					var requestOptions = {
						method: 'POST',
						headers: myHeaders,
						body: urlencoded,
						redirect: 'follow'
					};

					var tokenResponse = await fetch("https://api.mercadolibre.com/oauth/token", requestOptions)
					//var tokenResponse = await fetch("https://buscasaurio.netlify.app/.netlify/functions/hello")
					.then(response => response.json())
					.catch(error => console.log('error', error));
					this.refreshToken = tokenResponse["refresh_token"];
					const params = {
						q: this.keyword,
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
							Authorization: 'Bearer ' + tokenResponse["access_token"]
						},
					});

					//'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?category=MLA1055
					this.products = response.data.results;
					this.paging = response.data.paging;
					this.response = response.data;

					this.totalItems = response.data.paging.total;
					//this.brand = response.data.results.attributes;
					this.showResults = true;
					this.totalPages = Math.ceil(this.totalItems / this.paginationData.limit);
					//this.calculatedOffset = return (this.currentPage - 1) * this.paginationData.limit;
				} catch (error) {
					console.error('Error al obtener los productos:', error);
				}

				// Filtra los productos para ocultar los que tienen el domain_id especificado
				this.products = this.products.filter(product => !this.hideDomainIds.includes(product.domain_id));
			},

			async previousPage() {
				if (this.currentPage > 1) {
					this.currentPage--;
					await this.searchProducts();
				}
			},
			async nextPage() {
				if (this.currentPage < this.totalPages) {
					this.currentPage++;
					await this.searchProducts();
				}
			},
		},
		created() {
			this.showCategories();
		}
	}
</script>