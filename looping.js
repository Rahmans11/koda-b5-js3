let kembalian = 1953000

if (kembalian >= 5e4) {
    while (kembalian >= 5e4){
        kembalian = kembalian - 5e4
        let lembar50 = 1
        for (let i = 5e4; i <= kembalian ; kembalian = kembalian - i){
        lembar50 = lembar50 + 1
        }
        console.log("RP 50.000", lembar50, "lembar") 
    }
    while (kembalian >= 1e4){
        kembalian = kembalian - 1e4
        let lembar10 = 1
        for (let j = 1e4; j <= kembalian ; kembalian = kembalian - j){
            lembar10 = lembar10 + 1
        }
        console.log("RP 10.000", lembar10, "lembar")
    }
    while (kembalian >= 5e3){
        kembalian = kembalian - 5e3
        let lembar5 = 1
        for (let K = 5e3; K <= kembalian ; kembalian = kembalian - K){
            lembar5 = lembar5 + 1
        }

        console.log("RP 5.000", lembar5, "lembar")
    }
    while(kembalian >= 2e3) {
        kembalian = kembalian - 2e3
        let lembar2 = 1
        for (let l = 2e3; l <= kembalian ; kembalian = kembalian - l){
            lembar2 = lembar2 + 1
        }
        console.log("RP 2.000", lembar2, "lembar")
    }
    while(kembalian >= 1e3) {
        kembalian = kembalian - 1e3
        let lembar1 = 1
        for (let m = 1e3; m <= kembalian ; kembalian = kembalian - m){
            lembar1 = lembar1 + 1
        }
        console.log("RP 1.000", lembar1, "lembar")
    }
  } else {
      console.log("Invalid");
  }