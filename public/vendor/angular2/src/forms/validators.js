System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection", "./model"], function($__export) {
  "use strict";
  var assert,
      isBlank,
      isPresent,
      List,
      ListWrapper,
      StringMapWrapper,
      modelModule,
      Validators;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
      StringMapWrapper = $__m.StringMapWrapper;
    }, function($__m) {
      modelModule = $__m;
    }],
    execute: function() {
      Validators = $__export("Validators", (function() {
        var Validators = function Validators() {
          ;
        };
        return ($traceurRuntime.createClass)(Validators, {}, {
          required: function(c) {
            assert.argumentTypes(c, modelModule.Control);
            return isBlank(c.value) || c.value == "" ? {"required": true} : null;
          },
          nullValidator: function(c) {
            assert.argumentTypes(c, assert.type.any);
            return null;
          },
          compose: function(validators) {
            assert.argumentTypes(validators, assert.genericType(List, Function));
            return assert.returnType((function(c) {
              assert.argumentTypes(c, modelModule.Control);
              var res = ListWrapper.reduce(validators, (function(res, validator) {
                var errors = validator(c);
                return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
              }), {});
              return StringMapWrapper.isEmpty(res) ? null : res;
            }), Function);
          },
          group: function(c) {
            assert.argumentTypes(c, modelModule.ControlGroup);
            var res = {};
            StringMapWrapper.forEach(c.controls, (function(control, name) {
              if (c.contains(name) && isPresent(control.errors)) {
                Validators._mergeErrors(control, res);
              }
            }));
            return StringMapWrapper.isEmpty(res) ? null : res;
          },
          array: function(c) {
            assert.argumentTypes(c, modelModule.ControlArray);
            var res = {};
            ListWrapper.forEach(c.controls, (function(control) {
              if (isPresent(control.errors)) {
                Validators._mergeErrors(control, res);
              }
            }));
            return StringMapWrapper.isEmpty(res) ? null : res;
          },
          _mergeErrors: function(control, res) {
            StringMapWrapper.forEach(control.errors, (function(value, error) {
              if (!StringMapWrapper.contains(res, error)) {
                res[error] = [];
              }
              ListWrapper.push(res[error], control);
            }));
          }
        });
      }()));
      Object.defineProperty(Validators.required, "parameters", {get: function() {
          return [[modelModule.Control]];
        }});
      Object.defineProperty(Validators.nullValidator, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      Object.defineProperty(Validators.compose, "parameters", {get: function() {
          return [[assert.genericType(List, Function)]];
        }});
      Object.defineProperty(Validators.group, "parameters", {get: function() {
          return [[modelModule.ControlGroup]];
        }});
      Object.defineProperty(Validators.array, "parameters", {get: function() {
          return [[modelModule.ControlArray]];
        }});
    }
  };
});
//# sourceMappingURL=validators.es6.map

//# sourceMappingURL=./validators.js.map