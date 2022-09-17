const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("construct", () => {
        it("should create engineer object", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newGithub = "github/user.com";

            const tester = new Engineer(newId, newName, newEmail, newGithub);

            expect(tester).toHaveProperty('id', newId);
            expect(tester).toHaveProperty('name', newName);
            expect(tester).toHaveProperty('email', newEmail);
            expect(tester).toHaveProperty('github', newGithub);
        });
    });

    describe("getID", () => {
        it("should return the id of Engineer", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newGithub = "github/user.com";

            const result = new Engineer(newId, newName, newEmail, newGithub).getId();

            expect(result).toEqual(newId);
        });
    });

    describe("getName", () => {
        it("should return the name of Engineer", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newGithub = "github/user.com";

            const result = new Engineer(newId, newName, newEmail, newGithub).getName();

            expect(result).toEqual(newName);
        });
    });

    describe("getEmail", () => {
        it("should return the email of Engineer", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newGithub = "github/user.com";

            const result = new Engineer(newId, newName, newEmail, newGithub).getEmail();

            expect(result).toEqual(newEmail);
        });
    });

    describe("getRole", () => {
        it("should return the role of Engineer", () => {
            const newId = "7";
            const newName = "Chester";
            const newEmail = "test@email.com";
            const newGithub = "github/user.com";

            const result = new Engineer(newId, newName, newEmail, newGithub).getRole();

            expect(result).toEqual('Engineer');
        });
    });
});
