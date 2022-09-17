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

    describe("getName", () => {
        it("should return the name of employee", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";

            const result = new Employee(newId, newName, newEmail).getName();

            expect(result).toEqual(newName);
        });
    });

    describe("getEmail", () => {
        it("should return the email of employee", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";

            const result = new Employee(newId, newName, newEmail).getEmail();

            expect(result).toEqual(newEmail);
        });
    });

    describe("getRole", () => {
        it("should return the role of employee", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";

            const result = new Employee(newId, newName, newEmail).getRole();

            expect(result).toEqual('Employee');
        });
    });
});
