const url = "http://localhost:3030/contact";

export const contactEmail = (data) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};