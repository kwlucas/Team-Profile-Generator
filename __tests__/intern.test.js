const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("construct", () => {
        it("should create Intern object", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newSchool = "Test University";

            const tester = new Intern(newId, newName, newEmail, newSchool);

            expect(tester).toHaveProperty('id', newId);
            expect(tester).toHaveProperty('name', newName);
            expect(tester).toHaveProperty('email', newEmail);
            expect(tester).toHaveProperty('school', newSchool);
        });
    });

    describe("getID", () => {
        it("should return the id of Intern", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newSchool = "Test University";

            const result = new Intern(newId, newName, newEmail, newSchool).getId();

            expect(result).toEqual(newId);
        });
    });

    describe("getName", () => {
        it("should return the name of Intern", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newSchool = "Test University";

            const result = new Intern(newId, newName, newEmail, newSchool).getName();

            expect(result).toEqual(newName);
        });
    });

    describe("getEmail", () => {
        it("should return the email of Intern", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newSchool = "Test University";

            const result = new Intern(newId, newName, newEmail, newSchool).getEmail();

            expect(result).toEqual(newEmail);
        });
    });

    describe("getSchool", () => {
        it("should return the email of Intern", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newSchool = "Test University";

            const result = new Intern(newId, newName, newEmail, newSchool).getSchool();

            expect(result).toEqual(newSchool);
        });
    });

    describe("getRole", () => {
        it("should return the role of Intern", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newSchool = "Test University";

            const result = new Intern(newId, newName, newEmail, newSchool).getRole();

            expect(result).toEqual('Intern');
        });
    });
});
