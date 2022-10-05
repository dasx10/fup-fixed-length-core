# FixedLengthCore
## install

`npm i --save fup-fixed-length-core`


## Use

```
const fixedLengthCore = require('fup-fixed-length-core');

or es module

import fixedLengthCore from 'fup-fixed-length-core';
```



## Example

```

const executor = (...parameters) => ...;
executor.length; // 0
const fixLengthExecutor = fixedLengthCore(2, executor);
fixLengthExecutor.length; // 2

```
