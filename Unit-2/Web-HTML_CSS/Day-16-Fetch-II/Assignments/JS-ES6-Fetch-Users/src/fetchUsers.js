const getUsersData = async () => {
  try {
    let data = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users");
    let fetchedData = await data.json();
    return fetchedData;

  } catch (err) {
    // console.log(err);
    return err;
  }

};
getUsersData();
function splitData(data, totalPages) {
  let [data1, data2, ...data3] = data;
  
  return {
    totalPages,
    data1,
    data2,
    data3
  }
}


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
