# ES6
### Destructing
- Concatenate two Array
```
arr1 = [1,2]
arr2 = [3,4]
arr3 = [...arr1, ...arr2]
```
- Destructiong wit defalut value
```
const {field = 'defalut'} = data
```
### Optional Chaining( .? )
> The optional chaining (?.) operator accesses an object's property or calls a function.
> If the object accessed or function called using this operator is undefined or null,
> the expression short circuits and evaluates to undefined instead of throwing an error.
```
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

## 组件逻辑封装
> 将业务逻辑封装到JS中,导出一个名为use+业务名的函数,并返回一个对象,包含data 已经 方法.
> 在调用处调用函数并使用解构赋值接收数据.
```
const {cateGoryData,getCategoryData} = useCategory()
```