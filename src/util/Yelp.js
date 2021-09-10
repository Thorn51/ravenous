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
            if (data.business) {
                data.business.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                })
            } else {
                throw new Error
            }
        } catch (err) {
            console.log(err)
        }
    }
}