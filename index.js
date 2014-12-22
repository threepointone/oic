

oia( 
  let [xf 
    (compose 
      (map (fn [x] (mul x 3))) 
      (filter (fn [x] (eq 0 (mod x 2)))) 
      (take 10))]
  (prn (seq [1 2 3 4 5] xf)))



