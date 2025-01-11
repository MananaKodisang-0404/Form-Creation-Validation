document.addEventListener("DOMContentLoaded", () => {
    // Define the asynchronous function to fetch user data
    const fetchUserData = async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Container for displaying user data

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);

            // Check if the response is okay
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list element to hold user names
            const userList = document.createElement('ul');

            // Loop through the users and create list items
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to the container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors during fetch
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    };

    // Call the function to fetch user data
    fetchUserData();
});
