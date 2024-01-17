import getData from "../oddEven";

global.score = 1;

test("returns an error for non-numbers", (done) => {
  const startTime = Date.now();
  getData("not a number").catch((error) => {
    expect(error).toBe("error");
    expect(Date.now() - startTime).toBeLessThan(100);
    done();
  });
  global.score += 2;
});
test('returns "odd" for odd numbers', (done) => {
  getData(3).then((result) => {
    expect(result).toBe("odd");
    done();
  });
  global.score += 2;
});

test('returns "even" for even numbers', (done) => {
  getData(4).then((result) => {
    expect(result).toBe("even");
    done();
  });
  global.score += 2;
});
test("resolves in 2 seconds for odd numbers", (done) => {
  const startTime = Date.now();
  getData(3).then(() => {
    expect(Date.now() - startTime).toBeGreaterThanOrEqual(2000);
    done();
  });
  global.score += 2;
});

test("resolves in 4 seconds for even numbers", (done) => {
  const startTime = Date.now();
  getData(4).then(() => {
    expect(Date.now() - startTime).toBeGreaterThanOrEqual(4000);
    done();
  });
  global.score += 2;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
