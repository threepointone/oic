var expect = require('chai').expect;
var imm = require('immutable');
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
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return f0();
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql(1);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return f1(1);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql(1);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return f2(1, 2);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
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
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return foo0.bar();
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql(1);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return foo1.bar(1);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql(1);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return foo2.bar(1, 2);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql([
            1,
            2
        ]);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return goo0.bar.baz();
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql(1);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return goo1.bar.baz(1);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql(1);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return goo2.bar.baz(1, 2);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
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
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return goo1.bar.baz(data.a.b);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql(0);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return goo2.bar.baz(data.a.b, 1);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql([
            0,
            1
        ]);
        expect(function () {
            var _ = require('oia');
            return function (truthy, falsey, not, equals, eq, neq, add, sub, mul, div, mod, lt, gt, leq, geq, prn, str, list$2, hash_map, keyword) {
                // initialized oia.
                return goo3.bar.baz(data.a.b, 1, data.a.b);
            }(_.truthy, _.falsey, _.not, _.equals, _.eq, _.neq, _.add, _.sub, _.mul, _.div, _.mod, _.lt, _.gt, _.leq, _.geq, _.prn, _.str, _.list, _.hash_map, _.keyword);
        }()).to.eql([
            0,
            1,
            0
        ]);
    });
}    // it("should allow to call mori functions on mori data structures", function() {
     //   var foo = oia (vector 1 2 3)
     //   expect(oia (conj foo 4)).to.eql(oia (vector 1 2 3 4));
     // });
);