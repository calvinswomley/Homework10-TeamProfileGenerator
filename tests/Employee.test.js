const Class = require("../lib/classes.js");

//test name, id, email, getName(), getId(), getEmail(), and getRole(). Code below is an example
describe("Class", () => {
    describe("name", () => {
      it("Should return name string entered in command line", () => {
        const obj = new Arithmetic();
  
        expect("number" in obj).toEqual(true);
      });
  
      it("should set 'number' when created", () => {
        const num = 108;
  
        const obj = new Arithmetic(num);
  
        expect(obj.number).toEqual(num);
      });
  
      it("should default 'number' to 0", () => {
        const obj = new Arithmetic();
  
        expect(obj.number).toEqual(0);
      });
    });