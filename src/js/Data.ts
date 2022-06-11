export const getServices = async () => {


    const raw_data = await fetch("/api/services")
        .then(function (response) {
            // The response is a Response instance.
            // You parse the data into a useable format using `.json()`
            console.log(response)
            return response.text();
        })
        .then(function (data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        });
};
