const url = "http://localhost:3030/users/contact";

export const contactEmail = async (data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    
    return await res.json();
};