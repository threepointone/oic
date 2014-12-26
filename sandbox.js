// var x = 123;
// var x = oia(fn[] 123);

oia(do 
	(prn (set :a :b :a 1 2 3 4 6 7 9)));

// oia(do 
// 	(def x (struct {:x 1 :y 2}))
// 	(def y (.cursor x))
// 	(def z (.update y (fn [] {:a true :b false})))
// 	(prn (.cursor x) y z));

// oia(do
// 	(def xf 
//     (compose 
//       (drop 20)
//       (map (fn [x] (mul x 3))) 
//       (filter (fn [x] (eq 0 (mod x 2)))) 
//       (take 10)))
  
//   (prn (seq (range 500) xf)));

// oia(let [x 123 y[:a :b :c] z nil](prn x y z));



// oia( 
  // let [xf 
  //   (compose // some comment
  //   	(drop 20)
  //     (map (fn [x] (mul x 3))) 
  //     (filter (fn [x] (eq 0 (mod x 2)))) 
  //     (take 10))]
  // (prn (seq (range 500) xf)));

// oia(prn (cond
//   nil "Not going to return this"
//   false "Nope not going to return this either"
//   :else "Default case")
// )


// var csp = require ('js-csp/lib/csp');

// var c = csp.chan();

// csp.go(function* () {
//   for(var i = 0; i < 10; i++) {	  	
//     yield csp.put(c, i);
//   	console.log("process one put", i);    
//   }
//   c.close()
// });

// csp.go(function* () {
//   while(true) {
//     var val = yield csp.take(c);
//     if(val == null) {
//       break;
//     } else {
//       console.log("process two took", val);
//     }
//   }
// });



// oia(let [x ((gn [] (yield 123)))](prn (.next (doto x (next)))));

// oia(prn csp)

// function* xyz(){
// 	yield 123
// }

// oia(gn[] (yield 123)(yield 123));
// var go = require('js-csp/csp.bundled').go


// oia(lets [go chan put] (require 'js-csp/lib/csp')
// 	(let [c (chan)]
// 		(go (
// 			gn[]
// 				(loop [i 0]
// 					(yield (put c i))
// 					(if (eq i 100) (yield (put c nil))
// 						(recur (inc i))))
