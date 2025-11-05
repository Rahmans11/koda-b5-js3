let kembalian = 69_000
let pecahan = []

if (kembalian >= 5e4) {
    while (kembalian >= 5e4){
        kembalian = kembalian - 5e4
        console.log("50.000") 
    }
    while (kembalian >= 1e4){
        console.log("10.000")
        kembalian = kembalian - 1e4
    }
    while (kembalian >= 5e3){
        console.log("5.000")
        kembalian = kembalian - 5e3
    }
    while(kembalian >= 2e3) {
        console.log("2.000")
        kembalian = kembalian - 2e3
    }
    while(kembalian >= 1e3) {
        console.log("1.000")
        kembalian = kembalian - 1e3
    }
  } else {
      console.log("Invalid");
  }