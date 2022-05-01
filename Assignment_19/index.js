function divideby2(sahil){
    let a = sahil/2
    return a
 }
 
 function divideeachby2 (arr){
     let b = []
     for(i=0;i<arr.length;i++){
         const answer = divideby2(arr[i])
      b.push(answer)
 
     }
     return b
 }
 const x = [11,21,31,41,51] 
 const y = [1,2,3,4,5] 
 const z = [8,7,6,5,3]
 const c = divideeachby2(x)
 console.log(c)
 const d = divideeachby2(y)
 console.log(d)
 const e = divideeachby2(z)
 console.log(e)