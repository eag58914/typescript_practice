export class PersonClass {
	public readonly firstName: string;
	public readonly lastName: string;
	public readonly age: boolean;
	private bankAccount: number;

	constructor(data) {
		this.firstName = data.firstName;
	}
}
