/**
 * 观察者列表类
 * @constructor
 */
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.Add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function () {
    this.observerList = [];
};

ObserverList.prototype.Count = function () {
    return this.observerList.length;
};

ObserverList.prototype.Get = function (index) {
    if(index > -1 && this.observerList.length){
        return this.observerList[index];
    }
};

ObserverList.prototype.Insert = function (obj,index) {
    let pointer = -1;
    if(index === 0){
        this.observerList.unshift(obj);
    }else if (index === this.observerList.length){
        this.observerList.push(obj);
    }
    return pointer = index;
};

ObserverList.prototype.IndexOf = function (obj,startIndex) {
  let i = startIndex, pointer = -1;
  while (i < this.observerList.length){
      if(this.observerList[i] === obj)
          pointer = i;
      i++;
  }
  return pointer;
};

ObserverList.prototype.RemoveIndexAt = function (index) {
    if(index === 0){
        this.observerList.shift();
    }else if(index === this.observerList.length - 1){
        this.observerList.pop();
    }
};

function extend(newObj,oldObj) {
    for(let key in newObj){
        //newObj.__proto__.hasOwnProperty(key) && (oldObj[key] = newObj[key]);
        /*if(newObj.__proto__.hasOwnProperty(key) || newObj.hasOwnProperty(key)){
            oldObj[key] = newObj[key];
        }*/
        oldObj[key] = newObj[key];
    }
}