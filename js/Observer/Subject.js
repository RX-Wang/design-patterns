/**
 * 目标类
 * @constructor
 */

function Subject() {
    this.observerList = new ObserverList();
}

/**
 * 向目标的观察者列表中添加新的观察者
 * @param observer
 */
Subject.prototype.AddObserver = function (observer) {
    this.observerList.Add(observer);
};

/**
 * 从目标的观察者列表中删除某一个观察者。
 * @param observer
 * @constructor
 */
Subject.prototype.RemoveObserver = function (observer) {
    this.observerList.RemoveIndexAt(this.observerList.IndexOf(observer,0));
};

Subject.prototype.Notify = function (context) {
    const observerCount = this.observerList.Count();
    for (let i = 0; i < observerCount; i++){
        this.observerList.Get(i).Update(context);
    }
};
