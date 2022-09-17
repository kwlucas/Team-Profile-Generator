const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("construct", () => {
        it("should create emplyee object", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";

            const tester = new Employee(newId, newName, newEmail);

            expect(tester).toHaveProperty('id', newId);
            expect(tester).toHaveProperty('name', newName);
            expect(tester).toHaveProperty('email', newEmail);
        });
    });

    describe("getID", () => {
        it("should return the id of employee", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";

            const result = new Employee(newId, newName, newEmail).getId();

            expect(result).toEqual(newId);
        });
    });
});
