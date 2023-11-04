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
							<label class="form-label">Palabra clave</label>
							<div>
								<input type="text" v-model="keyword" required placeholder="Ingresa la palabra clave" class="form-control" @keyup.enter="searchProducts">
							</div>
						</div>

						<div class="mb-3">
							<label class="form-label">Categorias</label>
							<div>
								<select class="form-control" v-model="category">
									<option value="null" selected>Todas</option>
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
								<div class="col-md-6">
									<legend class="form-label pt-0">Condición</legend>
									<div>
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

								<!-- Order -->
								<div class="col-md-6">
									<legend class="form-label pt-0">Orden de precio</legend>
									<div>
										<div class="mb-1">
											<input type="radio" id="price_asc" value="price_asc" v-model="sortPrice">
											<label for="price_asc">Menor precio</label>
										</div>
										<div class="mb-1">
											<input type="radio" id="price_desc" value="price_desc" v-model="sortPrice">
											<label for="price_desc">Mayor precio</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<p>
							<a class="btn  btn-outline-secondary btn-sm" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
								Opciones extra
							</a>
						</p>
						<div class="collapse" id="collapseExample">
							<div id="dominios" class="row mb-3">
								<legend class="form-label pt-0">Ocultar dominios</legend>

								<div class="col-sm-6 text-lowercase">
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
								<div class="col-sm-6 text-lowercase">
									<div class="mb-1">
										<input type="checkbox" id="domEyes" value="MLA-EYESHADOWS" v-model="hideDomainIds">
										<label for="domEyes">MLA-EYESHADOWS</label>
									</div>
									<div class="mb-1">
										<input type="checkbox" id="domMakeup" value="MLA-EYEBROW_MAKEUP" v-model="hideDomainIds">
										<label for="domMakeup">MLA-EYEBROW_MAKEUP</label>
									</div>

									<div class="mb-1">
										<input type="checkbox" id="LINGERIE_SETS" value="MLA-LINGERIE_SETS" v-model="hideDomainIds">
										<label for="LINGERIE_SETS">MLA-LINGERIE_SETS</label>
									</div>

									<div class="mb-1">
										<input type="checkbox" id="MASCARAS" value="MLA-MASCARAS" v-model="hideDomainIds">
										<label for="MASCARAS">MLA-MASCARAS</label>
									</div>

									<div class="mb-1">
										<input type="checkbox" id="MAKEUP_SETS" value="MLA-MAKEUP_SETS" v-model="hideDomainIds">
										<label for="MAKEUP_SETS">MLA-MAKEUP_SETS</label>
									</div>
								</div>
							</div>
						</div>


						<button @click="searchProducts" class="btn btn-primary btn-lg">Buscar</button>
					</div>

					<Credits />
				</div>
			</aside>

			<!-- RESULTADOS -->
			<main id="main" class="col-lg-8 col-xl-9 pt-3">
				<div class="card pb-3" v-if="showResults">
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

					<section id="results-grid"  class="grid pt-3 px-3">
						<article v-for="product in products" :key="product.id" class="card product" :class="getClassForProduct(product)">
							<span class="position-absolute badge" v-bind:class="{'bg-success': product.condition === 'new', 'bg-danger': product.condition === 'used'}">
								{{ product.condition }}
							</span>

							<figure>
								<a :href="product.permalink" target="_blank">
									<img :src="product.thumbnail" class="card-img-top">
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
		--bs-border-radius: 15px !important;
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
	@media only screen and (min-width: 981apx) {
		#main > .card {
			height: calc(100vh - 2rem);
			overflow-y: scroll;
		}
	}
	#results-grid {}
	#results-title {
		background-color: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(12px);
		border-bottom: solid 1px var(--grey);
	}
	@media only screen and (max-width: 980px) {
		#results-title {
			text-align: center;
		}
		#results-title h3 {
			margin-bottom: 1rem !important;
		}
	}
	.sticky-md-top {
		top: 0 !important;
	}

	.form-label {
		font-weight: 500;
		font-size: 1rem;
	}
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

/* Product */
.product {
	overflow: hidden;
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
}
.product:hover .card-img-top {
	transform: scale(1.05);
}
.product .card-body {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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

#dominios label {
	font-size: 0.8rem;
}

/* Reset BS */
.card {
	border-color: var(--grey) !important;
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