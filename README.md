# js
JavaScript

In JavaScript there are two basic ways for this to be available: 1) in the constructor function
when it’s invoked with the new keyword, or 2) when invoking a function on an object, like
in object.method(arg).

Another downside of using prototype-based classes is that, unlike we did in the closure-based
approach, an instance cannot be a function; it must be an object that’s implicitly created when
the new keyword is used.

Instead of modules returning the exported value, modules can support circular dependencies by
modifying an exported object.

The Node.js runtime implements a file-based module pattern that implements the CommonJS
standard. Using this pattern you can create several module patterns: Singletons, closure-based
classes, prototype-based classes, and façades.
