export const fetchQuerry =  async(queryDescription) => {
    try {
        
        const response = await fetch('http://localhost:3080/querry', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                queryDescription
            })
        })

        const data = await response.json()
        
        return data
    } catch (error) {
        console.log(error);
    }
}