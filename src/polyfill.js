if (typeof global === 'undefined') {
    window.global = window;
}
if (typeof Buffer === 'undefined') {
    window.Buffer = require('buffer/').Buffer;
}