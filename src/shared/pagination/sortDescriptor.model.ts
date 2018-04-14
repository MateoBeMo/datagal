enum SortOperator {
	Ascending = '',
	Descending = '-'
}

export class SortDescriptor {
	constructor(public property: string, public direction: string) {

	}
}
