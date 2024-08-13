//ex. 1
//teting let: -10,5,15,26
//status: OK

let temp = 25;

if (temp < 0) {
  console.log("Inghet");
} else if (temp <= 10 && temp > 0) {
  console.log("Frig");
} else if (temp > 10 && temp < 25) {
  console.log("Molderat");
} else if (temp >= 25) {
  console.log("cald");
}

//ex. 2
//testing let: 1,2,3,4,5,6,7,8
//status: OK

let day = 8;

if (day == 1) {
  console.log("luni");
} else if (day == 2) {
  clonsole.log("marti");
} else if (day == 3) {
  clonsole.log("miercuri");
} else if (day == 4) {
  clonsole.log("joi");
} else if (day == 5) {
  clonsole.log("vineri");
} else if (day == 6) {
  clonsole.log("sambata");
} else if (day == 7) {
  clonsole.log("duminica");
} else console.log("error: nu corespunde range 1 - 7");

//ex. 3
//testing let: 5,4, rrd
//status: OK

let number = "rrd";

if (typeof number == "number") {
  if (number % 2 == 0) {
    console.log(`Numarul ${number} este par;`);
  } else {
    console.log(`Numarul ${number} este impar;`);
  }
} else {
  console.log(`error:  tipul de date nu este numar;`);
}

//ex. 4
//testing purchaseAmount: 60, 100

const discount = 0.9;
const VAT = 1.05;
const purchaseAmount = 60;

// Format US
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
if (purchaseAmount >= 100) {
  console.log(
    `Pretule pentru factura este de ${USDollar.format(purchaseAmount * discount * VAT)}\n Dicount 10%: ${USDollar.format(purchaseAmount * (1 - discount))}\n VAT 5%: ${USDollar.format(purchaseAmount * (1 - VAT))}`,
  );
} else {
  console.log(
    `Pretule pentru factura este de  ${USDollar.format(purchaseAmount * VAT)}\n VAT 5%: ${USDollar.format(purchaseAmount * (1 - VAT))}`,
  );
}



//ex. 5
// testing: [romnR5Fd - parola medie [OK] ] / [sefasdgrFFFFGggg266ngbdvn - parola puternica[OK] ] / [ sfcerd - parola slaba [OK] / [ddd  - parola nesigura [OK]] 
let password = 'romnFFFFhgcvdcjv8888cwec8JJj'
let len =password.length
const containsNumber = /\d/.test(password);

if (len>=12 &&  password.toUpperCase() && password.toLowerCase() && containsNumber==true)
{
  console.log('parola e puternica')
}

else if (len>=8  && password.toUpperCase() && password.toLowerCase()  && containsNumber==true)
{
  console.log('parola e medie')
}
else if (len>=6  && password.toLowerCase())
{
  console.log('parola e salaba')
}
else {console.log('parola nesigura')}


//ex. 6
//testing: codul functioneaza dar asta nu-i abordare trebuie for
/*range testat: 
 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 
347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 
463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 
607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 
743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 
883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997.

*/
let numberInput = 541;
let len1 =numberInput.length

if (numberInput%2==0 ) {

  if (numberInput%3==0){
  console.log('no')
}
else if (numberInput%4==0){
  console.log('no')
}
else if (numberInput%5==0){
  console.log('no')
}
else if (numberInput%6==0){
  console.log('no')
}
else if (numberInput%7==0){
  console.log('no')
}
else if (numberInput%8==0){
  console.log('no')
}
else if (numberInput%9==0){
  console.log('no')
} else {console.log('no')}}

else if (numberInput%3==0) {
  if(numberInput%2==0) {
    console.log('no')
  }
  else if (numberInput%3==0 && len1==1){
    console.log('da')
  }
  else if (numberInput%4==0){
    console.log('no')
  }
  else if (numberInput%5==0){
    console.log('no')
  }
  else if (numberInput%6==0){
    console.log('no')
  }
  else if (numberInput%7==0){
    console.log('no')
  }
  else if (numberInput%8==0){
    console.log('no')
  }
  else if (numberInput%9==0){
    console.log('no')
  } else {console.log('no')}
}

else if (numberInput%4==0) {
  if(numberInput%2==0) {
    console.log('no')
  }
  else if (numberInput%3==0){
    console.log('no')
  }
  else if (numberInput%4==0 && len1==1){
    console.log('da')
  }
  else if (numberInput%5==0){
    console.log('no')
  }
  else if (numberInput%6==0){
    console.log('no')
  }
  else if (numberInput%7==0){
    console.log('no')
  }
  else if (numberInput%8==0){
    console.log('no')
  }
  else if (numberInput%9==0){
    console.log('no')
  } else {console.log('no')}
}

else if (numberInput%5==0) {
  if(numberInput%2==0) {
    console.log('no')
  }
  else if (numberInput%3==0){
    console.log('no')
  }
  else if (numberInput%4==0){
    console.log('no')
  }
  else if (numberInput%5==0 && len1==1){
    console.log('da')
  }
  else if (numberInput%6==0){
    console.log('no')
  }
  else if (numberInput%7==0){
    console.log('no')
  }
  else if (numberInput%8==0){
    console.log('no')
  }
  else if (numberInput%9==0){
    console.log('no')
  } else {console.log('no')}

  
}
else if (numberInput%6==0) {
  if(numberInput%2==0) {
    console.log('no')
  }
  else if (numberInput%3==0){
    console.log('no')
  }
  else if (numberInput%4==0){
    console.log('no')
  }
  else if (numberInput%5==0){
    console.log('da')
  }
  else if (numberInput%6==0 && len1==1){
    console.log('da')
  }
  else if (numberInput%7==0){
    console.log('no')
  }
  else if (numberInput%8==0){
    console.log('no')
  }
  else if (numberInput%9==0){
    console.log('no')
  } else {console.log('no')}}

  else if (numberInput%7==0) {
    if(numberInput%2==0) {
      console.log('no')
    }
    else if (numberInput%3==0){
      console.log('no')
    }
    else if (numberInput%4==0){
      console.log('no')
    }
    else if (numberInput%5==0){
      console.log('da')
    }
    else if (numberInput%6==0){
      console.log('da')
    }
    else if (numberInput%7==0 && len1==1){
      console.log('da')
    }
    else if (numberInput%8==0){
      console.log('no')
    }
    else if (numberInput%9==0){
      console.log('no')
    } else {console.log('no')}}
  
    else if (numberInput%8==0) {
      if(numberInput%2==0) {
        console.log('no')
      }
      else if (numberInput%3==0){
        console.log('no')
      }
      else if (numberInput%4==0){
        console.log('no')
      }
      else if (numberInput%5==0){
        console.log('da')
      }
      else if (numberInput%6==0){
        console.log('da')
      }
      else if (numberInput%7==0){
        console.log('no')
      }
      else if (numberInput%8==0 && len1==1){
        console.log('da')
      }
      else if (numberInput%9==0){
        console.log('no')
      } else {console.log('no')}}
    
      
      else if (numberInput%9==0) {
        if(numberInput%2==0) {
          console.log('no')
        }
        else if (numberInput%3==0){
          console.log('no')
        }
        else if (numberInput%4==0){
          console.log('no')
        }
        else if (numberInput%5==0){
          console.log('da')
        }
        else if (numberInput%6==0){
          console.log('da')
        }
        else if (numberInput%7==0){
          console.log('no')
        }
        else if (numberInput%8==0){
          console.log('no')
        }
        else if (numberInput%9==0 && len1==1){
          console.log('da')
        } else {console.log('no')}}
      
        else {console.log("da")}