function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  
  const getDataFromAPI = async () => {
    await sleep(5);
    return {
      status: 200,
      items: [
        {
          itemName: "Item 1",
          itemDescription: "Description 1"
        },
        {
          itemName: "Item 2",
          itemDescription: "Description 2"
        },
        {
          itemName: "Item 3",
          itemDescription: "Description 3"
        }
      ]
    };
  };
  
  module.exports = {
    getDataFromAPI
  };
  