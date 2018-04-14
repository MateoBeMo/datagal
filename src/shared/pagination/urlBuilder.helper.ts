import { PageDescriptor } from './pageDescriptor.model';
import { FilterDescriptor } from './filterDescriptor.model';
import { SortDescriptor } from './sortDescriptor.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UrlBuilder {

	filters: String = '';
	sorts: String = '';
	take: String = '';
	skip: String = '';
  envelope: String = '';

	getUrlParameters(pageDescriptor: PageDescriptor): String {
    this.clearFilters();
		this.setPageDescriptor(pageDescriptor);
		return [this.filters, this.sorts, this.take, this.skip, this.envelope]
			.filter(stringValue => stringValue && stringValue.length > 0 )
			.join('&');
	}

  private clearFilters() {
    this.filters = '';
  }

  getObject() {

  }

	private setPageDescriptor(page: PageDescriptor) {
		if (page) {
			this.filters  = this.formatFilters(page.filters);
			this.sorts = this.formatSorts(page.sorts);
			this.take = this.formatTake(page.take);
			this.skip = this.formatSkip(page.skip);
			this.envelope = this.formatEnvelop(page.envelope);
		}
	}

	private formatFilters(filters: Array<FilterDescriptor>): string {
		return filters.length === 0 ? '' : 'Filters=' +
			filters
				.map((filter: FilterDescriptor) => `${filter.property}${filter.filterOperator}${filter.value}`)
				.join(';');
  }

	private formatSorts(sorts: Array<SortDescriptor>): string {
		return sorts.length === 0 ? '' : 'Sorts=' +
			sorts
				.map((sort: SortDescriptor) => `${sort.direction}${sort.property}`)
				.join(';');
	}

	private formatTake(take: number): string  {
		return take ? `Take=${take}` : '';
	}

	private formatSkip(skip: number): string  {
		return skip != null  ? `Skip=${skip}` : '';
	}

	private formatEnvelop(envelope: boolean): string  {
		return envelope ? `Envelope=${envelope}` : '';
	}
}
