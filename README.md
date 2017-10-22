## 一、观察者模式

    Observer目录下

        Subject.js
        Observer.js
        ObserverList.js



   * 目标对象   --- Subject.js
   * 观察者列表  --- ObserverList.js
   * 具体的观察者 --- Observer.js

>  1、目标对象：应该含有当前观察他的观察者列表 --- observerList属性

>  2、目标对象：应该含有向观察者列表中`增、删、通知`观察者的方法 --- AddObserver、RemoveObserver、Notify

>  3、观察者列表对象：应该含有观察者列表属性：`observerList`，以及一系列的`增删改查`方法。

>  4、观察者对象： 该对象维护具体观察者的属性、方法。`接收消息的方法`--`Update`，以便目标对象进行相应的调用，达到所谓的通知观察者的功能。
