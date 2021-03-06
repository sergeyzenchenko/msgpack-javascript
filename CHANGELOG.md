This is the revision history of @msgpack/msgpack

## v1.2.3 2019/05/29

https://github.com/msgpack/msgpack-javascript/compare/v1.2.2...v1.2.3

* More optimizations for string decoding performance

## v1.2.2 2019/05/29

https://github.com/msgpack/msgpack-javascript/compare/v1.2.1...v1.2.2

* Improved array decoding performance ([#32](https://github.com/msgpack/msgpack-javascript/pull/32) by @sergeyzenchenko)
* Improved string decoding performance with TextDecoder ([#34](https://github.com/msgpack/msgpack-javascript/pull/34) by @sergeyzenchenko)

## v1.2.1 2019/05/26

https://github.com/msgpack/msgpack-javascript/compare/v1.2.0...v1.2.1

* Reduced object allocations in `encode()`

## v1.2.0 2019/05/25

https://github.com/msgpack/msgpack-javascript/compare/v1.1.0...v1.2.0

* Shipped with WebAssembly ([#26](https://github.com/msgpack/msgpack-javascript/pull/26))
* Fix handling strings to keep lone surrogates
* Fix issues in decoding very large string, which caused RangeError

## v1.1.0 2019/05/19

https://github.com/msgpack/msgpack-javascript/compare/v1.0.0...v1.1.0

* Add options to `decode()` and `decodeAsync()`:
  `maxStrLength`, `maxBinLength`, `maxArrayLength`, `maxMapLength`, and `maxExtLength` to limit max length of each item

## v1.0.1 2019/05/12

https://github.com/msgpack/msgpack-javascript/compare/v1.0.0...v1.0.1

* Fix IE11 incompatibility

## v1.0.0 2019/05/11

* Initial stable release
