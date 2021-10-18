(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    const toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.buyItem = function (itemIndex) {
      return ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    const alreadyBoughtList = this;

    alreadyBoughtList.items =
      ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    const service = this;

    let toBuyList = [
      { name: "cookies", quantity: 9 },
      { name: "milk", quantity: 1 },
      { name: "ice cream", quantity: 3 },
      { name: "soda", quantity: 4 },
      { name: "gummy bears", quantity: 10 },
      { name: "chocolate", quantity: 5 },
      { name: "water", quantity: 1 },
    ];

    let alreadyBoughtList = [];

    service.getToBuyItems = function () {
      return toBuyList;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtList;
    };

    service.buyItem = function (itemIndex) {
      if (itemIndex >= 0) {
        const boughtItem = toBuyList.splice(itemIndex, 1);
        alreadyBoughtList.unshift(...boughtItem);
      }
    };
  }
})();
