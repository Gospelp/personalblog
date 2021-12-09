---
title: 初识react
date: 2021-11-23
categories:
 - React
tags:
 - React
---
# 拥抱React

<!--Facebook旗下产品-->

操作DOM呈现页面，使用diffing算法，最小化页面重绘

- **library**（库）：小而巧
- **framework**（框架）：大而全的是框架
- **模块化**：代码角度；抽离可复用代码
- **组件化**：UI角度；抽离可复用UI界面；React中，一切都是用JS来表现的

## DOM概念

React中的虚拟DOM：用JS对象来模拟页面上的DOM和DOM嵌套

![1621492756276](C:\Users\SNT3200G8G512G\AppData\Roaming\Typora\typora-user-images\1621492756276.png)

# React入门

## React基本使用

babel：es6 => es5;jsx => js

react：核心库

react.dom：扩展库

### hello React

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--容器-->
<div id="test"></div>

<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
<script type="text/babel">
// const VDOM = React.createElement('h1',{id:'title'},React.createElement('span',{},'Hello,React'))
    //1.创建虚拟DOM
    const VDOM = (
        <h1>
            <span>Hello,React</span>
        </h1>)
    //2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'));

    /*
     jsx是js的语法糖
     虚拟DOM本质是Object类型的对象
     虚拟DOM比较轻，真实DON较重，虚拟DOM是React内部使用，无需真实DOM多余属性
     虚拟DOM最终会被React转化为真实DOM，最终呈现在页面上
     */
</script>
</body>
</html>

```

```
  /*
    jsx语法规则
      1.定义虚拟DOM时，不要引号
      2.标签混用js表达式要用{}
      3.样式使用className
      4.内联样式要用{{key:value}},驼峰式命名
      5.虚拟DOM必须只有一个根标签
      6.标签必须闭合
      7.标签首字母
        (1).若小写字母开头，则将标签转为html中同名元素，若无则报错
        (2).若大写字母开头，react就去渲染对应的组件，无就未定义
    */
```

### 练习

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    .box {
        width: 250px;
        height: 250px;
        border: 1px solid #000000;
        box-shadow: #ccc;
    }
</style>

<body>
    <!--容器-->
    <div id="test"></div>

    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
    <script type="text/babel">

        /*
        注意：js语句与js表达式
            1.表达式：一个表达式会产生一个值，可以放在任何一个需要的地方
                例：(1). a
                    (2). a+b
                    (3). demo(1)
                    (4). arr.map()
                    (5). function test(){}
            2.语句
                例：(1). if
                    (2). for(){}        
                    (3). switch(){case:break}
        
        */
        const data = ['Angular', 'React', 'Vue'];
        const mybox = "box";
        //1.创建虚拟DOM
        const VDOM = (
            <div id={mybox} className="box">
                <h1>前端js框架列表</h1>
                <ul>
                    {data.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                    }
                </ul>

            </div>

        )
        //2.渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById('test'));

    </script>
</body>

</html>
```

# 面向组件编程

## 函数式组件

```js
 //1.创建函数式组件
        // 组件（代码与资源的集合）
        function Demo() {
            console.log(this);//此处的this是undefined，因为babel开启严格模式
            return <h2>函数式组件</h2>
        }
        // 2.渲染组件到页面
        ReactDOM.render(<Demo/>,document.getElementById('test'));

        /*
            1.React解析组件标签，找到了Demo组件
            2.发现组件是函数定义的，解析为虚拟DOM，呈现到页面
        */
```

## 类组件

```js
  //1.创建类式组件(必须继承React.Component)
        class Demo extends React.Component {
            // 类的原型对象上，供实例使用
            render() {
                console.log(this);//this指向组件实例对象
                return <h1>类定义组件，复杂组件</h1>
            }

        }
        //2.渲染组件到页面
        ReactDOM.render(<Demo />, document.getElementById("test"))
        
        /*
            1.React解析组件标签，找到了Demo组件
            2.发现组件是类定义的，随后创建该类的实例，并通过实例调用原型上的render方法
            3.将render返回的虚拟DOM转为真实DOM呈现到页面中
        */
```

## 组件实例的三大核心属性

### state

```js
 class Weather extends React.Component {
            //构造器调用了一次
            constructor(props) {
                super(props);
                // 初始化状态
                this.state = {
                    isHot: true,
                    wind:'微风'
                }
                // bind()改变this的指向
                this.changeWeather = this.changeWeather.bind(this);
            }

            render() {
                const { isHot,wind } = this.state;
                return <h1 onClick={this.changeWeather}>今天天气很{isHot ? "炎热" : "寒冷"},{wind}</h1>
            }
            changeWeather(){
                //changeWeather放在Weather的原型对象，供实例使用
                //由于Weather是作为onClick的回调，所以不是通过实例调用的，是直接调用
                //类中的方法默认开启严格模式，所以changeWeather中的this为undefined
                console.log(this);//undefined
                //状态不可直接更改
                const isHot = this.state.isHot;
                // this.state.isHot = !isHot;
                this.setState({
                    isHot:!isHot
                })
                console.log(isHot);
                
            }
        }

        ReactDOM.render(<Weather />, document.getElementById("test"));


```

#### 简写

```js
 class Weather extends React.Component {
            // 初始化状态
            state = {
                isHot: true,
                wind: '微风'
            }
            render() {
                const { isHot, wind } = this.state;
                return <h1 onClick={this.changeWeather}>今天天气很{isHot ? "炎热" : "寒冷"},{wind}</h1>
            }
            // 自定义方法，直接写到原型上
            changeWeather = () => {
                const isHot = this.state.isHot;
                this.setState({
                    isHot: !isHot
                })
            }
        }
        ReactDOM.render(<Weather />, document.getElementById("test"));
```

1.  class中的方法如果是普通函数方法，该方法会绑定在构造函数的原型上 

2.  如果方法是箭头函数方法，该方法会绑定在构造函数上 

3.  通过上述方式调用class中的方法，无论是箭头函数方法还是普通函数方法，方法中的this都指向实例对象 

   #### 箭头函数与普通函数

    通过引用来调用箭头函数方法，方法中的this依然指向创建的实例对象。
   原因：箭头函数中的this，只和定义该箭头函数的位置有关系，即，箭头函数中的this始终是该箭头函数所在作用域中的this。而箭头函数所在的作用域中的this指向foo实例对象。
   通过引用调用普通函数方法，方法中的this会指向undefined。
   原因：因为普通函数中的this是动态绑定的，始终指向函数的执行环境，上面的例子中在全局环境中调用getAge方法，但是this却是undefined而不是window。原因在于class声明和class表达式中会默认使用严格模式。 

### props

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
</style>

<body>
    <!--容器-->
    <div id="test"></div>
    <div id="test2"></div>

    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
    <!-- 引入用于对数据类型进行限制 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/prop-types/15.7.2/prop-types.js"></script>
    <script type="text/babel">
        class Person extends React.Component {
            // 构造器是否接收props，是否传递给super，取决于是否希望在构造器中通过this访问props
            constructor(props) {
                super(props);
                console.log(this.props);
            }
            static propTypes = {
                name: PropTypes.string.isRquired,//限制为必填且为字符串
                run: PropTypes.func//限制为函数
            }

            static defaultProps = {
                sex: '性别未知'
            }
            render() {
                const { name, sex, age } = this.props;
                return (
                    <ul>
                        <li>姓名：{name}</li>
                        <li>性别：{sex}</li>
                        <li>年龄：{age + 1}</li>
                    </ul>
                )
            }
            // 自定义方法

        }

        /*
        props类型限制
            (1)限制数据类型 string
            (2)必填 isRquired
            (3)默认 defaultProps
        
        */

        // Person.propTypes = {
        //     name:PropTypes.string.isRquired,//限制为必填且为字符串
        //     run:PropTypes.func//限制为函数

        // }

        // Person.defaultProps = {
        //     sex:'性别未知'
        // }
        const p = { name: "周杰", sex: "女", age: 18 };
        ReactDOM.render(<Person name="谢航" sex="女" age={28} run={run} />, document.getElementById("test2"));

        ReactDOM.render(<Person {...p} />, document.getElementById("test"));

        function run() {
            console.log("跑");
        }



        //展开运算符 MDN
        function sum(...numbers) {
            return numbers.reduce((pre, current) => {
                return pre + current
            })
        }

        let person = { name: "谢某人", age: 18 };
        let person1 = { ...person, sex: "女" }
        console.log({ ...person1 });




    </script>
</body>

</html>
```

```js
<script type="text/babel">
        //    函数式组件props
        function Person(props) {
            console.log(props);
            return <h2>创建一个人类{props.name}</h2>
        }

        let person = {name:"周杰"} 

        ReactDOM.render(<Person {...person} />, document.getElementById("test"))
    </script>
```



### refs

```js
 // 字符串形式ref
        class Demo extends React.Component {
            showData = () => {
                // 字符串类型ref 过时（效率不高）
                const {input1,input2} = this.refs;
                alert(input1.value)
            }

            blurData = () => {
                const {input1,input2} = this.refs;
                alert(input2.value)
            }

            render() {
                return (<div>
                    <input ref="input1" type="text" placeholder="点击" /><br />
                    <button ref = "btn" onClick={this.showData} >点我提示数据</button><br />
                    <input ref="input2" type="text" onBlur={this.blurData} placeholder="失去焦点" />
                </div>)
            }

        }

        ReactDOM.render(<Demo />, document.getElementById('test'))
```

```js
  //回调函数形式ref
        class Demo extends React.Component {
            showData = () => {
                console.log(this);
                const { input1 } = this;
                alert(input1.value)
            }
            blurData = () => {
            }
            render() {
                return (<div>
                    <input ref={(currentNode) => { this.input1 = currentNode }} type="text" placeholder="点击" /><br />
                    <button ref="btn" onClick={this.showData} >点我提示数据</button><br />
                    <input ref="input2" type="text" onBlur={this.blurData} placeholder="失去焦点" />
                </div>)
            }

        }

        ReactDOM.render(<Demo />, document.getElementById('test')) 

```

持续更新中	截止日期2021/5/21

[^Yan]: How to study React

