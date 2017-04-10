# TypeScript
---
A typed superset of JavaScript
It is an open source technology
Source files will have extension as.ts

###### Quick start
[typescriptlang.org](https://www.typescriptlang.org/docs/tutorial.html)

###### TSC (TypeScript Compiler)
It is a source-to-source compiler
It is known as transcompiler or transpiler

###### Environment Setup (For Windows and MAC OS X)
1.	Text editor - based on the OS (Sublime text, notepad, Notepad++, vim, vi Emacs etc.)
2.	Node.js - Download installer from [here](https://nodejs.org/en/download/)

	(a) Open terminal and execute	__node --version__ or __node -v__

	(b) Then execute __npm install -g typescript__

3.	Installation of IDEs (Optional)

```
admins-MacBook-Pro-3:TypeScript admin$ node --version
v7.0.0
```

```
admins-MacBook-Pro-3:TypeScript admin$ npm install -g typescript
/usr/local/bin/tsc -> /usr/local/lib/node_modules/typescript/bin/tsc
/usr/local/bin/tsserver -> /usr/local/lib/node_modules/typescript/bin/tsserver
/usr/local/lib
└── typescript@2.2.2 
```

Visit [here](https://www.tutorialspoint.com/typescript/typescript_environment_setup.htm) to check about the installation process on Linux.


```javascript
//hello.ts
function hello(){
 console.log("Hello world");
}

hello();
```

```
admins-MacBook-Pro-3:src admin$ tsc hello.ts 

admins-MacBook-Pro-3:src admin$ ls
hello.js	hello.ts
```

###### TypeScript Plugin
[For sublime text 3](https://packagecontrol.io/packages/TypeScript)

###### Designer 
Anders Hejlsberg

###### Features
1. Statically typed, 
2. Portable
3. It is JavaScript. Means .js files can be renamed to __.ts__

###### TypeScript equals
ECMASCRIPT5 + ECMASCRIPT6 + Additional features 

###### Features
Supports Inheritance & Interface

###### Components
1.	Language
2.	TypeScript Compiler
3.	Language Service

###### Declaration File

When a TypeScript script gets compiled, there is an option to generate a declaration 
file (with the extension .d.ts) that functions as an interface to the components in the
compiled JavaScript. 
 
###### Typescript playground
[Run typescript code here](https://www.typescriptlang.org/play/)


