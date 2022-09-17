const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("construct", () => {
        it("should create manager object", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newOffice = "5";

            const tester = new Manager(newId, newName, newEmail, newOffice);

            expect(tester).toHaveProperty('id', newId);
            expect(tester).toHaveProperty('name', newName);
            expect(tester).toHaveProperty('email', newEmail);
            expect(tester).toHaveProperty('officeNum', newOffice);
        });
    });

    describe("getID", () => {
        it("should return the id of Manager", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newOffice = "5";

            const result = new Manager(newId, newName, newEmail, newOffice).getId();

            expect(result).toEqual(newId);
        });
    });

    describe("getName", () => {
        it("should return the name of Manager", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newOffice = "5";

            const result = new Manager(newId, newName, newEmail, newOffice).getName();

            expect(result).toEqual(newName);
        });
    });

    describe("getEmail", () => {
        it("should return the email of Manager", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newOffice = "5";

            const result = new Manager(newId, newName, newEmail, newOffice).getEmail();

            expect(result).toEqual(newEmail);
        });
    });

    describe("getRole", () => {
        it("should return the role of Manager", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newOffice = "5";

            const result = new Manager(newId, newName, newEmail, newOffice).getRole();

            expect(result).toEqual('Manager');
        });
    });
});
