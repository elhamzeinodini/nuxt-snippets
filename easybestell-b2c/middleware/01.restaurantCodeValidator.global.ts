export default defineNuxtRouteMiddleware((to, from) => {
	if (to.params.restaurantCode === "sHG2Q") {
		return navigateTo({ name: "[restaurantCode]" })
	}

	if (to.name !== "invalid-restaurant-code") {
		return navigateTo({ name: "invalid-restaurant-code" })
	}
})
