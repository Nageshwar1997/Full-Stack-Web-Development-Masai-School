// import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://127.0.0.1:5173/", id: 67890 }];
describe("Test", function () {
	let acc_score = 1;

	data.map(({ submission_link: url, id }) => {
		if (url.charAt(url.length - 1) != "/") {
			url = url + "/";
		}

		it('Contains a paragraph with the text "React is a javascript library"', () => {
			cy.visit(url);
			cy.get("p").first().should("have.text", "React is a javascript library");

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("Contains a paragraph inside div.main with the correct text", () => {
			cy.visit(url);
			cy.get(".main p").should(
				"have.text",
				"Click the below button to alert 'Hello'"
			);

			cy.then(() => {
				acc_score += 1;
			});
		});
		it('Contains a button with the text "Alert Hello"', () => {
			cy.visit(url);
			cy.get(".main button").should("have.text", "Alert Hello");
			cy.then(() => {
				acc_score += 1;
			});
		});

		it('Triggers an alert with "Hello" on button click', () => {
			cy.visit(url);
			const stub = cy.stub();
			cy.on("window:alert", stub);
			cy.get(".main button")
				.click()
				.then(() => {
					expect(stub.getCall(0)).to.be.calledWith("Hello");
				});

			cy.then(() => {
				acc_score += 1;
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
