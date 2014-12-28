// oia(do
//   (def x (whilegen (lt x 100) (yieldall (dogen 123 nil)) ))
//   (prn (into [] (compose (fn [a] a)) x))
//   )


// oia(lets [go chan put take] (require 'js-csp/lib/csp') (do
  
  // (let [c (chan)]
    
  //   (go (gen []
  //     (def i 0)
  //     (while (lt i 20) 
  //       (yield (do 
  //         (js i++) 
  //         (put c i))))))
    
  //   (go (gen []
  //     (while true 
  //       (prn (yield (take c)))))))
  
  // (let [c (chan)]
    
  //   (go (gen []
  //     (def i 0)
  //     (while (lt i 20) 
  //       (yield (do 
  //         (js i++)
  //         (prn 'process one putting') 
  //         (put c i))))))
    
  //   (go (gen[] (while true 
  //     (prn 'process two took' (yield (take c)))))))));

oia(lets [go chan put take timeout alts] (require 'js-csp/lib/csp') (do

  (fn fake [kind] 
    (fn [c query] 
      (go (gen [] 
        (yield (take (timeout (js Math.random()*200))))
        (yield (put c [$ kind query]))))))

  (def web1 (fake :web1))
  (def web2 (fake :web2))
  (def image1 (fake :image1))
  (def image2 (fake :image2))
  (def video1 (fake :video1))
  (def video2 (fake :video2))

  (fn fastest [query replicas]
    (let [c (chan)]
      (.forEach replicas (fn [replica] (replica c query))) c))

  (fn google [query] 
    (let [c (chan) t (timeout 100) sink (chan)]
      (go (gen [] 
        (yield (put c 
          (yield (take 
            (fastest query [$ web1 web2])))))))
      (go (gen [] 
        (yield (put c 
          (yield (take 
            (fastest query [$ image1 image2])))))))
      (go (gen [] 
        (yield (put c 
          (yield (take 
            (fastest query [$ video1 video2])))))))
      
      (go (gen []
        (def res [$])
        (dotimes 3 
          (.push res (get (yield (alts [$ c t])) :value 'timed out')))
        (yield (put sink res))))

      sink))
  
  (go (gen []
    (prn (yield (take (google 'oia'))))))));



// _.go(function* () {
//   for(var i = 0; i < 10; i++) {      
//     yield _.put(c, i);
//    console.log("process one put", i);    
//   }
//   c.close()
// });

// _.go(function* () {
//   while(true) {
//     var val = yield _.take(c);
//     if(val == null) {
//       break;
//     } else {
//       console.log("process two took", val);
//     }
//   }
// });












// oia(do
// 	(def xf 
//     (compose 
//       (drop 20)
//       (map (fn [x] (mul x 3))) 
//       (filter (fn [x] (eq 0 (mod x 2)))) 
//       (take 10)))
  
//   (prn (seq (range 500) xf)));
//   // oia(js <div>something { <span> and something from here </span>}</div>);


// <div :style {:width 200}>
// 	text and stuff
// 	{(.map children (fn [child] <div className 'gambino'>{child}</div> ))}
// 	<MyComponent key 1785 onClick this.onClick/>
// </div>




// <tile hidden true>
// 	<product id 18767 />
// 	<image src '/logo.png'/>	
// 	<text family 'uber sans' size 12 value 'say whaaaat'/>
// </tile>

// var x = 123;
// var x = oia(fn[] 123);

// oia(do 
// 	(prn (set :a :b :a 1 2 3 4 6 7 9)));

// oia(do 
// 	(def x (struct {:x 1 :y 2}))
// 	(def y (.cursor x))
// 	(def z (.update y (fn [] {:a true :b false})))
// 	(prn (.cursor x) y z));


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


// var _ = require ('js-csp/lib/csp');

// var c = _.chan();




// oia(do 
//   (def x (gen [] (yield 123) (yield 123)))
//   (def y (gen [] (yieldall (x)) nil))
  
//   // (prn (seq (x) (compose (fn [x] x))))
//   (prn (into [] (compose (fn [a] a)) (y)))
//   // (prn (.next y))
//   // (prn(.next y))
//   // (prn(.next y))
//   );


// (go (gen [] ))

// var y = (function* (){ yield 123; yield 456; yield 789; }());



// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())

// (gen [] 
//   (def r (range 100))
//   yield())

// oia(prn csp)

// function* xyz(){
// 	yield 123
// }

// var go = require('js-csp/csp.bundled').go

