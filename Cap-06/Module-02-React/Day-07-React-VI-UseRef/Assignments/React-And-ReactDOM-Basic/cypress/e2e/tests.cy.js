// import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://127.0.0.1:5500/", id: 67890 }];
describe("Test", function () {
	let acc_score = 1;
	

	data.map(({ submission_link: url, id }) => {
		if (url.charAt(url.length - 1) != "/") {
			url = url + "/";
		}

		it(`should have a paragraph tag with text "Seize the day".`, () => {
			cy.visit(url);
      cy.get("p").should("contain", "Seize the day");

			cy.then(() => {
				acc_score += 4;
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