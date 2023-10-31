<template>
	<nav class="mb-4 text-center">
		<button @click="previousPage" :disabled="currentPage === 1" class="btn btn-primary">Anterior</button>
		<span>Página {{ currentPage }} de {{ totalPages }}</span>
		<button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-primary">Siguiente</button>
	</nav>
</template>