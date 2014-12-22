// var csp = require('js-csp');

oia( 
  let [xf 
    (compose 
      (map (fn [x] (mul x 3))) 
      (filter (fn [x] (eq 0 (mod x 2)))) 
      (take 10))]
  (prn (seq [1 2 3 4 5] xf)));


// oia(let [x (gn [] (yield 123))](prn(.next (x))));

// oia(prn csp)

// function* xyz(){
// 	yield 123
// }


// (let [c (chan)]
// 	(go (gn[]())))

// go(function* () {
//   for(var i = 0; i < 10; i++) {
//     yield put(c, i);
//     console.log("process one put", i);
//   }
//   yield put(c, null);
// });

// go(function* () {
//   while(true) {
//     var val = yield take(c);
//     if(val == null) {
//       break;
//     } else {
//       console.log("process two took", val);
//     }
//   }
// });