const StyleSheet = () => {
  return `
            /* Base styles */
            body {
            font-family: sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5; /* Light gray background */
            }

            /* Directory container */
            .directory-container {
            display: flex;
            flex-wrap: wrap; /* Wrap items to fit on multiple lines if needed */
            list-style: none; /* Remove default list style */
            padding: 0;
            margin: 0;
            }

            /* Directory item */
            .directory-item {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px 20px; /* Add more horizontal padding */
            margin: 10px;
            width: calc(25% - 20px); /* Responsive width based on flexbox */
            box-sizing: border-box; /* Ensure padding doesn't affect width calculation */
            cursor: pointer; /* Add hover effect for a clickable look */
            background-color: #fff; /* White background for each item */
            }

            /* Links */
            .links {
            text-decoration: none;
            color: black;
            }
            .links:hover {
            color: blue;
            }

            /* Directory item hover */
            .directory-item:hover {
            background-color: #eee; /* Lighten background on hover */
            }

            /* Title */
            h1 {
            text-align: center;
            margin-bottom: 20px;
            }`;
};

module.exports = StyleSheet;
