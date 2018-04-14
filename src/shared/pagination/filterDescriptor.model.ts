export enum FilterOperator {
	StartsWith = '$startswith$',
	EndsWith = '$endswith$',
	Contains = '$contains$',
	NotContains = '$notContains$',
	In = '$in$',
	NotIn = '$notIn$',
	Equals = '=',
	Greater = '>',
	Less = '<',
	GreatherOrEquals = '>=',
	LessOrEquals = '<=',
	Distinct = '!='
}

export class FilterDescriptor {
	constructor(public property: string, public filterOperator: string, public value: any) {

	}
}
