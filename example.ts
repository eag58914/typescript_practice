import { number } from 'prop-types';
import { NumsEnum } from './example.enum';
import { INumsExample } from './numExample.interface';
let example: string = '';

type numExample = { num1: NumsEnum; num2: number };

// let ex2 = example.map((element)=>{
//     return element +1
// })
type intersection = INumsExample & numExample;

function add(nums: intersection): string {
	return (nums.num1 + nums.num2).toString();
}

add({ num1: 1, num2: 2, num3: 3, num4: 4 });
