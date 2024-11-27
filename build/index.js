(() => {
  // src/Attributes.ts
  var Attributes = class {
    constructor(data) {
      this.data = data;
    }
    get(propName) {
      return this.data[propName];
    }
    set(updatedData) {
      Object.assign(this.data, updatedData);
    }
  };

  // src/index.ts
  var attrs = new Attributes({ id: "5", name: "john", age: 34 });
  var id = attrs.get("id");
  var age = attrs.get("age");
})();
