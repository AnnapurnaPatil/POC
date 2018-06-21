export class FilterModel {
	page: number;
	size: number;
	filterColumns: FilterColumn[];
	sortColumns: SortColumn[];
constructor(){

}
	// constructor(filter: Filter) {
	// 	this.columnName=FilterColumn.columnName;
	// 	this.value=FilterColumn.value;
	// 	this.condition=FilterColumn.condition;
	// }
}

export class FilterColumn {
	columnName: string ;
	value: string;
	condition: string ;
	constructor(){
	
}

}
export class SortColumn {
 columnName: string;
 direction: string;

 constructor(){
	
}
}

