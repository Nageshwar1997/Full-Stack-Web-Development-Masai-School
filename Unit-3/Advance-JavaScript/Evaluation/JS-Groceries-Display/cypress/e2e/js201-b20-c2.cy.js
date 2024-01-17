import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
let localData = [
  {
    id: "62581c7ab4a7bf3d26859e38",
    name: "Maggie",
    price: 20,
    image: "https://www.nyoooz.com/uploads/nyoooz-images/maggi_noodles.jpg",
    createdAt: "2022-04-14T13:07:06.613Z",
    updatedAt: "2022-04-14T13:07:06.613Z",
  },
  {
    id: "62581b1db4a7bf3d26859e2c",
    name: "Bread",
    price: 59,
    image:
      "https://media.istockphoto.com/photos/detailed-closeup-of-sliced-grain-bread-on-white-background-picture-id157587362?b=1&k=20&m=157587362&s=170667a&w=0&h=mlUrq36SGBMv1I8O7zENzCP0chmn2ZBBnwq2htADV5U=",
    createdAt: "2022-04-14T13:01:17.599Z",
    updatedAt: "2022-04-14T13:01:17.599Z",
  },
  {
    id: "62581c3db4a7bf3d26859e36",
    name: "Pasta",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    createdAt: "2022-04-14T13:06:05.030Z",
    updatedAt: "2022-04-14T13:06:05.030Z",
  },
];
describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it(` Check if API call Made`, () => {
      cy.request(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries"
      ).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.length(10);
      });
      cy.visit(url);
      cy.wait(2000);
      cy.get("#items").children().should("have.length", 10);
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check If 10 items present on DOM

    it(` Check if 10 items are present on DOM`, () => {
      cy.visit(url);
      cy.wait(2000);
      cy.get("#items").children().should("have.length", 10);
      cy.then(() => {
        acc_score += 1;
      });
    });

    //Add items to cart and check count on navbar

    it(`onclicking the add to cart  button products should be added to the cart and the cart count should be incremented in navbar`, () => {
      cy.get(".add_to_cart").eq(0).click();
      cy.get(".add_to_cart").eq(1).click();
      cy.get(".add_to_cart").eq(2).click();
      cy.get("#item_count").should("have.text", 3);
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check cart items stored to localstorage or not

    it(` check if items are added to LocalStorage`, () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("items"));
      expect(data.length).to.equal(3);
      data.map((ele, index) => {
        expect(ele.name).to.equal(localData[index].name);
        expect(ele.image).to.equal(localData[index].image);
        expect(ele.price).to.equal(localData[index].price);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    // Check items are reflected on cart page

    it(`Visit the cart page & check the total cart length & value`, () => {
      cy.visit(`${url}/cart.html`);
      cy.get("#cart").children().should("have.length", 3);
      cy.get("#cart_total").should("have.text", 178);
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check remove functionality
    it(` check remove functionality`, () => {
      cy.get(".remove").eq(1).click();
      cy.get("#cart").children().should("have.length", 2);
      cy.then(() => {
        acc_score += 1;
      });
    });

    // Check if item removed from localstorage as well

    it(` if items are removed from LocalStorage`, () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("items"));
      expect(data.length).to.equal(2);
      expect(data[0].name).to.equal(localData[0].name);
      cy.then(() => {
        acc_score += 1;
      });
    });

    // Checkout page

    it(`should visit checkout page and onclicking the checkout button  order message should be displayed and cart should be cleared`, () => {
      cy.clock();
      cy.get("#checkout").click();
      cy.get("#name").type("Santa Banta");
      cy.get("#number").type(1234567890);
      cy.get("#address").type("Delhi");
      cy.get("#place-order").click();
      cy.wait(100);

      cy.get("#order-message").should(
        "have.text",
        "Your order is successfully placed"
      );
      cy.visit(url);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      //////////////
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
