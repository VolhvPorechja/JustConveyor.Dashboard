"use strict";

if (!Date.prototype.toLocalISOString) {
    (function () {

        function pad(number) {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        Date.prototype.toLocalISOString = function () {
            return this.getFullYear() +
                '-' + pad(this.getMonth() + 1) +
                '-' + pad(this.getDate()) +
                'T' + pad(this.getHours()) +
                ':' + pad(this.getMinutes()) +
                ':' + pad(this.getSeconds()) +
                '.' + (this.getMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                '+' + pad(-this.getTimezoneOffset() / 60) + ':00';
        };

    }());
}

export default class Ext {
    dateToTZdate(date) {
        return new Date(date).toLocalISOString();
    }
}