"use strict";

import $ from 'jquery';

export default class JcAPI {
    constructor(baseAddress) {
        this.baseAddress = baseAddress;
    }
    
    getMetrics() {
        return $.get(this.baseAddress);
    }
}