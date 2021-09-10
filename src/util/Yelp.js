const key = process.env.REACT_APP_YELP_API_KEY

export const Yelp = {
    async search(term, location, sortBy) {
        try {
            const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    'Authorization': `Bearer ${key}`
                }
            })
            const data = await res.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }
}