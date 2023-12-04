function getShippingCost(country) {
switch (country) {
    case "Australia":
        return `Shipping to Australia will cost 170 credits`;
    case "China":
        return `Shipping to China will cost 100 credits`;
    case "Chile":
        return `Shipping to Chile will cost 250 credits`;
    case "Jamaica":
        return `Shipping to Jamaica will cost 120 credits`;
    default:
        return `Sorry, there is no delivery to your country`;                 
}
}
