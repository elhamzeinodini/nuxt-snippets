interface Category {
	id: number
	name: string
}

interface ImgHistory {
	id: number
	name: string
}

interface foodAddonItem {
	createdAt: string
	updatedAt: string
	id: number
	title: string
	price: number
	isActive: boolean
}

interface FoodAddon {
	createdAt: string
	updatedAt: string
	id: number
	title: string
	isMandatory: boolean
	minItemsForceSelectCount: null | number
	maxItemsForceSelectCount: null | number
	items: foodAddonItem[]
}

interface FoodSize {
	id: number
	name: string
	price: number
	companyPrice: number
	maxPrice: number
	isDefault: boolean
	isActive: boolean
	customizableIngredients: []
	attachedAddons: []
	attachedIngredients: []
	ingredients: []
	addons: FoodAddon[]
}

export interface RestaurantMenu {
	id: number
	seq: number
	name: string
	code: string
	description: string
	discountPercent: null
	isDiscountActive: boolean
	categoryId: number
	category: Category
	imageFileName: string
	imageHistory: ImgHistory[]
	sizes: FoodSize[]
	ingredients: []
	vatId: number
	attachedAddons: []
	attachedIngredients: []
	colorCode: string
	fontColorCode: string
	icon: string
}
