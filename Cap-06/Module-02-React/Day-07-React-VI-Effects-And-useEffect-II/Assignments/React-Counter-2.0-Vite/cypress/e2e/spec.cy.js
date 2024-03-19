/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import data from "../../submissionData.json"; // do not create this file


// const data = [{ submission_link: "http://localhost:5173/", id: "nishut" }];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
	describe("React App", () => {
		Cypress.on("uncaught:exception", (err, runnable) => {
			return false;
		});

		let acc_score = 1;
		beforeEach(() => {
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
			cy.visit(url);
		});


		it("should render App and have basic structure", () => {
			cy.get('.counter').should("exist");

			cy.get('.plusonebtn').should("exist");
			cy.get('.minusonebtn').should("exist");
			cy.get('.resetbtn').should("exist");
			cy.get('.odd-or-even').should("exist");
			cy.get('.is-prime').should("exist");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("counter should have initial value 0", () => {
			cy.get('.counter').contains("0");
			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should have a disabled -1 button", () => {
			cy.get('.counter').contains("0");
			cy.get('.minusonebtn').should("be.disabled");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should increment counter by 1", () => {
			cy.get('.plusonebtn').click();
			cy.get('.counter').contains("1");
			cy.get('.plusonebtn').click();
			cy.get('.counter').contains("2");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should decrement counter by 1", () => {
			cy.get('.plusonebtn').click();
			cy.get('.counter').contains("1");
			cy.get('.plusonebtn').click();
			cy.get('.counter').contains("2");
			cy.get('.minusonebtn').click();
			cy.get('.counter').contains("1");
			cy.get('.minusonebtn').click();
			cy.get('.counter').contains("0");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should display if the number is even or odd", () => {
			const plusonebtn = '.plusonebtn';

			for (let i = 0; i <= 11; i++) {
				if (i % 2 === 0) {
					cy.get('.odd-or-even').contains("Even");
				} else {
					cy.get('.odd-or-even').contains("Odd");
				}
				cy.get(plusonebtn).click();
			}

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should display if the number is prime", () => {
			const plusonebtn = '.plusonebtn';

			for (let i = 0; i <= 11; i++) {
				if ([2, 3, 5, 7, 11].includes(i)) {
					cy.get('.is-prime').contains("true");
				} else {
					cy.get('.is-prime').contains("false");
				}
				cy.get(plusonebtn).click();
			}
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should reset counter to 0", () => {

			const plusonebtn = '.plusonebtn';
			const resetbtn = '.resetbtn';

			for (let i = 0; i <= 11; i++) {
				cy.get(plusonebtn).click();
			}
			cy.get('.counter').contains("12");

			cy.get(resetbtn).click();
			cy.get('.counter').contains("0");
			cy.then(() => {
				acc_score += 1;
			});
		});

		after(() => {
			let result = {
				id,
				marks: Math.ceil(acc_score),
			};
			console.log(result);
			result = JSON.stringify(result);
			cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
				if (err) {
					console.error(err);
				}
			});
			//////////////////
		});
	});
});
