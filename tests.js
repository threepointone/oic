var expect = require('chai').expect;
var imm = require('immutable');
var _ = require('oia');
function list() {
    return imm.List.apply(arguments);
}
describe('sexpressions', function () {
    it('should allow to call js functions', function () {
        var f0 = function () {
            return 1;
        };
        var f1 = function (a) {
            return a;
        };
        var f2 = function (a, b) {
            return [
                a,
                b
            ];
        };
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return f0();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return f1(1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return f2(1, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            1,
            2
        ]);
    });
    it('should allow to use attribute access notation as function name', function () {
        var foo0 = {
                bar: function () {
                    return 1;
                }
            };
        var foo1 = {
                bar: function (a) {
                    return a;
                }
            };
        var foo2 = {
                bar: function (a, b) {
                    return [
                        a,
                        b
                    ];
                }
            };
        var goo0 = {
                bar: {
                    baz: function () {
                        return 1;
                    }
                }
            };
        var goo1 = {
                bar: {
                    baz: function (a) {
                        return a;
                    }
                }
            };
        var goo2 = {
                bar: {
                    baz: function (a, b) {
                        return [
                            a,
                            b
                        ];
                    }
                }
            };
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return foo0.bar();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return foo1.bar(1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return foo2.bar(1, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            1,
            2
        ]);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return goo0.bar.baz();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return goo1.bar.baz(1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return goo2.bar.baz(1, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            1,
            2
        ]);
    });
    it('should allow to use attribute access notation as function argument', function () {
        var goo1 = {
                bar: {
                    baz: function (a) {
                        return a;
                    }
                }
            };
        var goo2 = {
                bar: {
                    baz: function (a, b) {
                        return [
                            a,
                            b
                        ];
                    }
                }
            };
        var goo3 = {
                bar: {
                    baz: function (a, b, c) {
                        return [
                            a,
                            b,
                            c
                        ];
                    }
                }
            };
        var data = { a: { b: 0 } };
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return goo1.bar.baz(data.a.b);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(0);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return goo2.bar.baz(data.a.b, 1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            0,
            1
        ]);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return goo3.bar.baz(data.a.b, 1, data.a.b);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            0,
            1,
            0
        ]);
    });
});
describe('lambdas', function () {
    it('should allow to define anonymous functions and call them from js', function () {
        var f = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function (x$2) {
                        return x$2 + 1;
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(f(1)).to.eql(2);
    });
    it('should allow to define anonymous functions and use them in oia', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        var list$3 = v.list;
                        return list$3(1, 2, 3);
                    }.call(this, require('oia'));
                }.call(this).map(function (x$2) {
                    return x$2 + 1;
                }).toJS();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            2,
            3,
            4
        ]);
    });
    it('should allow to define named anonymous functions and call them recursively', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        var list$3 = v.list;
                        return list$3(1, 2, 3);
                    }.call(this, require('oia'));
                }.call(this).map(function foobar(x$2) {
                    return function () {
                        if (function () {
                                return function (v) {
                                    return function (v$2) {
                                        var truthy$2 = v$2.truthy;
                                        return truthy$2(x$2 === 1);
                                    }.call(this, v);
                                }.call(this, require('oia'));
                            }.call(this)) {
                            return x$2;
                        }
                        return foobar(x$2 - 1);
                    }.call(this);
                }).toJS();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            1,
            1,
            1
        ]);
    });
});
describe('interoperability', function () {
    it('should allow to call js within oia', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        var list$3 = v.list;
                        return list$3(1, 2, 3);
                    }.call(this, require('oia'));
                }.call(this).map(function (x$2) {
                    return x$2 + 1;
                }).toJS();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            2,
            3,
            4
        ]);
    });
    it('should allow to pass a oia fn as a js callback', function () {
        expect([
            1,
            2,
            3,
            4
        ].map(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function (x$2) {
                    return x$2 % 2 === 0;
                };
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }())).to.eql([
            false,
            true,
            false,
            true
        ]);
    });
});
describe('local bindings and lexical scope', function () {
    it('should allow to define local bindings in a let form and ensure proper lexical scope', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        var a = v;
                        return function (v$2) {
                            var b = v$2;
                            return function () {
                                return function (v$3) {
                                    var list$3 = v$3.list;
                                    return list$3(a, b);
                                }.call(this, require('oia'));
                            }.call(this);
                        }.call(this, 2);
                    }.call(this, 1);
                }.call(this).toJS();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            1,
            2
        ]);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        var a = v;
                        return function () {
                            return function (v$2) {
                                var a$2 = v$2;
                                return function (v$3) {
                                    var b = v$3;
                                    return function () {
                                        return function (v$4) {
                                            var list$3 = v$4.list;
                                            return list$3(a$2, b);
                                        }.call(this, require('oia'));
                                    }.call(this);
                                }.call(this, inc(a$2));
                            }.call(this, inc(a));
                        }.call(this);
                    }.call(this, 0);
                }.call(this).toJS();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            1,
            2
        ]);
        var c = { d: 1 };
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        var a = v;
                        return function (v$2) {
                            var b = v$2;
                            return function (v$3) {
                                var e = v$3;
                                (function () {
                                    return function (v$4) {
                                        var a$2 = v$4;
                                        return function (v$5) {
                                            var b$2 = v$5;
                                            return a$2;
                                        }.call(this, inc(b));
                                    }.call(this, inc(a));
                                }.call(this));
                                return function () {
                                    return function (v$4) {
                                        var list$3 = v$4.list;
                                        return list$3(a, b, e);
                                    }.call(this, require('oia'));
                                }.call(this);
                            }.call(this, keyword('e'));
                        }.call(this, inc(a));
                    }.call(this, c.d);
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(_.list(1, 2, _.keyword('e')));
    });
});
describe('truthiness', function () {
    it('should have truthy return false only for boolean false, nil (and js null and undefined)', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return truthy(false);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return truthy(null);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return truthy(null);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return truthy(undefined);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return truthy('');
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return truthy(0);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return falsey(false);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return falsey(0);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return not(falsey(false));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return not(falsey(0));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
});
describe('logical operators', function () {
    it('should be consistent with definition of truthiness', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2('');
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) && function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(0);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2('');
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) && function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(0);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) && function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(null);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2('');
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) || function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(0);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(false);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) || function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(null);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2('');
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) && function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(not(function () {
                                return function (v$3) {
                                    return function (v$4) {
                                        var truthy$3 = v$4.truthy;
                                        return truthy$3(false);
                                    }.call(this, v$3);
                                }.call(this, require('oia'));
                            }.call(this) || function () {
                                return function (v$3) {
                                    return function (v$4) {
                                        var truthy$3 = v$4.truthy;
                                        return truthy$3(null);
                                    }.call(this, v$3);
                                }.call(this, require('oia'));
                            }.call(this)));
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) && function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(0);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
    it('should short circuit', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(true);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) && function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(false);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) && function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(undefined_symbol);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(false);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) || function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(true);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this) || function () {
                    return function (v) {
                        return function (v$2) {
                            var truthy$2 = v$2.truthy;
                            return truthy$2(undefined_symbol);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
});
describe('equality', function () {
    it('should operate on deep data structures', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return eq(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', 1, 'b', function () {
                            return function (v$2) {
                                var list$3 = v$2.list;
                                return list$3(function () {
                                    return function (v$3) {
                                        var hash_map$3 = v$3.hash_map;
                                        return hash_map$3('c', 1);
                                    }.call(this, require('oia'));
                                }.call(this), 2);
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this, require('oia'));
                }.call(this), function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', 1, 'b', function () {
                            return function (v$2) {
                                var list$3 = v$2.list;
                                return list$3(function () {
                                    return function (v$3) {
                                        var hash_map$3 = v$3.hash_map;
                                        return hash_map$3('c', 1);
                                    }.call(this, require('oia'));
                                }.call(this), 2);
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this, require('oia'));
                }.call(this));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return eq(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', 1, 'b', function () {
                            return function (v$2) {
                                var list$3 = v$2.list;
                                return list$3(function () {
                                    return function (v$3) {
                                        var hash_map$3 = v$3.hash_map;
                                        return hash_map$3('c', 3);
                                    }.call(this, require('oia'));
                                }.call(this), 2);
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this, require('oia'));
                }.call(this), function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', 1, 'b', function () {
                            return function (v$2) {
                                var list$3 = v$2.list;
                                return list$3(function () {
                                    return function (v$3) {
                                        var hash_map$3 = v$3.hash_map;
                                        return hash_map$3('c', 1);
                                    }.call(this, require('oia'));
                                }.call(this), 2);
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this, require('oia'));
                }.call(this));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return neq(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', 1, 'b', function () {
                            return function (v$2) {
                                var list$3 = v$2.list;
                                return list$3(function () {
                                    return function (v$3) {
                                        var hash_map$3 = v$3.hash_map;
                                        return hash_map$3('c', 3);
                                    }.call(this, require('oia'));
                                }.call(this), 2);
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this, require('oia'));
                }.call(this), function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', 1, 'b', function () {
                            return function (v$2) {
                                var list$3 = v$2.list;
                                return list$3(function () {
                                    return function (v$3) {
                                        var hash_map$3 = v$3.hash_map;
                                        return hash_map$3('c', 1);
                                    }.call(this, require('oia'));
                                }.call(this), 2);
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this, require('oia'));
                }.call(this));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
});
describe('flow control', function () {
    it('should allow branching consistently with definition of truthiness', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    if (function () {
                            return function (v) {
                                return function (v$2) {
                                    var truthy$2 = v$2.truthy;
                                    return truthy$2(eq(1, 1));
                                }.call(this, v);
                            }.call(this, require('oia'));
                        }.call(this)) {
                        return 'foo';
                    }
                    return;
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('foo');
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var not$2 = v$2.not;
                            return function () {
                                if (function () {
                                        return function (v$3) {
                                            return function (v$4) {
                                                var truthy$2 = v$4.truthy;
                                                return truthy$2(not$2(eq(1, 2)));
                                            }.call(this, v$3);
                                        }.call(this, require('oia'));
                                    }.call(this)) {
                                    return 'foo';
                                }
                                return;
                            }.call(this);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('foo');
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    if (function () {
                            return function (v) {
                                return function (v$2) {
                                    var truthy$2 = v$2.truthy;
                                    return truthy$2('');
                                }.call(this, v);
                            }.call(this, require('oia'));
                        }.call(this)) {
                        return 'foo';
                    }
                    return 'bar';
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('foo');
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    if (function () {
                            return function (v) {
                                return function (v$2) {
                                    var truthy$2 = v$2.truthy;
                                    return truthy$2(0);
                                }.call(this, v);
                            }.call(this, require('oia'));
                        }.call(this)) {
                        return 'foo';
                    }
                    return 'bar';
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('foo');
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    if (function () {
                            return function (v) {
                                return function (v$2) {
                                    var truthy$2 = v$2.truthy;
                                    return truthy$2(null);
                                }.call(this, v);
                            }.call(this, require('oia'));
                        }.call(this)) {
                        return 'foo';
                    }
                    return 'bar';
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('bar');
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function (v) {
                        return function (v$2) {
                            var not$2 = v$2.not;
                            return function () {
                                if (function () {
                                        return function (v$3) {
                                            return function (v$4) {
                                                var truthy$2 = v$4.truthy;
                                                return truthy$2(not$2(''));
                                            }.call(this, v$3);
                                        }.call(this, require('oia'));
                                    }.call(this)) {
                                    return 'foo';
                                }
                                return 'bar';
                            }.call(this);
                        }.call(this, v);
                    }.call(this, require('oia'));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('bar');
    });
    it('should have cond be consistent with definition of truthiness', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    if (function () {
                            return function (v) {
                                return function (v$2) {
                                    var truthy$2 = v$2.truthy;
                                    return truthy$2(eq(1, 2));
                                }.call(this, v);
                            }.call(this, require('oia'));
                        }.call(this)) {
                        return 'foo';
                    }
                    return function () {
                        if (function () {
                                return function (v) {
                                    return function (v$2) {
                                        var truthy$2 = v$2.truthy;
                                        return truthy$2(null);
                                    }.call(this, v);
                                }.call(this, require('oia'));
                            }.call(this)) {
                            return 'bar';
                        }
                        return function () {
                            if (function () {
                                    return function (v) {
                                        return function (v$2) {
                                            var truthy$2 = v$2.truthy;
                                            return truthy$2('');
                                        }.call(this, v);
                                    }.call(this, require('oia'));
                                }.call(this)) {
                                return 'baz';
                            }
                            return undefined;
                        }.call(this);
                    }.call(this);
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('baz');
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    if (function () {
                            return function (v) {
                                return function (v$2) {
                                    var truthy$2 = v$2.truthy;
                                    return truthy$2(eq(1, 2));
                                }.call(this, v);
                            }.call(this, require('oia'));
                        }.call(this)) {
                        return 'foo';
                    }
                    return function () {
                        if (function () {
                                return function (v) {
                                    return function (v$2) {
                                        var truthy$2 = v$2.truthy;
                                        return truthy$2(null);
                                    }.call(this, v);
                                }.call(this, require('oia'));
                            }.call(this)) {
                            return 'bar';
                        }
                        return function () {
                            if (function () {
                                    return function (v) {
                                        return function (v$2) {
                                            var truthy$2 = v$2.truthy;
                                            return truthy$2(keyword('else'));
                                        }.call(this, v);
                                    }.call(this, require('oia'));
                                }.call(this)) {
                                return 'baz';
                            }
                            return undefined;
                        }.call(this);
                    }.call(this);
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('baz');
    });
    it('should have cond short circuit', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    if (function () {
                            return function (v) {
                                return function (v$2) {
                                    var truthy$2 = v$2.truthy;
                                    return truthy$2(eq(1, 2));
                                }.call(this, v);
                            }.call(this, require('oia'));
                        }.call(this)) {
                        return 'foo';
                    }
                    return function () {
                        if (function () {
                                return function (v) {
                                    return function (v$2) {
                                        var truthy$2 = v$2.truthy;
                                        return truthy$2(true);
                                    }.call(this, v);
                                }.call(this, require('oia'));
                            }.call(this)) {
                            return 'bar';
                        }
                        return function () {
                            if (function () {
                                    return function (v) {
                                        return function (v$2) {
                                            var truthy$2 = v$2.truthy;
                                            return truthy$2(undefined_symbol);
                                        }.call(this, v);
                                    }.call(this, require('oia'));
                                }.call(this)) {
                                return 'baz';
                            }
                            return undefined;
                        }.call(this);
                    }.call(this);
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('bar');
    });
});
describe('data literals', function () {
    it('should allow to create lists', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return eq(function () {
                    return function (v) {
                        var list$3 = v.list;
                        return list$3(1, 2, 3, 4);
                    }.call(this, require('oia'));
                }.call(this), list$2(1, 2, 3, 4));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
    it('should allow to create hash maps', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return eq(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', 2, 'b', 4);
                    }.call(this, require('oia'));
                }.call(this), hash_map('a', 2, 'b', 4));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
    it('should allow to create hash maps and evaluate forms', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return eq(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', inc(1), str('b'), 4);
                    }.call(this, require('oia'));
                }.call(this), hash_map('a', 2, 'b', 4));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
    it('should allow to create deeply nested data structures', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return eq(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2('a', function () {
                            return function (v$2) {
                                var list$3 = v$2.list;
                                return list$3(2, function () {
                                    return function (v$3) {
                                        var list$4 = v$3.list;
                                        return list$4(3, 4);
                                    }.call(this, require('oia'));
                                }.call(this));
                            }.call(this, require('oia'));
                        }.call(this), 'b', function () {
                            return function (v$2) {
                                var hash_map$3 = v$2.hash_map;
                                return hash_map$3('c', 5, function () {
                                    return function (v$3) {
                                        var list$3 = v$3.list;
                                        return list$3(6, 7);
                                    }.call(this, require('oia'));
                                }.call(this), 'd');
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this, require('oia'));
                }.call(this), hash_map('a', list$2(2, list$2(3, 4)), 'b', hash_map('c', 5, list$2(6, 7), 'd')));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
    it('should allow to create js arrays', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return [
                        1,
                        2,
                        3,
                        4
                    ];
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql([
            1,
            2,
            3,
            4
        ]);
    });
    it('should allow to create js objects', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return {
                        'a': 1,
                        'b': 2
                    };
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql({
            a: 1,
            b: 2
        });
    });
    it('should allow to create nested js objects', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return {
                        'a': {
                            'c': [
                                3,
                                4
                            ]
                        },
                        'b': 2
                    };
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql({
            a: {
                c: [
                    3,
                    4
                ]
            },
            b: 2
        });
    });
});
describe('recursion', function () {
    it('should allow to express simple recursion', function () {
        var f = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function fib(n) {
                        return function () {
                            if (function () {
                                    return function (v) {
                                        return function (v$2) {
                                            var truthy$2 = v$2.truthy;
                                            return truthy$2(eq(n, 0));
                                        }.call(this, v);
                                    }.call(this, require('oia'));
                                }.call(this)) {
                                return 0;
                            }
                            return function () {
                                if (function () {
                                        return function (v) {
                                            return function (v$2) {
                                                var truthy$2 = v$2.truthy;
                                                return truthy$2(eq(n, 1));
                                            }.call(this, v);
                                        }.call(this, require('oia'));
                                    }.call(this)) {
                                    return 1;
                                }
                                return function () {
                                    if (function () {
                                            return function (v) {
                                                return function (v$2) {
                                                    var truthy$2 = v$2.truthy;
                                                    return truthy$2('else');
                                                }.call(this, v);
                                            }.call(this, require('oia'));
                                        }.call(this)) {
                                        return add(fib(n - 1), fib(n - 2));
                                    }
                                    return undefined;
                                }.call(this);
                            }.call(this);
                        }.call(this);
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(f(20)).to.eql(6765);
    });
    it('should allow to recur using loop/recur without blowing the stack', function () {
        var f = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function fib(n) {
                        return function () {
                            var res = {};
                            do {
                                res = function () {
                                    return function (v) {
                                        var a = v;
                                        return function (v$2) {
                                            var b = v$2;
                                            return function (v$3) {
                                                var iter = v$3;
                                                return function () {
                                                    if (function () {
                                                            return function (v$4) {
                                                                return function (v$5) {
                                                                    var truthy$2 = v$5.truthy;
                                                                    return truthy$2(iter == n);
                                                                }.call(this, v$4);
                                                            }.call(this, require('oia'));
                                                        }.call(this)) {
                                                        return a;
                                                    }
                                                    return {
                                                        _oia_recur: true,
                                                        _oia_vals: [
                                                            b,
                                                            a + b,
                                                            inc(iter)
                                                        ]
                                                    };
                                                }.call(this);
                                            }(res._oia_vals === undefined ? 0 : res._oia_vals[0 + 1 + 1]);
                                        }(res._oia_vals === undefined ? inc(a) : res._oia_vals[0 + 1]);
                                    }(res._oia_vals === undefined ? 0 : res._oia_vals[0]);
                                    ;
                                }();
                            } while ((res || 0)._oia_recur);
                            return res;
                        }.call(this);
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(f(20)).to.eql(6765);
        expect(f(500)).to.eql(1.394232245616977e+104);
    });
});
describe('keywords', function () {
    it('should be usable in collections', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function () {
                        return function (v) {
                            var list$3 = v.list;
                            return list$3(keyword('a'), 1, keyword('b'), function () {
                                return function (v$2) {
                                    var hash_map$2 = v$2.hash_map;
                                    return hash_map$2(keyword('c'), 2);
                                }.call(this, require('oia'));
                            }.call(this));
                        }.call(this, require('oia'));
                    }.call(this);
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(_.list(_.keyword('a'), 1, _.keyword('b'), _.hash_map(_.keyword('c'), 2)));
    });
    it('should evaluate to themselves', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return keyword('a')();
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(_.keyword('a'));
    });
    it('should evaluate as keys to get values from collections', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return keyword('a')(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2(keyword('a'), 1, keyword('b'), 2);
                    }.call(this, require('oia'));
                }.call(this));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
    });
});
describe('arity', function () {
    it('should allow calling functions without arity constraints, as in js', function () {
        var foo$2 = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function foo$3(a) {
                        return str('Hello ', a);
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(foo$2(1, 2)).to.eql('Hello 1');
        expect(foo$2()).to.eql('Hello undefined');
    });
    it('should allow to define functions with multiple arities', function () {
        var foo$2 = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function foo$3() {
                        var fnmap = {
                                1: function (a$2) {
                                    return str('Hello ', a$2);
                                },
                                2: function (a$2, b) {
                                    return str('There ', a$2, ' ', b);
                                }
                            };
                        var max_arity = 0;
                        for (var a in fnmap) {
                            max_arity = a > max_arity ? a : max_arity;
                        }
                        fnmap[null] = fnmap[max_arity];
                        var f = fnmap[arguments.length] || fnmap[null];
                        return f.apply(this, arguments);
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(foo$2(1)).to.eql('Hello 1');
        expect(foo$2(1, 2)).to.eql('There 1 2');
    });
    it('should allow to define named anonymous functions with multiple arities and refer to the name within the body', function () {
        var f = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function self() {
                        var fnmap = {
                                0: function () {
                                    return self('world');
                                },
                                1: function (who) {
                                    return str('Hello ', who, '!');
                                }
                            };
                        var max_arity = 0;
                        for (var a in fnmap) {
                            max_arity = a > max_arity ? a : max_arity;
                        }
                        fnmap[null] = fnmap[max_arity];
                        var f$2 = fnmap[arguments.length] || fnmap[null];
                        return f$2.apply(this, arguments);
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(f()).to.eql('Hello world!');
        expect(f('yellow')).to.eql('Hello yellow!');
    });
    it('should fallback to max arity in case supplied arguments do not match the specified arities', function () {
        var foo$2 = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function foo$3() {
                        var fnmap = {
                                1: function (a$2) {
                                    return str('Hello ', a$2);
                                },
                                2: function (a$2, b) {
                                    return str('There ', a$2, ' ', b);
                                }
                            };
                        var max_arity = 0;
                        for (var a in fnmap) {
                            max_arity = a > max_arity ? a : max_arity;
                        }
                        fnmap[null] = fnmap[max_arity];
                        var f = fnmap[arguments.length] || fnmap[null];
                        return f.apply(this, arguments);
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(foo$2()).to.eql('There undefined undefined');
        expect(foo$2(1, 2, 3)).to.eql('There 1 2');
    });
    it('should allow to define functions with optional arguments');
});
describe('dot notation', function () {
    it('should allow to use dot notation to invoke methods on JavaScript objects', function () {
        var a = {
                bar: function (x$2) {
                    return x$2 * 2;
                }
            };
        var b = {
                foo: function (x$2) {
                    return a;
                }
            };
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return a.bar(2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(4);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return b.foo().bar(2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(4);
    });
});
describe('chaining and doto', function () {
    it('should allow to use JavaScript chained APIs', function () {
        var A = function () {
            var self = this;
            this.v = 'init ';
            this.foo = function (x$2) {
                self.v += 'foo called with ' + x$2 + ' ';
                return self;
            };
            this.bar = function (x$2) {
                self.v += 'bar called with ' + x$2 + ' ';
                return self;
            };
        };
        var a = new A();
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return a.foo(1).bar(2).v;
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('init foo called with 1 bar called with 2 ');
    });
    it('should allow to repeatedly call methods on a JavaScript object', function () {
        var A = function () {
            var self = this;
            this.foo = null;
            this.bar = null;
            this.setFoo = function (x$2) {
                self.foo = x$2;
            };
            this.setBar = function (x$2) {
                self.bar = x$2;
            };
            this.getFooBar = function () {
                return self.foo + ' ' + self.bar;
            };
        };
        var a = new A();
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    a.setFoo('a');
                    a.setBar('b');
                    return a;
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }().getFooBar()).to.eql('a b');
    });
});
describe('threading', function () {
    it('should allow to thread first a value through a sequence of computations', function () {
        var a = 1;
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return dec(inc(inc(a)));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(2);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return add(add(a, 2), 3);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(6);
    }    // expect(
         //   oia (threadf [] (.push 1) first)
         //   ).to.eql(1);
);
    it('should allow to thread last a value through a sequence of computations', function () {
        var a = 1;
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return first(map(function (x$2) {
                    return inc(x$2);
                }, function () {
                    return function (v) {
                        var list$3 = v.list;
                        return list$3();
                    }.call(this, require('oia'));
                }.call(this).push(a)));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(2);
    });
});
describe('math operations', function () {
    it('should allow to add, subtract, multiply, divide a sequence of numbers and compute the modulo of two numbers', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return add(1, 2, 3);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(6);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return sub(3, 2, 1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(0);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return mul(1, 2, 3);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(6);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return div(3, 2, 1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1.5);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return mod(3, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
    });
    it('should allow to compare sequences of numbers', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return lt(1, 2, 3);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return lt(3, 2, 1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return lt(1, 2, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return gt(1, 2, 3);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return gt(3, 2, 1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return gt(3, 2, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return leq(1, 2, 3);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return leq(3, 2, 1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return leq(1, 2, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return geq(1, 2, 3);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(false);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return geq(3, 2, 1);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return geq(3, 2, 2);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(true);
    });
});
describe('continuations', function () {
    it('should allow to write asynchronous code in a synchronous fashion', function () {
        var foo$2 = function (x$2, cb) {
            var y = x$2 * 2;
            cb(y);
        };
        var bar = function (x$2, cb) {
            var y = x$2 + 1;
            cb(y);
        };
        var baz = function (x$2, cb) {
            var y = x$2 + 1;
            var z = x$2 * 2;
            cb(y, z);
        };
        (function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return foo$2(2, function (a) {
                    bar(a, function (b) {
                        baz(b, function (c, d) {
                            expect(b).to.eql(5);
                            expect(c).to.eql(6);
                            expect(d).to.eql(10);
                            return null;
                        });
                        return null;
                    });
                    return null;
                });
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }());
        var log = '';
        (function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    function fake_request(url, cb) {
                        return setTimeout(function () {
                            return cb(1234);
                        }, 1000);
                    }
                    ;
                    fake_request('fakeurl', function (data) {
                        log += 'Response received: ' + data + '.';
                        expect(log).to.eql('Request sent. Response received: 1234.');
                        return null;
                    });
                    return log += 'Request sent. ';
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }());
        expect(log).to.eql('Request sent. ');
    });
});
describe('apply', function () {
    it('should call a function given a list of arguments supplied as a collection', function () {
        expect(imm.is(imm.fromJS([
            1,
            2,
            3,
            4
        ]), function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return list$2.apply(this, function () {
                    return function (v) {
                        var list$3 = v.list;
                        return list$3(1, 2, 3, 4);
                    }.call(this, require('oia'));
                }.call(this).toJS());
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }())).to.eql(true);
    });
});
describe('bind', function () {
    it('should return a function with this set to the provided object', function () {
        var res = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function () {
                        return function (v) {
                            var a = v;
                            return function (v$2) {
                                var f = v$2;
                                return function (v$3) {
                                    var f1 = v$3;
                                    return function (v$4) {
                                        var f2 = v$4;
                                        return [
                                            f1(),
                                            f2()
                                        ];
                                    }.call(this, function () {
                                        return get(this, keyword('a'));
                                    }.bind(a));
                                }.call(this, f.bind(a));
                            }.call(this, function () {
                                return get(this, keyword('a'));
                            });
                        }.call(this, function () {
                            return function (v) {
                                var hash_map$2 = v.hash_map;
                                return hash_map$2(keyword('a'), 1, keyword('b'), 2);
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this);
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(res).to.eql([
            1,
            1
        ]);
    });
});
describe('multimethods', function () {
    it('should allow to define functions that dispatch according to the result of the evaluation of another function', function () {
        (function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    defmulti(boss, function (x$2) {
                        return get(x$2, keyword('type'));
                    });
                    defmethod(boss, keyword('employee'), function () {
                        return function (v) {
                            var list$3 = v.list;
                            return list$3(x);
                        }.call(this, require('oia'));
                    }.call(this), get(x, keyword('employer')));
                    return defmethod(boss, keyword('employer'), function () {
                        return function (v) {
                            var list$3 = v.list;
                            return list$3(x);
                        }.call(this, require('oia'));
                    }.call(this), get(x, keyword('name')));
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }());
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return boss(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2(keyword('type'), keyword('employee'), keyword('name'), 'Barnie', keyword('employer'), 'Fred');
                    }.call(this, require('oia'));
                }.call(this));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('Fred');
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return boss(function () {
                    return function (v) {
                        var hash_map$2 = v.hash_map;
                        return hash_map$2(keyword('type'), keyword('employer'), keyword('name'), 'Fred');
                    }.call(this, require('oia'));
                }.call(this));
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('Fred');
    });
});
describe('sequences', function () {
});
describe('cursors', function () {
    it('should allow to define reference types with read and write callbacks');
}    // , function() {
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
);
describe('exceptions', function () {
    it('should allow to try expressions and catch exceptions', function () {
        (function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    try {
                        foo.bar;
                    } catch (e) {
                        expect(e instanceof ReferenceError).to.eql(true);
                    }
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }());
        var side_effect = false;
        (function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    var ret;
                    try {
                        ret = foo.bar;
                    } catch (e) {
                        ret = expect(e instanceof ReferenceError).to.eql(true);
                    } finally {
                        side_effect = true;
                    }
                    return ret;
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }());
        expect(side_effect).to.eql(true);
    });
    it('should allow to throw exceptions', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    return function () {
                        throw Error('foo');
                    }.call(this);
                };
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.throw();
    });
});
describe('this and fnth', function () {
    it('should handle binding this fn-wise correctly from within IIFN', function () {
        var somefn = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function () {
                        return function () {
                            return function (v) {
                                var a = v;
                                return this.someprop;
                            }.call(this, 1);
                        }.call(this);
                    };
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        var bar = { someprop: 1 };
        var baz = {};
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return somefn.bind(bar)();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(1);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return somefn.bind(baz)();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(undefined);
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return somefn();
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql(undefined);
    });
    it('should allow a shorthand notation for defining a fn bound to the enclosing this, both named and unnamed', function () {
        var fn1, fn2;
        (function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return function () {
                    this.jee = 1;
                    return function () {
                        return function (v) {
                            var a = v;
                            return function (v$2) {
                                var b = v$2;
                                return function (v$3) {
                                    var c = v$3;
                                    fn1 = a;
                                    fn2 = b;
                                    return fn3 = c;
                                }.call(this, function cfn() {
                                    return this.jee;
                                }.bind(this));
                            }.call(this, function () {
                                return this.jee;
                            }.bind(this));
                        }.call(this, function () {
                            return this.jee;
                        });
                    }.call(this);
                }.call(this);
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }());
        expect(fn1.bind({ jee: 2 })()).to.eql(2);
        expect(fn2.bind({ jee: 2 })()).to.eql(1);
        expect(fn3.bind({ jee: 2 })()).to.eql(1);
    });
});
describe('str', function () {
    it('should allow to concatenate strings and literals', function () {
        expect(function () {
            var _$2 = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                // initialized oia.
                return str('a', 2, 'b', 3, 'c');
            }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
        }()).to.eql('a2b3c');
    });
});
describe('destructuring', function () {
    it('should destructure nested immutable data structures in let forms', function () {
        var r = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function () {
                        return function (v) {
                            var f = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var first$2 = v$3.first;
                                            return first$2(v);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var a = f;
                            var r$2 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var rest$2 = v$3.rest;
                                            return rest$2(v);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var f$2 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var first$2 = v$3.first;
                                            return first$2(r$2);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var b = f$2;
                            var r$3 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var rest$2 = v$3.rest;
                                            return rest$2(r$2);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var f$3 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var first$2 = v$3.first;
                                            return first$2(r$3);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var f$4 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var get$2 = v$3.get;
                                            return get$2(f$3, keyword('c'));
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var c = f$4;
                            var f$5 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var get$2 = v$3.get;
                                            return get$2(f$3, keyword('d'));
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var f$6 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var first$2 = v$3.first;
                                            return first$2(f$5);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var d = f$6;
                            var r$4 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var rest$2 = v$3.rest;
                                            return rest$2(f$5);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var f$7 = function () {
                                    return function (v$2) {
                                        return function (v$3) {
                                            var first$2 = v$3.first;
                                            return first$2(r$4);
                                        }.call(this, v$2);
                                    }.call(this, require('oia'));
                                }.call(this);
                            var e = f$7;
                            return function (v$2) {
                                var f$8 = v$2;
                                return eq(function () {
                                    return function (v$3) {
                                        var list$3 = v$3.list;
                                        return list$3(a, b, c, d, e);
                                    }.call(this, require('oia'));
                                }.call(this), function () {
                                    return function (v$3) {
                                        var list$3 = v$3.list;
                                        return list$3(1, 2, 3, 4, 5);
                                    }.call(this, require('oia'));
                                }.call(this));
                            }.call(this, 6);
                        }.call(this, function () {
                            return function (v) {
                                var list$3 = v.list;
                                return list$3(1, 2, function () {
                                    return function (v$2) {
                                        var hash_map$2 = v$2.hash_map;
                                        return hash_map$2(keyword('c'), 3, keyword('d'), function () {
                                            return function (v$3) {
                                                var list$4 = v$3.list;
                                                return list$4(4, 5);
                                            }.call(this, require('oia'));
                                        }.call(this));
                                    }.call(this, require('oia'));
                                }.call(this));
                            }.call(this, require('oia'));
                        }.call(this));
                    }.call(this);
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(r).to.eql(true);
    });
    it('should destructure nested JS data structures in let forms', function () {
        var r = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function () {
                        return function (v) {
                            var f = v[0];
                            var a = f;
                            var r$2 = v.slice(1);
                            var f$2 = r$2[0];
                            var b = f$2;
                            var r$3 = r$2.slice(1);
                            var f$3 = r$3[0];
                            var f$4 = f$3['c'];
                            var c = f$4;
                            var f$5 = f$3['d'];
                            var f$6 = f$5[0];
                            var d = f$6;
                            var r$4 = f$5.slice(1);
                            var f$7 = r$4[0];
                            var e = f$7;
                            return eq(function () {
                                return function (v$2) {
                                    var list$3 = v$2.list;
                                    return list$3(a, b, c, d, e);
                                }.call(this, require('oia'));
                            }.call(this), function () {
                                return function (v$2) {
                                    var list$3 = v$2.list;
                                    return list$3(1, 2, 3, 4, 5);
                                }.call(this, require('oia'));
                            }.call(this));
                        }.call(this, [
                            1,
                            2,
                            {
                                c: 3,
                                d: [
                                    4,
                                    5
                                ]
                            }
                        ]);
                    }.call(this);
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(r).to.eql(true);
    });
    it('should destructure nested immutable data structures in loop forms', function () {
        var r = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function () {
                        var res = {};
                        do {
                            res = function () {
                                return function (v) {
                                    var f = function () {
                                            return function (v$2) {
                                                return function (v$3) {
                                                    var first$2 = v$3.first;
                                                    return first$2(v);
                                                }.call(this, v$2);
                                            }.call(this, require('oia'));
                                        }.call(this);
                                    var a = f;
                                    var r$2 = function () {
                                            return function (v$2) {
                                                return function (v$3) {
                                                    var rest$2 = v$3.rest;
                                                    return rest$2(v);
                                                }.call(this, v$2);
                                            }.call(this, require('oia'));
                                        }.call(this);
                                    var f$2 = function () {
                                            return function (v$2) {
                                                return function (v$3) {
                                                    var first$2 = v$3.first;
                                                    return first$2(r$2);
                                                }.call(this, v$2);
                                            }.call(this, require('oia'));
                                        }.call(this);
                                    var b = f$2;
                                    var r$3 = function () {
                                            return function (v$2) {
                                                return function (v$3) {
                                                    var rest$2 = v$3.rest;
                                                    return rest$2(r$2);
                                                }.call(this, v$2);
                                            }.call(this, require('oia'));
                                        }.call(this);
                                    var f$3 = function () {
                                            return function (v$2) {
                                                return function (v$3) {
                                                    var first$2 = v$3.first;
                                                    return first$2(r$3);
                                                }.call(this, v$2);
                                            }.call(this, require('oia'));
                                        }.call(this);
                                    var _$3 = f$3;
                                    return function () {
                                        if (function () {
                                                return function (v$2) {
                                                    return function (v$3) {
                                                        var truthy$2 = v$3.truthy;
                                                        return truthy$2(gt(a, 3));
                                                    }.call(this, v$2);
                                                }.call(this, require('oia'));
                                            }.call(this)) {
                                            return eq(function () {
                                                return function (v$2) {
                                                    var list$3 = v$2.list;
                                                    return list$3(a, b);
                                                }.call(this, require('oia'));
                                            }.call(this), function () {
                                                return function (v$2) {
                                                    var list$3 = v$2.list;
                                                    return list$3(4, 5);
                                                }.call(this, require('oia'));
                                            }.call(this));
                                        }
                                        return {
                                            _oia_recur: true,
                                            _oia_vals: [map(function () {
                                                    return function (v$2) {
                                                        var list$3 = v$2.list;
                                                        return list$3(a, b, 3);
                                                    }.call(this, require('oia'));
                                                }.call(this), inc)]
                                        };
                                    }.call(this);
                                }(res._oia_vals === undefined ? function () {
                                    return function (v) {
                                        var list$3 = v.list;
                                        return list$3(1, 2, 3);
                                    }.call(this, require('oia'));
                                }.call(this) : res._oia_vals[0]);
                                ;
                            }();
                        } while ((res || 0)._oia_recur);
                        return res;
                    }.call(this);
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(r).to.eql(true);
    });
    it('should destructure nested JS data structures in loop forms', function () {
        var r = function () {
                var _$2 = require('oia');
                return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword, inc, dec, get, first, rest, reduce, transformer, Reduced, iterator, push, merge, transduce, seq, toArray, toObj, toIter, into, compose, map, filter, remove, cat, mapcat, keep, dedupe, take, takeWhile, drop, dropWhile, partition, partitionBy, range, protocols, LazyTransformer) {
                    // initialized oia.
                    return function () {
                        var res = {};
                        do {
                            res = function () {
                                return function (v) {
                                    var f = v[0];
                                    var a = f;
                                    var r$2 = v.slice(1);
                                    var f$2 = r$2[0];
                                    var b = f$2;
                                    var r$3 = r$2.slice(1);
                                    var f$3 = r$3[0];
                                    var _$3 = f$3;
                                    return function () {
                                        if (function () {
                                                return function (v$2) {
                                                    return function (v$3) {
                                                        var truthy$2 = v$3.truthy;
                                                        return truthy$2(gt(a, 3));
                                                    }.call(this, v$2);
                                                }.call(this, require('oia'));
                                            }.call(this)) {
                                            return eq(function () {
                                                return function (v$2) {
                                                    var list$3 = v$2.list;
                                                    return list$3(a, b);
                                                }.call(this, require('oia'));
                                            }.call(this), function () {
                                                return function (v$2) {
                                                    var list$3 = v$2.list;
                                                    return list$3(4, 5);
                                                }.call(this, require('oia'));
                                            }.call(this));
                                        }
                                        return {
                                            _oia_recur: true,
                                            _oia_vals: [map(function () {
                                                    return function (v$2) {
                                                        var list$3 = v$2.list;
                                                        return list$3(a, b, 3);
                                                    }.call(this, require('oia'));
                                                }.call(this), inc).toJS()]
                                        };
                                    }.call(this);
                                }(res._oia_vals === undefined ? [
                                    1,
                                    2,
                                    3
                                ] : res._oia_vals[0]);
                                ;
                            }();
                        } while ((res || 0)._oia_recur);
                        return res;
                    }.call(this);
                }(_$2.truthy, _$2.falsey, _$2.not, _$2.equals, _$2.eq, _$2.neq, _$2.add, _$2.sub, _$2.mul, _$2.div, _$2.mod, _$2.lt, _$2.gt, _$2.leq, _$2.geq, _$2.prn, _$2.str, _$2.list, _$2.hash_map, _$2.keyword, _$2.inc, _$2.dec, _$2.get, _$2.first, _$2.rest, _$2.reduce, _$2.transformer, _$2.Reduced, _$2.iterator, _$2.push, _$2.merge, _$2.transduce, _$2.seq, _$2.toArray, _$2.toObj, _$2.toIter, _$2.into, _$2.compose, _$2.map, _$2.filter, _$2.remove, _$2.cat, _$2.mapcat, _$2.keep, _$2.dedupe, _$2.take, _$2.takeWhile, _$2.drop, _$2.dropWhile, _$2.partition, _$2.partitionBy, _$2.range, _$2.protocols, _$2.LazyTransformer);
            }();
        expect(r).to.eql(true);
    });
});