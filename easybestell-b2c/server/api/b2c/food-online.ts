import type { H3Event } from "h3"
import type { RestaurantMenu } from "~/types/menu"

import { defineEventHandler, getQuery } from "h3"
import { readFile } from "node:fs/promises"
import path from "node:path"

export default defineEventHandler(async (event: H3Event) => {
	// since the api route is "api/b2c/food-online?rc=sHG2Q"
	const query = getQuery(event)
	const restaurantCode = query.rc as string
	const restaurantDataPath = path.resolve(process.cwd(), "server/mockData/restaurantData.json")
	let restaurantData: string

	try {
		if (!restaurantCode.length) {
			return { error: "restaurant code is required" }
		}

		if (restaurantCode !== "sHG2Q") {
			return { error: "Invalid Restaurant Code" }
		}

		restaurantData = await readFile(restaurantDataPath, "utf-8")
		const parsedRestaurantData: RestaurantMenu[] = JSON.parse(restaurantData)

		return parsedRestaurantData
	} catch (error) {
		return {
			error: "failed to load the restaurant data",
		}
	}
})
