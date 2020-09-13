const a = [17, 28, 30]
const b = [99, 16, 8]

const compare = (a, b) => {
  let data = [0, 0]
  for(let i=0; i<a.length; i++) {
      if(a[i] > b[i]) {
        data[0]++
      }
      else if (a[i] < b[i]) {
        data[1]++
      }
    }
  return data
}

console.log(compare(a,b))

