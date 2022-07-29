function deepClone(obj,map=new Map){
    if(!obj) return obj;
    if(typeof obj !== "object"){
        return obj;
    }
    if(map.get(obj)) return map.get(obj)
    let copy = new obj.constructor;
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
           copy[key] = deepClone(obj[key])
        }
    }
    map.set(obj,copy);
    return copy;
}
let obj={a:1,b:{c:2}}
console.log(deepClone(obj));
obj.b.c =3;
console.log(obj);