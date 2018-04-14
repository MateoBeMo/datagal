import { SortDescriptor } from './sortDescriptor.model';
import { FilterDescriptor } from './filterDescriptor.model';
import { UrlBuilder } from './urlBuilder.helper';

interface PageDescriptorInterface {
	filters: Array<FilterDescriptor>;
	sorts: Array<SortDescriptor>;
	skip: number;
	take: number;
	envelope: boolean;
}

export class PageDescriptor implements PageDescriptorInterface {

	filters: Array<FilterDescriptor> = [];
	sorts: Array<SortDescriptor> = [];
	skip: number;
	take: number;
	envelope: boolean;

	constructor() {
	}

	addFilter(filter: FilterDescriptor) {
		this.filters.push(filter);
	}

	addOrUpdateFilter(filter: FilterDescriptor) {
		let foundFilter = this.filters.find(f => f.property === filter.property);
		if (foundFilter) {
			foundFilter = filter;
		} else {
			this.filters.push(filter);
		}
	}

}
