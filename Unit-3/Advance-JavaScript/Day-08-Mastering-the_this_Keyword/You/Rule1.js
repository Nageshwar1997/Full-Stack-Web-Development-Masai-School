// By default, the this keyword points at the global object.if we “simply execute” a regular function (without explicitly, implicity or hard binding the this to any object) then this points to the global object, which in the browser is the window object.
function sayGoodbye() {
    console.log("Good bye! ", this); // Window
}

function sayHello() {
    console.log("Helloo! ", this); // Window
    sayGoodbye();
}

sayHello();
// Output:

// Helloo! < ref * 1 > Object[global] {
//     global: [Circular * 1],
//         clearInterval: [Function: clearInterval],
//             clearTimeout: [Function: clearTimeout],
//                 setInterval: [Function: setInterval],
//                     setTimeout: [Function: setTimeout] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//         performance: Performance {
//         nodeTiming: PerformanceNodeTiming {
//             name: 'node',
//                 entryType: 'node',
//                     startTime: 0,
//                         duration: 68.5541000366211,
//                             nodeStart: 1.9993000030517578,
//                                 v8Start: 5.992200016975403,
//                                     bootstrapComplete: 45.084800004959106,
//                                         environment: 23.239500045776367,
//                                             loopStart: -1,
//                                                 loopExit: -1,
//                                                     idleTime: 0
//         },
//         timeOrigin: 1703330554029.271
//     },
//     clearImmediate: [Function: clearImmediate],
//         setImmediate: [Function: setImmediate] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     }
// }
// Good bye! < ref * 1 > Object[global] {
//     global: [Circular * 1],
//         clearInterval: [Function: clearInterval],
//             clearTimeout: [Function: clearTimeout],
//                 setInterval: [Function: setInterval],
//                     setTimeout: [Function: setTimeout] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//         performance: Performance {
//         nodeTiming: PerformanceNodeTiming {
//             name: 'node',
//                 entryType: 'node',
//                     startTime: 0,
//                         duration: 71.49110007286072,
//                             nodeStart: 1.9993000030517578,
//                                 v8Start: 5.992200016975403,
//                                     bootstrapComplete: 45.084800004959106,
//                                         environment: 23.239500045776367,
//                                             loopStart: -1,
//                                                 loopExit: -1,
//                                                     idleTime: 0
//         },
//         timeOrigin: 1703330554029.271
//     },
//     clearImmediate: [Function: clearImmediate],
//         setImmediate: [Function: setImmediate] {
//         [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     }
// }