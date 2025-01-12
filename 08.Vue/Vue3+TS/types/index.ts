//1、定义接口：限制Person对象的具体属性
export interface PersonInter{
    id:string,
    name:string,
    age:number
}
//2、泛型
// export type Persons = Array<PersonInter>;
//3、自定义类型
export type Persons = PersonInter[];