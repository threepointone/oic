
var expect = require("chai").expect;
var imm = require('immutable');

var _ = require('oia');

function list(){
  return imm.List.apply(arguments);
}

describe("sexpressions", function() {

  it("should allow to call js functions", function() {
    var f0 = function() { return 1; }
    var f1 = function(a) { return a; }
    var f2 = function(a, b) { return [a, b]; }
    expect(oia (f0)).to.eql(1);
    expect(oia (f1 1)).to.eql(1);
    expect(oia (f2 1 2)).to.eql([1,2]);
  });

  it("should allow to use attribute access notation as function name", function() {
    
    var foo0 = { bar: function() { return 1; } }
    var foo1 = { bar: function(a) { return a; } }
    var foo2 = { bar: function(a,b) { return [a, b]; } }
    var goo0 = { bar: { baz : function() { return 1; } } }
    var goo1 = { bar: { baz : function(a) { return a; } } }
    var goo2 = { bar: { baz : function(a, b) { return [a, b]; } } }
    expect(oia (foo0.bar)).to.eql(1);
    expect(oia (foo1.bar 1)).to.eql(1);
    expect(oia (foo2.bar 1 2)).to.eql([1,2]);
    expect(oia (goo0.bar.baz)).to.eql(1);
    expect(oia (goo1.bar.baz 1)).to.eql(1);
    expect(oia (goo2.bar.baz 1 2)).to.eql([1,2]);
  });

  it("should allow to use attribute access notation as function argument", function() {
    
    var goo1 = { bar: { baz : function(a) { return a; } } }
    var goo2 = { bar: { baz : function(a, b) { return [a, b]; } } }
    var goo3 = { bar: { baz : function(a, b, c) { return [a, b, c]; } } }
    var data = { a: { b: 0 }}
    expect(oia (goo1.bar.baz data.a.b)).to.eql(0);
    expect(oia (goo2.bar.baz data.a.b 1)).to.eql([0,1]);
    expect(oia (goo3.bar.baz data.a.b 1 data.a.b)).to.eql([0,1,0]);
  });

});

describe("lambdas", function() {

  it("should allow to define anonymous functions and call them from js", function() {
    
    var f = oia (fn [x] (js x + 1))
    expect(f(1)).to.eql(2);
  });

  it("should allow to define anonymous functions and use them in oia", function() {
    
    expect(
      oia (.toJS (.map [1 2 3] (fn [x] (js x + 1)) ))
      ).to.eql([2,3,4]);
  });

  it("should allow to define named anonymous functions and call them recursively", function() {
    
    expect(
      oia (.toJS (.map [1 2 3] (fn foobar[x] (if (js x === 1) x (foobar (js x - 1)))) ))
      ).to.eql([1,1,1]);
  });

});

describe("interoperability", function() {

  it("should allow to call js within oia", function() {
    
    expect(
      oia (.toJS (.map [1 2 3] (js function(x) { return x + 1; }) ))
      ).to.eql([2,3,4]);
  });

  it("should allow to pass a oia fn as a js callback", function() {
    
    expect(
      [1,2,3,4].map(oia (fn [x] (js x % 2 === 0)))).to.eql([false,true,false,true]);
  });

});

describe("local bindings and lexical scope", function() {

  it("should allow to define local bindings in a let form and ensure proper lexical scope", function() {
    
    expect(
      oia (.toJS
           (let [a 1 
                  b 2]
              [a b]))
      ).to.eql([1,2]);
    expect(
      oia (.toJS
           (let [a 0]
            (let [a (inc a) 
                   b (inc a)]
               [a b])))
      ).to.eql([1,2]);
    var c = {d: 1};
    expect(
      oia (let [a c.d
                b (inc a)
                e :e]
            (let [a (inc a) 
                   b (inc b)] 
              a)
            [a b e])
      ).to.eql(_.list(1, 2, _.keyword('e')));
  });

});

describe("truthiness", function() {

  it("should have truthy return false only for boolean false, nil (and js null and undefined)", function() {

    expect(oia (truthy false)).to.eql(false);
    expect(oia (truthy nil)).to.eql(false);
    expect(oia (truthy (js null))).to.eql(false);
    expect(oia (truthy (js undefined))).to.eql(false);
    expect(oia (truthy "")).to.eql(true);
    expect(oia (truthy 0)).to.eql(true);
    expect(oia (falsey false)).to.eql(true);
    expect(oia (falsey 0)).to.eql(false);
    expect(oia (not (falsey false))).to.eql(false);
    expect(oia (not (falsey 0))).to.eql(true);
  });

});

describe("logical operators", function() {

  it("should be consistent with definition of truthiness", function() {
    
    expect(oia (and "" 0)).to.eql(true);
    expect(oia (and "" 0 nil)).to.eql(false);
    expect(oia (or "" 0)).to.eql(true);
    expect(oia (or false nil)).to.eql(false);
    expect(oia (and "" (not (or false nil)) 0)).to.eql(true);
  });

  it("should short circuit", function() {
    
    expect(oia (and true false undefined_symbol)).to.eql(false);
    expect(oia (or false true undefined_symbol)).to.eql(true);
  });
});

describe("equality", function() {

  it("should operate on deep data structures", function() {
    
    expect(oia (eq {"a" 1 "b" [{"c" 1} 2]} {"a" 1 "b" [{"c" 1} 2]})).to.eql(true);
    expect(oia (eq {"a" 1 "b" [{"c" 3} 2]} {"a" 1 "b" [{"c" 1} 2]})).to.eql(false);
    expect(oia (neq {"a" 1 "b" [{"c" 3} 2]} {"a" 1 "b" [{"c" 1} 2]})).to.eql(true);
  });

});

describe("flow control", function() {

  it("should allow branching consistently with definition of truthiness", function() {
    
    expect(oia (when (eq 1 1) "foo")).to.eql("foo");
    expect(oia (when_not (eq 1 2) "foo")).to.eql("foo");
    expect(oia (if "" "foo" "bar")).to.eql("foo");
    expect(oia (if 0 "foo" "bar")).to.eql("foo");
    expect(oia (if nil "foo" "bar")).to.eql("bar");
    expect(oia (if_not "" "foo" "bar")).to.eql("bar");
  });

  it("should have cond be consistent with definition of truthiness", function() {
    
    expect(
      oia (cond
           (eq 1 2) "foo"
           nil "bar"
           "" "baz")).to.eql("baz");
    expect(
      oia (cond
           (eq 1 2) "foo"
           nil "bar"
           :else "baz")).to.eql("baz");
  });

  it("should have cond short circuit", function() {
    
    expect(oia (cond
                (eq 1 2) "foo"
                true "bar"
                undefined_symbol "baz")).to.eql("bar");
  });

});

describe("data literals", function() {

  it("should allow to create lists", function() {    
    expect(oia (eq [1 2 3 4] (list 1 2 3 4))).to.eql(true);
  });

  it("should allow to create hash maps", function() {
    
    expect(oia (eq {"a" 2 "b" 4} (hash_map "a" 2 "b" 4))).to.eql(true);
  });

  it("should allow to create hash maps and evaluate forms", function() {
    
    expect(oia (eq {"a" (inc 1) (str "b") 4} (hash_map "a" 2 "b" 4))).to.eql(true);
  });

  it("should allow to create deeply nested data structures", function() {
    
    expect(oia (eq {"a" [2 [3 4]] "b" {"c" 5 [6 7] "d"}} 
                (hash_map "a" (list 2 (list 3 4)) 
                          "b" (hash_map "c" 5 (list 6 7) "d")))).to.eql(true);
  });

  it("should allow to create js arrays", function() {
    
    expect(oia (do [$ 1 2 3 4])).to.eql([1,2,3,4]);
  });

  it("should allow to create js objects", function() {
    
    expect(oia (do {$ "a" 1 "b" 2})).to.eql({a: 1, b: 2});
  });

  it("should allow to create nested js objects", function() {
    
    expect(oia (do {$ "a" {$ "c" [$ 3 4]} "b" 2})).to.eql({a: {c: [3, 4]}, b: 2});
  });


});

describe("recursion", function() {

  it("should allow to express simple recursion", function() {
    
    var f = oia (fn fib[n]
      (cond 
       (eq n 0) 0
       (eq n 1) 1
       "else" (add (fib (js n-1)) (fib (js n-2)))));
    expect(f(20)).to.eql(6765);
  });

  it("should allow to recur using loop/recur without blowing the stack", function() {
    
    var f = oia (fn fib [n]
        (loop [a 0 b (inc a) iter 0]
         (if (js iter == n) a
          (recur b (js a + b) (inc iter)))));
    expect(f(20)).to.eql(6765);
    expect(f(500)).to.eql(1.394232245616977e+104);
  });

});

describe("keywords", function() {

  it("should be usable in collections", function() {
    
    
    expect(oia (do [:a 1 :b {:c 2}])).to.eql(
      _.list(_.keyword('a'),1,
        _.keyword('b'),_.hash_map(_.keyword('c'),2)));
  });

  it("should evaluate to themselves", function() {   
   expect(oia (do (:a))).to.eql(_.keyword('a'));
  });

  it("should evaluate as keys to get values from collections", function() {   
   expect(oia (:a {:a 1 :b 2})).to.eql(1);
  });

});

describe("arity", function() {

  it("should allow calling functions without arity constraints, as in js", function() {
    
    var foo = oia (fn foo [a] (str "Hello " a))
    expect(foo(1, 2)).to.eql("Hello 1");
    expect(foo()).to.eql("Hello undefined");
  });

  it("should allow to define functions with multiple arities", function() {
    
    var foo = oia(fn foo 
         ([a] (str "Hello " a))
         ([a b] (str "There " a " " b)))
    
    expect(foo(1)).to.eql("Hello 1");
    expect(foo(1, 2)).to.eql("There 1 2");
  });

  it("should allow to define named anonymous functions with multiple arities and refer to the name within the body", function() {
    
    var f = oia (fn self
                 ([] (self "world"))
                 ([who] (str "Hello " who "!")))
    expect(f()).to.eql("Hello world!");
    expect(f("yellow")).to.eql("Hello yellow!");
  });

  it("should fallback to max arity in case supplied arguments do not match the specified arities", function() {
    
    var foo = oia (fn foo 
         ([a] (str "Hello " a))
         ([a b] (str "There " a " " b)))
    
    expect(foo()).to.eql("There undefined undefined");
    expect(foo(1, 2, 3)).to.eql("There 1 2");
  });

  it("should allow to define functions with optional arguments");

});

describe("dot notation", function() {

  it("should allow to use dot notation to invoke methods on JavaScript objects", function() {
    
    var a = {
      bar: function(x) {
        return x*2;
      }
    };
    var b = {
      foo: function(x) {
        return a;
      }
    };
    expect(
      oia (.bar a 2)
      ).to.eql(4);
    expect(
      oia (threadf b (.foo) (.bar 2))
      ).to.eql(4);
  });

});

describe("chaining and doto", function() {

  it("should allow to use JavaScript chained APIs", function() {
    
    var A = function() {
      var self = this;
      this.v = "init ";
      this.foo = function(x) {
        self.v += "foo called with " + x + " ";
        return self;
      };
      this.bar = function(x) {
        self.v += "bar called with " + x + " ";
        return self;
      };
    }
    var a = new A();
    expect(
      oia (chain a (foo 1) (bar 2) v)
      ).to.eql('init foo called with 1 bar called with 2 ');
  });

  it("should allow to repeatedly call methods on a JavaScript object", function() {
    
    var A = function() {
      var self = this;
      this.foo = null;
      this.bar = null;
      this.setFoo = function(x) {
        self.foo = x;
      };
      this.setBar = function(x) {
        self.bar = x;
      };
      this.getFooBar = function() {
        return self.foo + " " + self.bar;
      }
    }
    var a = new A();
    expect(
      oia (doto a (setFoo 'a') (setBar 'b')).getFooBar()
      ).to.eql('a b');
  });

});

describe("threading", function() {

  it("should allow to thread first a value through a sequence of computations", function() {
    
    var a = 1;
    expect(
      oia (threadf a inc inc dec)
      ).to.eql(2);
    expect(
      oia (threadf a (add 2) (add 3))
      ).to.eql(6);
    expect(
      oia (threadf [] (.push 1) first)
      ).to.eql(1);
  });

  it("should allow to thread last a value through a sequence of computations", function() {
    
    var a = 1;
    expect(
      oia (threadl a (.push []) (inc) first)
      ).to.eql(2);
  });

});

describe("math operations", function() {

  it("should allow to add, subtract, multiply, divide a sequence of numbers and compute the modulo of two numbers", function() {
    
    expect(oia (add 1 2 3)).to.eql(6);
    expect(oia (sub 3 2 1)).to.eql(0);
    expect(oia (mul 1 2 3)).to.eql(6);
    expect(oia (div 3 2 1)).to.eql(1.5);
    expect(oia (mod 3 2)).to.eql(1);
  });

  it("should allow to compare sequences of numbers", function() {
    
    expect(oia (lt 1 2 3)).to.eql(true);
    expect(oia (lt 3 2 1)).to.eql(false);
    expect(oia (lt 1 2 2)).to.eql(false);
    expect(oia (gt 1 2 3)).to.eql(false);
    expect(oia (gt 3 2 1)).to.eql(true);
    expect(oia (gt 3 2 2)).to.eql(false);
    expect(oia (leq 1 2 3)).to.eql(true);
    expect(oia (leq 3 2 1)).to.eql(false);
    expect(oia (leq 1 2 2)).to.eql(true);
    expect(oia (geq 1 2 3)).to.eql(false);
    expect(oia (geq 3 2 1)).to.eql(true);
    expect(oia (geq 3 2 2)).to.eql(true);
  });

});

describe("continuations", function() {
  
  it("should allow to write asynchronous code in a synchronous fashion", function() {
    
    var foo = function(x, cb) {
      var y = x * 2;
      cb(y);
    };
    var bar = function(x, cb) {
      var y = x + 1;
      cb(y);
    };
    var baz = function(x, cb) {
      var y = x + 1;
      var z = x * 2;
      cb(y,z);
    };

    oia (letc [a (foo 2)
              b (bar a)
              [c d] (baz b)]
        (js expect(b).to.eql(5))
        (js expect(c).to.eql(6))
        (js expect(d).to.eql(10)))

    
    var log = "";
    oia (do
        (fn fake_request [url cb]
         (setTimeout (fn [] (cb 1234)) 1000))
        
        (letc [data (fake_request "fakeurl")]
         (js log += "Response received: " + data + ".")
         (js expect(log).to.eql("Request sent. Response received: 1234.")))

        (js log += "Request sent. "))
    expect(log).to.eql("Request sent. ");
  });

});

describe("apply", function() {

  it("should call a function given a list of arguments supplied as a collection", function() {    
    expect(imm.is(imm.fromJS([1,2,3,4]), oia (apply list [1 2 3 4]))).to.eql(true);
  });

});

describe("bind", function() {

  it("should return a function with this set to the provided object", function() {
    var res = oia(let [
      a {:a 1 :b 2} 
      f (fn [] (get this :a))
      f1 (bind a f)
      f2 (bind a (fn [] (get this :a)))
    ][$ (f1) (f2)])

    expect(res).to.eql([1, 1]);
  });

});

describe("multimethods", function() {

  it("should allow to define functions that dispatch according to the result of the evaluation of another function", function() {
    
    var boss = oia(do
        (multi boss (fn [x] (get x :type)))
        (method boss :employee [x] (get x :employer))
        (method boss :employer [x] (get x :name)) boss);
    expect(oia (boss {:type :employee :name "Barnie" :employer "Fred"})).to.eql("Fred");
    expect(oia (boss {:type :employer :name "Fred"})).to.eql("Fred");
  });

});

describe("sequences", function(){});

describe("cursors", function() {

  it("should allow to define reference types with read and write callbacks");
  // , function() {
    

  //   oia (do
  //       (let [r (atom 1 (fn [n o] (js expect(n).to.eql(2); expect(o).to.eql(1)))
  //                       (fn [x] (js expect(x).to.eql(2))))]
  //        (reset r 2)
  //        (deref r)));

  //   oia (do
  //       (let [r (atom 1 (fn [n o] (js expect(n).to.eql(2); expect(o).to.eql(1)))
  //                       (fn [x] (js expect(x).to.eql(2))))]
  //        (swap r inc)
  //        (js expect(oia (deref r)).to.eql(2))));

  // }
});

describe("exceptions", function() {

  it("should allow to try expressions and catch exceptions", function() {

    

    oia (try foo.bar (catch e (js expect(e instanceof ReferenceError).to.eql(true))));

    var side_effect = false;
    oia (try foo.bar (catch e (js expect(e instanceof ReferenceError).to.eql(true))) (finally (js side_effect = true)));
    expect(side_effect).to.eql(true);

  });

  it("should allow to throw exceptions", function() {

    expect(oia (fn [] (throw (Error "foo")))).to.throw();

  });

});

describe("this and fnth", function() {

  it("should handle binding this fn-wise correctly from within IIFN", function() {

    

    var somefn = oia (fn [] (let [a 1] this.someprop));
    var bar = {someprop: 1};
    var baz = {};

    expect(oia ((bind bar somefn))).to.eql(1);
    expect(oia ((bind baz somefn))).to.eql(undefined);
    expect(oia (somefn)).to.eql(undefined);

  });

  it("should allow a shorthand notation for defining a fn bound to the enclosing this, both named and unnamed", function() {

    

    var fn1, fn2;
    oia (do
         (js this.jee = 1)
         (let [a (fn [] this.jee)
               b (fnth [] this.jee)
               c (fnth cfn[] this.jee)]
           (js fn1 = a)
           (js fn2 = b)
           (js fn3 = c)));

    expect(fn1.bind({jee: 2})()).to.eql(2);
    expect(fn2.bind({jee: 2})()).to.eql(1);
    expect(fn3.bind({jee: 2})()).to.eql(1);

  });

});

describe("str", function() {

  it("should allow to concatenate strings and literals", function() {
    
    expect(oia (str "a" 2 "b" 3 "c")).to.eql("a2b3c");
  });

});

describe("destructuring", function() {

  it("should destructure nested immutable data structures in let forms", function(){
    

    var r = oia (let [[a b {c :c [d e] :d}] [1 2 {:c 3 :d [4 5]}]
                     f 6]
                 (eq [a b c d e] [1 2 3 4 5]))

    expect(r).to.eql(true);
  });

  it("should destructure nested JS data structures in let forms", function(){
    

    var r = oia (let [[$ a b {$ c 'c' [$ d e] 'd'}] [$ 1 2 {$ c 3 d [$ 4 5]}]]
                 (eq [a b c d e] [1 2 3 4 5]))

    expect(r).to.eql(true);
  });

  it("should destructure nested immutable data structures in loop forms", function(){
    

    var r = oia (loop [[a b _] [1 2 3]]
                 (if (gt a 3)
                  (eq [a b] [4 5])
                  (recur (map [a b 3] inc))))

    expect(r).to.eql(true);
  });

  it("should destructure nested JS data structures in loop forms", function(){
    

    var r = oia (loop [[$ a b _] [$ 1 2 3]]
                 (if (gt a 3)
                  (eq [a b] [4 5])
                  (recur (.toJS (map [a b 3] inc)))))

    expect(r).to.eql(true);
  });


});
