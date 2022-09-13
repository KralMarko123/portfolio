export const VARIANTS = {
	label: {
		hidden: {
			opacity: 0,
			y: -100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 1, type: "spring", duration: 0.5 },
		},
	},

	text: {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 1.5, type: "spring", duration: 0.5 },
		},
	},

	image: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 2, type: "spring", duration: 0.5 },
		},
	},

	project: {
		hidden: {
			opacity: 0,
			y: 100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", duration: 0.5 },
		},
	},
};