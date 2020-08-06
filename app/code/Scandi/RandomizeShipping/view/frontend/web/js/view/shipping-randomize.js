define([
    'uiRegistry',
    'underscore'
], function (registry, _) {
    'use strict';

    var displayArea = 'checkout.steps.shipping-step.shippingAddress.shipping-address-fieldset';
    var elements = registry.get(displayArea)._elems;

    return function (Shipping) {
        return Shipping.extend({

            initialize: function () {
                this._super();
                var fields = this.clearElements(elements);
                this.removeElements(fields);
                this.invertLabels(fields);
            },

            /**
             * Shuffle the elements and hide the two fields.
             * @param fields
             */
            removeElements: function (fields) {
                var self = this;
                _.each(_.shuffle(fields), function (item, index) {
                    if (index === 0 || index === 1) {
                        item.visible(false);
                    }
                });
            },

            /**
             * Invert all labels strings
             * @param fields
             */
            invertLabels: function (fields) {
                _.each(fields, function (item) {
                    var string = item.label.split("");
                    string = string.reverse();
                    string = string.join("");
                    item.label = string;
                })
            },

            /**
             * Removes the strings or empty elements of the array,
             * returning only the input fields.
             * @returns {[]} Returns array of fields.
             */
            clearElements: function () {
                return _.filter(elements, function (item) {
                    return _.isObject(item);
                });
            },

            /**
             * Change the Next Button behavior, leading to cart page.
             */
            setShippingInformation: function () {
                window.location.href = window.checkoutConfig.cartUrl;
            }
        });
    }
})
