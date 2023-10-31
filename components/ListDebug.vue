<template>
	<ul class="d-none">
		<li>Total: {{paging.total}}</li>
		<li>offset: {{paginationData.offset}}</li>
		<li>calculatedOffset: {{offset}}</li>
		<li>limit: {{paginationData.limit}}</li>
		<li>primary_results {{paging.primary_results}} </li>
		<li>totalItems: {{totalItems}}</li>
		<li>currentPage: {{currentPage}}</li>
		<li>totalPages: {{totalPages}}</li>
	</ul>
</template>