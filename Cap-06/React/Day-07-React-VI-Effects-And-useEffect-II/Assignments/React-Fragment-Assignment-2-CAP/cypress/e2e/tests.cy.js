// import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://127.0.0.1:5173/", id: 67890 }];
describe("Test", function () {
	let acc_score = 1;

	data.map(({ submission_link: url, id }) => {
		if (url.charAt(url.length - 1) != "/") {
			url = url + "/";
		}

		it('Should get a div with id "jsi" which contains three "p" tags', () => {
			cy.visit(url);
			cy.get("#jsi").find("p").should("have.length", 3);

			cy.then(() => {
				acc_score += 1;
			});
		});

		it('The first line inside the div with id "jsi" should contain "Hello, World!"', () => {
			cy.visit(url);
			cy.get("#jsi").find("p").first().should("have.text", "Hello, World!");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it('The second line inside the div with id "jsi" should contain "Numbers: 1, 2, 3, 4, 5"', () => {
			cy.visit(url);
			cy.get("#jsi")
				.find("p")
				.eq(1)
				.should("have.text", "Numbers: 1, 2, 3, 4, 5");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it('The third line inside the div with id "jsi" should contain doubled numbers', () => {
			cy.visit(url);
			cy.get("#jsi")
				.find("p")
				.eq(2)
				.should("have.text", "Doubled Numbers: 2, 4, 6, 8, 10");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it('Should get a first "p" tag outside of the div with id "jsi" showing login status', () => {
			cy.get("#jsi")
				.next("p")
				.invoke("text")
				.then((text) => {
					expect(text.trim()).to.be.oneOf([
						"LogIn Status: 1",
						"LogIn Status: 0",
					]);
				});
			cy.visit(url);

			cy.then(() => {
				acc_score += 1;
			});
		});

		it('Should get a div with id "cr" which contains one "p" tag and one "button"', () => {
			cy.visit(url);
			cy.get("#cr").find("p").should("exist");
			cy.get("#cr").find("button").should("exist");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it('Conditional rendering inside div with id "cr" based on login status', () => {
			cy.visit(url);
			cy.get('#jsi').next('p').then((status) => {
				const isLoggedIn = status.text().includes('1');
				if (isLoggedIn) {
					cy.get('#cr p').should('have.text', 'Welcome back, user!');
					cy.get('#cr button').should('have.text', 'Logout');
				} else {
					cy.get('#cr p').should('have.text', 'Please log in.');
					cy.get('#cr button').should('have.text', 'Login');
				}

					cy.then(() => {
						acc_score += 3;
					});
				});
		});

		after(`generate score`, () => {
			//////////////
			console.log(acc_score);
			let result = {
				id,
				marks: acc_score,
			};
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
