<script setup>
import { ref, computed } from 'vue';
import BaseTable from '@/components/table/BaseTable.vue';
import TableRow from '@/components/table/TableRow.vue';
import TableColumn from '@/components/table/TableColumn.vue';
import Button from '@/components/Button.vue';

const tableHeads = ['Id', 'Author', 'Title', 'Cover', ''];
const tableSizeColumns = '50px 1fr 2fr 150px 140px';

const sortField = ref('id');
const typeSort = ref('asc');

const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://cv9.litres.ru/pub/c/cover_max1500/128391.jpg',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://www.moscowbooks.ru/image/book/777/orig/i777725.jpg?cu=20230328183505',
    bg: '#00C48C'
  },
  {
    id: 5,
    author: 'Юрий НИкитин',
    title: 'Трое из леса',
    image: 'https://akniga.org/uploads/media/topic/2020/02/20/15/preview/72e36712d962511cea94_400x.jpg',
    bg: '#6874E8'
  },
]);

const sortedBooks = computed(() => {
	return books.value.sort((a, b) => {
		let modifier = 1;
		if (typeSort.value === 'desc') modifier = -1;
		if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
		if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
		return 0;
	})
});

const setSort = (name) => {
	if (sortField.value === name) {
		if (typeSort.value === 'asc') {
			typeSort.value = 'desc';
		} else {
			typeSort.value = 'asc';
		}
	} else {
		sortField.value = name;
	}
}
</script>

<template>
	<h1 class="heading-1">Table</h1>
	<span>Sort field: {{ sortField }}</span><br>
	<span>Type sort: {{ typeSort }}</span>
	<BaseTable
		:heads="tableHeads"
		:columnTemplates="tableSizeColumns"
		@sorting="setSort"
	>
		<TableRow
			v-for="book in sortedBooks"
			:key="book.id"
			:columnTemplates="tableSizeColumns"
			:bgRow="book.bg"
		>
			<TableColumn :columnTitle="tableHeads[0]">
				{{ book.id }}
			</TableColumn>
			<TableColumn :columnTitle="tableHeads[1]">
				{{ book.author }}
			</TableColumn>
			<TableColumn :columnTitle="tableHeads[2]">
				{{ book.title }}
			</TableColumn>
			<TableColumn
				image
				:srcImage="book.image"
			/>
			<TableColumn>
				<Button label="Read online"></Button>
			</TableColumn>
		</TableRow>
	</BaseTable>
</template>

<style lang="scss" scoped>
</style>