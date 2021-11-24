---
title: Vuex语法糖、插槽、父子传值
date: 2021-11-24
categories:
 - Vue
tags:
 - Vue2.0
---
# 组件通信

1.  通过props向子组件传递数据
2.  通过自定义事件向父组件发送消息

```vue
//子组件代码
<template>
  <div style="border: 1px solid blue">
      <!--向父组件发送事件-->
    <div @click.stop = "toFather" v-for="(item,index) in movies" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Children",
  //父组件传来的数组通过props接受，使用与data中数据的相同，不能进行修改
  props: ['movies'],
  data(){
    return{
      childData:"我来自子组件"
    }
  },
  methods:{
toFather(){
  this.$emit("childBtn",false);
//  子改父只能发送事件通知父组件修改，不能直接修改
}
  },
  mounted() {


  }
}
</script>

<style scoped>

</style>

```

```vue
//父组件代码
<template>
  <div style="border: 1px solid red;width: 2000px;height: 500px">
    <!--  v-on绑定子组件事件-->
    <Children :movies="movies" ref="child" v-on:childBtn="childBtn($event)"></Children>
  </div>
</template>

<script>
import Children from "@/components/Children";

export default {
  name: "Father",
  data() {
    return {
      movies: ['海贼王', '葫芦兄弟', '铁甲小宝']
    }
  },
  components: {
    Children
  },
  methods: {
      //父组件注册事件接受子组件传值
    childBtn(data) {
        //根据值修改数据
      if (data) {
        console.log("null")
      } else {
        this.movies = ['暂无影片上映']
      }

    }
  },
  mounted() {
    //获取子组件数据
    alert(this.$refs.child.childData);
    this.$refs.child.childData = "父组件修改子组件";
  }
}
</script>

<style scoped>

</style>
```

# Vuex语法糖

```vue
//vuex
<template>
  <div>
    {{ numA }}
    <div>{{numA}}+{{numB}}={{increment}}</div>
    <button @click="add">+</button>
    <button @click="remove">-</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex'

export default {
  name: "Vuex",
  computed: {
    ...mapState(['numA', 'numB', 'numList']),
    //相当于
    // numA(){
    //   return this.$store.state.numA
    // },
    ...mapGetters(['increment'])
  }, methods: {
    ...mapMutations(['add', 'remove'])
  }
}
</script>

<style scoped>

</style>
```

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //相当于data
  state: {
    numA:10,
    numB:20,
    numList:[30,40,50]
  },
  //相当于computed
  getters:{
    increment(state){
      return state.numA+state.numB;
    }
  },
  //相当于methods
  mutations: {
    add(state){
      state.numA++;
    },
    remove(state){
      state.numA--;
    }
  },
//类似于mutations 不操作state直接操作mutations
  actions: {
  },
  modules: {
  }
})

```

# 插槽v-slot

插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的<slot></slot>标签

```vue
子组件：
<template>
    <div>
        <button>
            <slot>子组件自定义按钮</slot>
        </button>
    </div>
</template>

父组件引入使用：
<template>
    <div>
        <TButton></TButton>
    </div>
</template>
```

当父组件未传任何内容时，则默认编译子组件中的内容。

 如果在父组件使用时自定义内容，则展示父组件定义的内容：

## 具名插槽

　　在slot标签上增加name属性，使用时，则需指定name，否则不生效，示例：

```vue
子组件：
<template>
    <div>
        <button>
            <slot name="text">子组件自定义按钮</slot>
        </button>
    </div>
</template>

父组件引入使用：
    <template>
    <div>
        <TButton>
            <template v-slot:text>
                父组件定义按钮
            </template>
        </TButton>
    </div>
</template>
```

注意：v-slot只能写在template标签上面

具名插槽缩写

　　将v-slot替换成#,示例：

```vue
<template>
    <div>
        <TButton>
            <template #text>
                父组件定义按钮
            </template>
        </TButton>
    </div>
</template>
```

如果没有名称，简写时也要带上default，示例：

```vue
子组件：
    <template>
    <div>
        <button>
            <slot>子组件自定义按钮</slot>
        </button>
    </div>
</template>

父组件引入使用：
    <template>
    <div>
        <TButton>
            <template #default>
                父组件定义按钮
            </template>
        </TButton>
    </div>
</template>
```

## 作用域插槽：

　　作用域插槽就是父组件插槽获取子组件中的数据，示例：

```vue
子组件定义：
<template>
    <div>
        <button>
            <slot key1="value1" key2="value2">子组件自定义按钮</slot>
        </button>
    </div>
</template>

父组件获取子组件的数据：
<template>
    <div>
        <TButton>
            <template #default="childValue">
                父组件定义按钮
                <br />
                {{ childValue }}
            </template>
        </TButton>
    </div>
</template>
```

其中childValue是自定义的名称，childValue作为子组件所有数据的key，使用数据则以childValue.key1形式

　　对应老版本使用则是`slot-scope="childValue"`

具名插槽+作用域插槽不简写使用示例：

```vue
子组件：
    <template>
    <div>
        <button>
            <slot name="text" key1="value1" key2="value2">子组件自定义按钮</slot>
        </button>
    </div>
</template>

父组件：
    <template>
    <div>
        <TButton>
            <template v-slot:text="childValue">
                父组件定义按钮
                <br />
                {{ childValue }}
            </template>
        </TButton>
    </div>
</template>
```

注意：

　　:后面是插槽的名称

　　=后面是父组件获取子组件的数据 

　　#是v-slot的缩写 #default  #text === v-slot:text   对应老版本写法： slot="text"

　　v-slot和#只能写在template标签上面

持续更新中...

[^study]: made by yangyan

