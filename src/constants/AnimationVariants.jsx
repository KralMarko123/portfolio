export const VARIANTS = {
	label: {
		hidden: {
			opacity: 0,
			y: -100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 0.5, type: "spring", duration: 0.5 },
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
			transition: { delay: 0.75, type: "spring", duration: 0.5 },
		},
	},

	image: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 1.25, type: "spring", duration: 0.5 },
		},
	},

	header: {
		hidden: {
			opacity: 0,
			y: -100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 1.5, type: "spring", duration: 0.5 },
		},
	},

	simple: {
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

	page: {
		enter: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", delay: 0.6, duration: 0.5 },
		},

		hidden: {
			opacity: 0,
			y: -100,
		},

		exit: {
			opacity: 0,
			y: -100,
			transition: { type: "spring", duration: 0.5 },
		},
	},
};
