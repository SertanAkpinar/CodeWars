function digitize(n) {
    const nStr = n.toString()
    const arr = nStr.split('').reverse().map(Number)
    console.log(arr)
  }

digitize(12345)