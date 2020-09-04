const colorController = (function color() {})();

const UIController = (function UI() {})();

const appController = (function appCont(colorCtrl, UICtrl) {})(colorController, UIController);
